<template>
    <div class="box-100 nav-bar" layoutType="hnl-layout">

        <div class="logo-container"></div>
        
        <div class="system-name">{{projectName}}</div>

        <div  class="header-bar-container"
            :style="{
                //display:isHome ? 'block' : 'inline-block',
                //width:isHome ? '90%' : '740px'
            }"
        >
            <header-bar/>
        </div>
        
        
        
        <div class="dropdown-bar">
            <!-- <i class="icon-user"></i>  -->
            <!-- <div class="async-down-load-container">
                <async-down-load/>
            </div> -->
            <div 

                class="icon-user-img"
                :style="{
                    backgroundImage: `url(   
                        ${sex == '0' ? 
                            require('@/assets/image/layout/user-man.png') : require('@/assets/image/layout/user-female.png')}
                        )`

                }"
                

            ></div>
            <el-dropdown trigger="click">
                <span class="user-name" >
                    {{name}} 
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-if="mode == 'development'">
                        <div @click.stop="menuManagement">
                            <i class="icon-file-text2" />菜单管理
                        </div>
                    </el-dropdown-item>
                    
                    <el-dropdown-item >
                        <div @click.stop="logout">
                            <i class="el-icon-news"></i>登出
                        </div>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>    

       
    </div>
</template>


<script>

    import { mapGetters } from 'vuex';
    import { getToken } from "@/utils/auth"

    export default{
 
        data(){

            return {
             
               menuName:"",
               userName:""

            }
        
        },
        computed:{

            ...mapGetters(["name"]),
            mode(){

                return process.env.NODE_ENV;
            },
            isHome(){

                return this.$route.path == "/ynDashboard"
            },
            sex(){

                return this.$store.state.user.userInfo.sex || "0"
            },
            projectName(){

                return this.$store.state.projectConfig.projectName
            }
        },
        components:{

            HeaderBar:()=>import("../HeaderBar")
        },
        methods:{

            setting(){



            },
            logout(){

                if(getToken()){


                    this.$store.dispatch("LogOut").then(res => {

                
                        //this.$router.replace("").catch(err => {

                            this.$router.push("/login");
                        //})
                        
                    })

                    
                }else{

                    this.$router.push("/login"); 
                }
                
                

               
            },
            menuManagement(){

                this.$router.push({path:"/menuManagement"})
            },
            moveCurrentRoute(){

                if(this.$route.path){

                    this.$router.push({path:$route.path})
                }

            }

        },
        mounted(){

            
        },
        watch:{

            $route(){

                //this.moveCurrentRoute();

            }

        }

    }


</script>


<style lang="less" scoped>

    .nav-bar[layoutType='hnl-layout']{

        //box-shadow: 0px 3px 6px 0px  rgba(0, 0, 0, 0.1);
        background-color:rgb(37,181,205);
        color:#fff;

        .logo-container{

            width:116px;
            height:36px;
            display:inline-block;
            background-image:url(~@/assets/image/layout/yd-logo-2.png);
            margin-top:7px;
            vertical-align: top;
            margin-left:20px;
        }

        .system-name{

            position:relative;
            display:inline-block;
            font-size:20px;
            font-weight:bold;
            height:50px;
            line-height:50px;
            padding-left:15px;
            margin-left:10px;
            vertical-align: top;
            &::before{
                content:"";
                position:absolute;
                background-color:#fff;
                width:1px; 
                height:40%;
                left:0px;
                top:50%;
                transform:translateY(-50%);
            }
        }

        .header-bar-container{

            height:50px;
            width:calc(100% - 580px);
            display:inline-block;
            margin-left:0px;
              

            /deep/.is-active{

                &>.menu-title,&>.el-submenu__title>.menu-title{

                    height: 20px;
                    line-height: 20px;
                    background-color:rgba(255,255,255,.2) !important;
                    border-radius:10px;
                    font-size:12px;
                    padding:2px 16px;
                }
                
            }


            /deep/.is-active{

                &>.menu-title,&>.el-submenu__title>.menu-title{

                    height: 20px;
                    line-height: 20px;
                    background-color:rgba(255,255,255,.2) !important;
                    border-radius:10px;
                    font-size:12px;
                    padding:2px 16px;
                }
                
            }

            /deep/.el-menu > .header-menu-wrapper .el-menu-item:hover , /deep/.el-menu > .header-menu-wrapper .el-submenu__title:hover {

                background-color:unset !important;
            }

            /deep/.el-menu > .header-menu-wrapper .el-menu-item:hover .menu-title{

                background-color:rgba(255,255,255,0.4) !important;
               
            }

            /deep/.el-menu > .header-menu-wrapper .el-submenu__title:hover .menu-title{

                background-color:rgba(255,255,255,0.4) !important;
             
            }

            /deep/.el-menu  > .header-menu-wrapper .el-submenu__title .menu-title,
            /deep/.el-menu  > .header-menu-wrapper .el-menu-item .menu-title {

                height: 20px;
                line-height: 20px;
                border-radius:10px;
                font-size:12px;
                padding:2px 16px;
            }

            /deep/.el-menu  > .header-menu-wrapper .el-menu-item,/deep/.el-menu  > .header-menu-wrapper .el-submenu__title{

                padding:0 3px;
            }

            /deep/ .menu-title{

                transition:all 0.2s ease-in-out;
            }
      
        }

        .async-down-load-container{

            display:inline-block;
            height:50px;
            line-height:50px;
            margin-right:20px;
            //transform:translateY(4px);
          
        }


        .dropdown-bar{

            position:absolute;
            top:0px;
            right:0px;
            height:50px;
            line-height:50px;
            padding-right:20px;
            cursor:pointer;
            color:#fff;
            font-size:16px;

            .icon-user-img{

                margin-right:10px;
                background-size:100% 100%;
                display:inline-block;
                vertical-align:middle;
                
                width:30px;
                height:30px;
            }

            /deep/ .el-dropdown{

                height: 50px;
                vertical-align: middle;
                font-size:16px;
                color:#fff;
            }
        }


    }

</style>