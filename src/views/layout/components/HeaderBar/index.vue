<template>
    <div 
        class="box-100 header-bar"
    >
       
        <!-- <el-scrollbar> -->
                  
         
            <div class="menu-container">

                <scroll-pane ref="scrollPane" class="headerbar-view-wrapper">   

                    <el-menu

                        :default-active="$route.path"
                        class="el-menu-demo"
                        mode="horizontal"
                        @open="handleOpen"
                        @close="handleClose"
                        @select="handleSelect"
                        background-color="#25b5cd"
                        text-color="#fff"
                        active-text-color="#fff"
                        
                    >
                        <header-bar-item v-for="item in permission_routers" :key="item.id" :item="item"/>
                        
                    </el-menu>
                </scroll-pane>
                
            </div>


    </div>
</template>


<script>

    import { mapGetters } from "vuex"

    import { appsMains } from '@/micro/apps-menu'

    import { getToken } from "@/utils/auth.js"

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
            title(){

                
                return "门户"

            },
            projectName(){

                return this.$store.state.projectConfig.projectName
            }

        },
        components:{

            HeaderBarItem:()=>import("./HeaderBarItem.vue"),
            scrollPane:()=>import("@/components/scrollPane")
    
        },
        methods:{

            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key,keyPath){

                let province = CORE_CONFIG.PROVINCE;

                if(province == "ynyd"){

                    if(key == this.$route.path) return;

                    let publicPath = window.location.href.substring(0,window.location.href.indexOf("/#/")) + "/#";

                    let token =  getToken();

                    if(token){

                        window.open(`${publicPath}${key}?x_token=${token}`)
                    
                    }else{

                        this.$alert('连接超时,请重新登录', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {

                                this.$router.replace("").catch(err => {
                                    this.$router.push("/login");
                                })
                                
                            }
                        });
                    }


                }

                
            },
            

        },
        mounted(){


        } 

    }


</script>


<style lang="less" scoped>
   
    .header-bar{

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
             
            img{

                position:absolute;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                width:24px;
                height:24px;
            } 

            .hamburger-container{
                
                position: relative;
                height:50px;
                line-height:50px;
                float:left;
                font-size: 20px;
                margin-left:10px; 
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

            height:100%;
            width:100%;
            overflow:hidden; 
            // .menu-scroller-container{

            //     height:100% ;
            //     //width:calc(100% + 40px);
            //     padding-right:40px;
            //     overflow:auto;
            //     .menu-display-container{

            //         //width:180px;
            //     }
            // }

            .headerbar-view-wrapper{

                height: 100%;
            }
        }
        
        /deep/.el-menu{

            border:none;
            overflow:hidden;

            .is-active{

                
            }

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
            
            // .hamburger-container{

            //     position: absolute;
            //     padding-right: 0px;
            //     top:50%;
            //     left: 50%;
            //     transform: translate(-50%,-50%);
             
            // }
        }

        /deep/.el-icon-arrow-right{

            display: none;
        }
         
         

    }
    


</style>