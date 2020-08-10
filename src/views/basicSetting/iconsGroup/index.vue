<template>
   <div class="icons-group pad-20">

        <div class="search-bar">
           <el-input v-model="iconName" placeholder="请输入图标名称" prefix-icon="el-icon-search"/>
        </div>
        
        <div class="tab-container">
            <el-tabs v-model="activeName" type="border-card">
                <el-tab-pane label="icomoon" name="icomoon" v-if="tabHidden.indexOf('icomoon')" >
                    <div class="grid-panel">
                        <div 
                            
                            v-for="item in icomoonGroup"
                            :key="item"
                            @click="handleClipboard(generateIcomoonIconCode(item),$event,item)"
                        >
                            <el-tooltip placement="top">
                                <div slot="content">
                                    {{generateIcomoonIconCode(item)}}
                                </div>
                                <div class="icon-item" :style="{fontSize:size+'px'}">
                                    <i :class="item" />
                                    <span>{{ item }}</span>
                                </div>
                            </el-tooltip>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="svg-icon" name="svg-icon" v-if="tabHidden.indexOf('svg-icon')">
                    <div class="grid-panel">
                        <div 
                            
                            v-for="item in svgGroup"
                            :key="item"
                            @click="handleClipboard(generateSvgIconCode(item),$event,item)"
                        >
                            <el-tooltip placement="top">
                                <div slot="content">
                                    {{generateSvgIconCode(item)}}
                                </div>
                                <div class="icon-item">
                                    <svg-icon :icon-class="item" class-name="disabled" />
                                    <span>{{ item }}</span>
                                </div>
                            </el-tooltip>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="element-ui" name="element-ui" v-if="tabHidden.indexOf('element-ui')">
                    <div class="grid-panel">
                        <div 
                            
                            v-for="item in elementGroup"
                            :key="item"
                            @click="handleClipboard(generateElementIconCode(item),$event,'el-icon-'+item)"
                        >
                            <el-tooltip placement="top">
                                <div slot="content">
                                    {{generateElementIconCode(item)}}
                                </div>
                                <div class="icon-item">
                                    <i :class="'el-icon-'+item" />
                                    <span>{{ item }}</span>
                                </div>
                            </el-tooltip>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>    
        
   </div>
</template>


<script>

    import elementIcons from "@/config/icons/element-icons.js";
    import icomoonIcons from "@/config/icons/icomoon-icons.js";
    import svgIcons from "@/config/icons/svg-icons.js";
    import clipboard from '@/utils/clipboard.js'
   
    export default{

        data(){

            return{

                activeName:"icomoon",
                icomoonIcons,
                elementIcons,
                svgIcons,
                iconName:""

            }

        },
        props:{

            size:{

                type:Number,
                default:30
            },
            mode:{

                type:String,
                default:"normal"
            },
            tabHidden:{
                
                type:Array,
                default:() => []
            }
        },
        computed:{

            icomoonGroup(){
                
                return icomoonIcons.filter(item => item.indexOf(this.iconName) >= 0).filter((item,index) => index < 100);

            },
            svgGroup(){
                
                return svgIcons.filter(item => item.indexOf(this.iconName) >= 0).filter((item,index) => index < 100);

            },
            elementGroup(){
                
                return elementIcons.filter(item => item.indexOf(this.iconName) >= 0).filter((item,index) => index < 100);

            }
        },
        methods:{

            generateIcomoonIconCode(symbol){
                
                return `<i class="${symbol}" />`

            },
            generateSvgIconCode(symbol){
                
                 return `<svg-icon icon-class="${symbol}" />`

            },
            generateElementIconCode(symbol){
                
                return `<i class="el-icon-${symbol}" />`

            },
            handleClipboard(text, event , className) {

                let mode = this.mode;

                let param = {};

                let option = {

                    "normal":()=>{

                        clipboard(text, event);

                    },
                    "selectIcon":()=>{


                    }
                }

                option[mode]();

                

                this.$emit("select",{
                    ...param,className
                })
            
            }


        },
        mounted(){



        }
    }


</script>


<style lang="less" scoped>

    .icons-group{

        min-height:100%;
        position:relative;

        .el-tabs{

            min-height:calc(100% - 20px);
            overflow:hidden;
            
        }

        .grid-panel{
          
            position: relative;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

            .icon-item {

                margin: 20px ;
                height: 80px;
                text-align: center;
                width: 80px;
                float: left;
                font-size: 30px;
                color: #24292e;
                cursor: pointer;
            }

            span {
                display: block;
                font-size: 16px;
                margin-top: 10px;
            }

            .disabled {
                pointer-events: none;
            }
            
        }
      
        .search-bar{

            height: 50px;

            .el-input{

                width:100%;
                max-width: 300px;
            }
            .el-button{

                margin-left:10px;
            }

        }
        
        .tab-container{

            height: calc(100% - 40px);

        }

    }
    
</style>