<template>
    <div class="box-100 drag-panel pad-20">
       
        <div class="left-container">
             
            <div class="layout-list pad-10">
                <el-scrollbar>
                    <div class="layout-welcome">Hi，欢迎使用ZZnode-UI !</div>   
                    
                    <div class="layout-drag-container" >
                        
                        <div class="layout-drag-left-container">
                            <draggable class="drag-list" :options="options" :list="displayDragLeftList" >
                        
                                <div 
                                    v-for="item in displayDragLeftList" :key="item.id" 
                                    class="pad-10 "
                                    :class="['display-'+item.id]"
                                >
                                    {{ item.name }}
                                </div>
                            </draggable> 
                        </div>

                        <div class="layout-drag-right-container">         
                            <draggable class="drag-list" :options="options" :list="displayDragRightList" >
                        
                                <div 
                                    v-for="item in displayDragRightList" :key="item.id" 
                                    class="pad-10 "
                                    :class="['display-'+item.id]"
                                >
                                    {{ item.name }}
                                </div>
                            </draggable>
                        </div>
                    </div>
                </el-scrollbar>
            </div>     
            <div class="del-layout">
                <draggable :options="options" :list="dragList">
                    <i class="el-icon-delete"/>拖拽到此处删除
                </draggable>    
            </div>
        </div>

        <div class="right-container pad-10">
            <div class="title">组件</div>
            <div class="component-list">
                <el-scrollbar>
                    <draggable class="drag-list" :options="options" :list="dragList">
                
                        <div 
                            v-for="item in dragList" :key="item.id" 
                            class="pad-10 "
                            :class="['display-'+item.id]"
                        >
                            {{ item.name }}
                        </div>
                    </draggable>
                </el-scrollbar>
            </div>
            <div class="func-container">
                <el-button type="primary" @click="saveLayout" size="mini">保存布局</el-button>
            </div>
        </div>



    </div>
</template>


<script>

    import draggable from 'vuedraggable'

    export default {
         
        data(){

            return{

                options: {
                   group: 'mission'
                },
                
                // dragList: [],
                // displayDragLeftList:[
                //     { name: "巡检任务情况" ,id :"OpmTask" ,class:"opm-wapper" },
                //     { name: "全省故障情况", id: "BdmCondition" ,class:"bdm-wapper" },
                //     { name: "流量越限情况", id: "FlowOver" ,class:"flow-wapper" },
                // ],
                // displayDragRightList:[
                //     { name: "我的收藏", id: "HistoryRecord" ,class:"collect-wapper" },
                //     { name: "公告", id: "HistoryNotice" ,class:"notice-wapper" },
                //     { name: "割接状态占比", id: "NcoStatus" ,class:"nco-wapper" },
                // ]
            }
        },
        computed:{
            
            displayDragLeftList(){

                return this.$store.state.dragLayout.displayDragLeftList
            },
            displayDragRightList(){

                return this.$store.state.dragLayout.displayDragRightList
            },
            dragList(){

                return this.$store.state.dragLayout.displayDragOtherList
            },
         
        },
        components: {
            draggable
        },
        methods:{

            
            saveLayout(){


                this.$store.dispatch("changeLeftList",this.displayDragLeftList);
                this.$store.dispatch("changeRightList",this.displayDragRightList);
                this.$store.dispatch("changeOtherList",this.dragList);
                
                this.$emit("close")

            },
            delLayout(){


            }

        }, 
        mounted(){



        }

    }

</script>


<style lang="less" scoped>
    
    .drag-panel{

        position: absolute;
        top:0px;        
        background-color:#f1f3f9;

        .left-container{

            position: relative;
            float: left;
            width:calc(60% - 10px);
            height: 100%;
            background-color: #fff;
            border-radius: 4px;
            .layout-list{

                height: calc(100% - 40px);

                .layout-welcome{

                    height:40px;
                    border-radius:4px;
                    line-height:40px;
                    padding-left:20px;
                    background-color:#247fff;
                    color:#fff;
                    margin-bottom:10px;
                
                }

                /deep/ .layout-drag-container{

                    height:calc(100% - 50px);

                    .layout-drag-left-container{

                        float:left;
                        width: calc(60% - 5px);
                    }
                    .layout-drag-right-container{

                        float:left;
                        width: calc(40% - 5px);
                        margin-left:10px;
                    }

                    .layout-drag-left-container,.layout-drag-right-container{
                         
                        height:100%;

                    }

                    

                    // &>div{

                    //     min-height:100%;
                    // }

                }

                
            }
            .del-layout{
                
                height:40px;
                line-height: 40px;
                text-align: center;
                //background:#e8f2ff;
                //color: #262626;
                background-color:#fb4b4c;
                color:#fff;
                border-radius:4px;
                
                i{

                    margin-right: 10px;
                }
                &>div{

                    height:100%;
                }

                div[class*='display-']{
                    display:none;
                }
            }

            // .del-layout:hover{

            //     background-color:#fb4b4c

            // }
        }

        .right-container{

            position: relative;
            float: left;
            margin-left: 20px;
            width: calc(40% - 10px);
            height: 100%;
            background-color: #fff;
            border-radius: 4px;

            .title{

                height: 30px;
                color: rgba(0, 0, 0, 0.8);
                border-bottom: 1px solid #ccc;
                padding-left:4px;
            }

            /deep/ .component-list{

                height: calc(100% - 70px);
                padding:10px 0;

                &>div{

                    min-height:100%;
                }

            }

            div[class*='display-']{

               height:100px;
               width:calc(50% - 5px);
               float: left;
              
            }

            div[class*='display-']:nth-child(2n){

               margin-left: 10px;
              
            }

            .func-container{

                height: 40px;
                padding-top:10px;
                text-align: center;

            }
        }

        /deep/ div[class*='display-']{
            
            background-color: rgba(36, 127, 255, 0.1);
            border-radius: 4px;
            border: solid 1px #d6e4ff;
            margin-bottom:10px;

        }


        .el-scrollbar{

            height: 100%;
            /deep/.el-scrollbar__wrap{

                overflow-x: hidden;
                .el-scrollbar__view{

                    height: 100%;

                    .drag-list{

                        min-height: 100%;
                        overflow: auto;
                    }
                }
            }
        }

        // /deep/.display-ca{

        //     width:240px;
        //     height: 100px;
            
        // }

        // /deep/.display-opm{

        //     width:240px;
        //     height: 100px;
            
        // }

        // /deep/.display-bdm{

        //     width:390px;
        //     height: 140px;
            
        // }
    }

</style>
