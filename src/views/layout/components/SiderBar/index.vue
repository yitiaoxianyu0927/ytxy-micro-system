<template>
    <div 
        class="box-100 sider-bar"
        :class="[isCollapse?'close-sidebar':'']"
    >
       
     
            <div class="logo-container" v-if="layoutType == '1'">
            
                    <div class="title" v-if="!isCollapse" >ZZNODE-UI </div>
            
                <div class="hamburger-container">
                    <Hamburger/>
                </div>
                
            </div>       
            <div class="menu-container">
                <div class="menu-scroller-container">
    
                    <div class="menu-display-container">
                        <el-menu

                            :default-active="$route.path"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            :collapse="isCollapse"
                            :collapse-transition="false"
                            @select="handleSelect"
                            
                        >
                            <sider-bar-item v-for="item in permission_routers" :key="item.id" :item="item"/>
                        
                        </el-menu>
                    </div>    
                </div>    
            </div>

    </div>
</template>


<script>

    import { mapGetters } from "vuex"

    import { appsMains } from '@/micro/apps-menu'

   

    export default{
 
        data(){

            return {

               appsMains

            }
        
        },
        computed:{

            ...mapGetters(
                [
                    "permission_routers",
                    "baseMenuId",
                    "sidebar"
                ]
            ),
            isCollapse(){
                 
                return !this.sidebar.opened  
            },
            layoutType(){
                
                return this.$store.state.app.layoutType
            }

        },
        components:{

            SiderBarItem:()=>import("./SiderBarItem.vue"),
            Hamburger:()=>import("../Hamburger")
        },
        methods:{

            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key,keyPath){


            },
            

        },
        mounted(){

            console.log("permission_routers",this.permission_routers)

        } 

    }


</script>


<style lang="less" scoped>
   
    .sider-bar{

        box-shadow: 0px 5px 10px 0px  rgba(0, 0, 0, 0.16);
        padding:0 10px;
        color: #409eff; 
        .logo-container{

            height:50px;
            position: relative;
            .title{

                height:50px;
                line-height:50px;
                float:left;
                padding-left:10px;
                font-size: 18px;
                font-weight:bold;
                cursor:pointer;
            }

            .hamburger-container{
              
                position: relative;
                height:50px;
                line-height:50px;
                float:right;
                font-size: 20px;
                padding-right:4px; 
                cursor:pointer;
                width:40px;
                &>div{

                    top:50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    position:absolute;
                }
            }
        }

        .menu-container{

            height:calc(100% - 50px);
            overflow:hidden; 
            padding-bottom:20px;
            .menu-scroller-container{

                height:100% ;
                width:calc(100% + 40px);
                padding-right:40px;
                overflow:auto;
                .menu-display-container{

                    width:100%;
                }
            }
        }
        
        /deep/.el-menu{

            border:none;
            overflow:hidden;

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

    }


    .close-sidebar{
          
        padding:0px;  
        .logo-container{

            width:64px;
            
            .hamburger-container{

                position: absolute;
                padding-right: 0px;
                top:50%;
                left: 50%;
                transform: translate(-50%,-50%);
             
            }
        }

        /deep/.el-icon-arrow-right{

            display: none;
        }
         
         

    }
    


</style>