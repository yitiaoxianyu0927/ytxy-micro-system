<template>
    <div class="box-100 login-page">   

        <div class="login-bg"></div>

        <div class="login-container">

            <div class="login-title">
                <div class="login-icon"></div>
                   
                <div class="login-name">云南传输集中运维系统</div>
            </div>
            <!-- <el-tabs v-model="tabIndex" class="tab-container">
                <el-tab-pane label="账号密码登录" name="1"> -->
                    <login-account/>

                    <div class="declare"> 
                    
                        <span>版权所有2019中国移动通信集团云南公司</span><br/>
                        <span>技术支持:省公司网络管理中心 电话：18314135498/18288250538 </span>
                    
                    </div>

                <!-- </el-tab-pane>
                <el-tab-pane label="手机验证码登录" name="2">
                
                </el-tab-pane>
            </el-tabs> -->
        </div>
    
    </div>
</template>


<script>
   
    export default{

        data(){

            return {

               tabIndex:"1"

            } 

        },
        components:{

            LoginAccount:()=>import("../LoginAccount")
        },
        methods:{



        },
        mounted(){


            
        }


    }

</script>


<style lang="less" scoped>
   
    .login-page{

        .login-bg{
           
           position:absolute;
           background-image:url(~@/assets/image/login/login-yn-bg.png);
           background-size:100% 100%;
           background-color:#E7E9F5;
           width:100%;
           height:100%;

        }

        .login-container{

           width:400px;
           height:420px;
           position:absolute;
           right:10%;
           top:50%;
           transform:translate(0,-50%);
           background-color:#fff;
           padding:20px 30px;
           padding-top:40px;

           .login-title{

               font-size:16px;
               margin-bottom:20px;
               color:rgb(67,195,235);
               text-align:center;

               &>div{
                   vertical-align: middle;
                   display:inline-block;
               }

               .login-icon{

                   width:40px;
                   height:40px;
                   background-image:url(~@/assets/image/layout/yd-logo.png);
                   background-size:100% 100%;

               }
               .login-name{
                    margin-left:10px;
                    font-weight:500;
                    font-size:26px;
                    letter-spacing:2px;
               }
           }

           .login-account{

               height:calc(100% - 50px);
           }


           /deep/ .el-input{

               padding-left:10px; 
               border-bottom: 1px solid #DCDFE6;

               .el-input__inner{

                   height:50px;
                   line-height:50px;
                   border-bottom:none;
                   font-size:16px;
                   border: none; 
               }
           }

           /deep/ .el-form{

                .el-form-item{

                    margin-bottom:16px;
                }

                .el-form-item__error{

                    padding-left:10px;
                }
           }

           /deep/ .login-button{

                bottom:0px;
                width:280px;
                left:50%;
                transform:translate(-50%);
                
                margin:0 10px;
                color:rgb(107,206,237);
                transition:all 0.5s ease-in-out;
                background-image:url(~@/assets/image/login/login-yn-button-bg.png);
                background-size:500px 100%;
                background-position:-200px;
                overflow:hidden;
                border-radius:30px;

                .el-button{
                    border-radius:30px;
                    height:45px;
                    background-color:unset;
                    width:100%;
                    border:none;
                    letter-spacing:6px;
                    font-size:16px;
                    font-weight:bold;
                    
                }
               
                &::before {
                    position:absolute;
                    right:20px;
                    top:50%;
                    transform:translateY(-50%);
                    font-size:20px;
                    font-weight:bold;
                    font-family: element-icons !important;    
                    content: "\e6e9";
                }

                &:hover{

                    color:#fff;
                    background-position:-100px;
                }
               

           }

            .declare{

                margin-top:30px;
                width:450px;
                text-align:center;
                color:#666666;
                font-size:12px;
                transform: translateX(-60px);
            }
            

        }

        @media (min-width: 1800px) {

            .login-container{

                width:510px;
                height:500px;

                .login-title{

                    height:50px;
                    .login-icon{

                        height:50px;
                        width:50px;
                    }

                    .login-name{

                        font-size:36px;
                    }

                }

                
                /deep/ .el-input{

                    .el-input__inner{

                        height:70px;
                        line-height:70px;
                        font-size:20px;
                        border: none;
                    }

                    
                }

                /deep/ .check-code-canvas{

                    margin-top:20px;
                }

                /deep/ .login-button{

                    width:80%;
                    background-size:500px 100%;
                    background-position:-120px;

                    .el-button{

                        height:55px;
                        font-size:22px;
                    }

                    &:hover{

                        background-position:-60px;
                    }
                }

                .declare{

                    transform: translateX(-70px);
                    font-size:14px;
                    width:600px;
                    line-height:20px;
                }
                
            }
            
        } 
    }

</style>
