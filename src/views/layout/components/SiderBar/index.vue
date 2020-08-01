<template>
    <div 
        class="box-100 sider-bar"
        :class="[isCollapse?'close-sidebar':'']"
    >
       
        <!-- <el-scrollbar> -->
            <div class="logo-container">
                <!-- <transition name="el-fade-in">      -->
                    <div class="title" v-if="!isCollapse" >ZZNODE-UI</div>
                <!-- </transition>     -->
                <div class="hamburger">
                    <Hamburger/>
                </div>
                
            </div>       
            <div class="menu-container">
                <div class="menu-scroller-container">
                    <el-scrollbar>
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
                            
                            
                            <!-- <template
                                
                                v-for="item in appsMains"
                            
                            > 
                                <router-link :to="item.path">
                                    <el-menu-item :index="item.path" >
                                        {{item.children[0].meta.title}}
                                    </el-menu-item>
                                </router-link> 
                            </template> -->

                        </el-menu>
                    </el-scrollbar>
                </div>    
            </div>
        <!-- </el-scrollbar> -->

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

            .hamburger{
              
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
            .menu-scroller-container{

               height:100% ;
               width:calc(100% + 40px);
               padding-right:40px;
            //    overflow:auto;
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
            
            .hamburger{

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