<template>
    <div class="box-100">
        <div ref="home-container" class="pad-20 home-container" v-show="!dragPanelShow">
        
            <div class="welcome-container">
                
                <div>Hi，欢迎使用ZZNODE-UI !</div>
                <div>轻松创建、部署和管理你的前端产品，提升研发效率、降低业务成本。</div>
            
            </div>

            <el-row :gutter="20" class="display-container">
                
                <el-col :span="14" >

                    <div 
                       v-for="item in displayLeftList"
                       :class="[item.class,'display-wapper']"
                       :key="item.id"
                    >
                       <components
                            
                            :is="item.id"

                       ></components>
                    </div>
                    
                   
                    
                </el-col>     

                <el-col :span="10" >
                    
                    <div 
                       v-for="item in displayRightList"
                       :class="[item.class,'display-wapper']"
                       :key="item.id"
                    >
                       <components
                            
                            :is="item.id"

                       ></components>
                    </div>
                    
                </el-col>     
                

            </el-row>    

        
            <div 
                class="func-container" 
                :style="{ right : funcRight + 'px' }"
                ref="func-container"
            >
                
                <div class="el-icon-star-off"></div>
                <div class="el-icon-magic-stick" @click="ThemePanelShow = true"></div>
                <div class="el-icon-setting" @click="dragPanelShow = true"></div>
                <div class="el-icon-arrow-up"></div>

            </div>    


        </div>

        <!-- 选择主题 -->
        <!-- <transition name="el-fade-in">  -->
        <transition name="main" mode="out-in">
            <theme-panel v-if="ThemePanelShow" @close="closeThemePanel"/>
        </transition>
    

        <!-- 自定义布局 -->
        <transition name="el-fade-in"> 
            <drag-panel v-if="dragPanelShow" @close="closeDragPanel"/>
        </transition>
    
    </div>    
</template>


<script>

    export default{
 
        data(){

            return {

                funcRight:0,
                dragPanelShow:false,
                ThemePanelShow:false

            }
        
        },
        computed:{
            
            displayLeftList(){

                return this.$store.state.dragLayout.displayDragLeftList
            },
            displayRightList(){

                return this.$store.state.dragLayout.displayDragRightList
            }
         
        },
        components:{

            OpmTask:()=>import("./components/OpmTask"),
            BdmCondition:()=>import("./components/BdmCondition"),
            FlowOver:()=>import("./components/FlowOver"),
            HistoryRecord:()=>import("./components/HistoryRecord"),
            HistoryNotice:()=>import("./components/HistoryNotice"),
            NcoStatus:()=>import("./components/NcoStatus"),

            DragPanel:()=>import("./components/DragPanel"),
            ThemePanel:()=>import("./components/ThemePanel")
        },
        methods:{

            queryFuncPostion(){

                this.$nextTick(()=>{

                    let box = document.querySelector(".app-main");

                    let innerBox = this.$refs["home-container"]

                    this.funcRight = box.offsetWidth - innerBox.clientWidth + 20;

                    this.funcRight > 37 ? this.funcRight = 37 : this.funcRight;


                    console.log(this.funcRight)
                })

            },
            closeDragPanel(){

                this.dragPanelShow = false;
            },
            closeThemePanel(){

               this.ThemePanelShow = false;
            }

        },
        mounted(){

            this.queryFuncPostion();


            window.addEventListener("resize",()=>{ 
                
                this.queryFuncPostion();
                
            })

        },
        watch:{

            $route(){

               this.queryFuncPostion();

            }

        } 

    }


</script>


<style lang="less" scoped>

    .home-container{

        background-color:#f1f3f9;
        min-height:100%;
        position: relative;

        .welcome-container{

            height:140px;
            background-color:#247fff;
            border-radius: 6px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            padding-left:20px;
            div{

                color:#fff;
            }

            div:nth-child(1){

                font-size:18px;
                margin-bottom:30px;
            }

        }

        .display-container{
            
            width:calc(100% - 50px);
            margin-top:20px;

            .display-wapper{

                background-color:#fff;
                border-radius:4px;
                margin-bottom:20px;
            }
            
            .opm-wapper{

                height:130px;
            }

            .bdm-wapper{

                height:300px;
            }

            .flow-wapper{

                height:220px;
            }

            .collect-wapper{

                height:170px;
            }

            .notice-wapper{

                height:210px;
            }

            .nco-wapper{

                height:270px;
            }

        }

        .func-container{

            position:fixed;
            width:50px;
            top:340px;
            padding:0 5px;
            //display:none;

            &>div{

                width:40px;
                height:40px;
                border-radius:4px;
                background-color: #31a4ff;
                box-shadow: 0px 0px 6px 0px  #31a4ff;
                line-height:40px;
                text-align:center;
                margin-bottom:20px;
                font-size:20px;
                color:#fff;
                cursor:pointer;

            }

            &>div:nth-child(1){

                background-color: #fff;
                color:rgb(162,162,162);
                box-shadow: 0px 0px 6px 0px  rgba(0, 0, 0, 0.2);
            }

        }
        
    }

    .main-enter,.main-leave-to {
        opacity: 0;
        transform: translateX(200px)
    }
    .main-enter-active,.main-leave-active {
        transition: all 0.5s ease-in-out
    }

     

</style>