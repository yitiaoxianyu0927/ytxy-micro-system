<template>
    <div class="box-100 login-page">   

        <div class="login-bg"></div>

        <div class="login-container">
            <el-tabs v-model="tabIndex" class="tab-container">
                <el-tab-pane label="账号密码登录" name="1">
                    <login-account/>
                </el-tab-pane>
                <el-tab-pane label="手机验证码登录" name="2">
                
                </el-tab-pane>
            </el-tabs>
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

            LoginAccount:()=>import("./components/LoginAccount")
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
           background-image:url(~@/assets/image/login/login-bg.png);
           background-size:100% 100%;
           width:100%;
           height:100%;

        }

        .login-container{

           width:340px;

           height:400px;
           position:absolute;
           left:50%;
           top:50%;
           transform:translate(-50%,-50%);
           background-color:#fff;
           box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.3);
           padding:20px 30px;

            /deep/ .el-tabs{

                .el-tabs__nav-wrap::after{

                    background-color:unset;
                }

                .el-tabs__content{

                    height:calc(100% - 40px);
                }

                .el-tab-pane{

                    height:100%;
                }
            }

            .tab-container{

                height:100%;
            }

        }


    }

</style>