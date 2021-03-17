<template>
   <div class="box-100 login-tel">
   
    
        <el-form  ref="login_mobile" :rules="rules" :model="ListForm" @keyup.enter.native="login">
          
            <el-form-item prop="mobile"> 
                <el-input 
                    v-model="ListForm.mobile" 
                    size="small"  
                    suffix-icon="el-icon-mobile" 
                    placeholder="请输入手机号码"
                ></el-input> 
            </el-form-item>
        
        
            <el-form-item prop="shortCode"> 
                <el-input v-model="ListForm.shortCode" size="small"  style="width:60%;" placeholder="请输入验证码" ></el-input> 
                <el-button 
                    type="primary" 
                    size="small" 
                    class="code-button" 
                    @click="queryShortMsg"
                >{{mobileText}}</el-button>
            </el-form-item>
           
        </el-form>       
      

        <div class="login-button">
            <el-button type="primary"  @click.native.prevent="loginforTelephone">登录</el-button>
        </div> 

   
   </div>
</template>


<script>
   
    export default{

        data(){

           return {

                ListForm:{
               
                    mobile:"",
                    shortCode:""

                },

                mobileText:"获取验证码",
                timer:null, 
                mobiletime:60,
           } 

        },
        methods:{


            queryShortMsg(){

                if(!(/^1[34578]\d{9}$/.test(this.ListForm.mobile))){ 

                    this.$message({
                    message:"手机号码格式错误",
                    type:"warning"
                    })
                    
                    return;  
                }
    

                this.$https.requestServer("/login/getShortMsg/sendShortMsgZJYD",{

                    mobile:this.ListForm.mobile
                
                }).then(res => {
                
                    if(res.userdata){

                        this.$message.success("验证码已成功发送,请在一分钟内使用")

                        this.timer = setInterval(()=>{
                        
                            this.mobileText = "重新发送("+this.mobiletime + "s)";

                            this.mobiletime--
                            
                            if(this.mobiletime == 0){
                            
                                clearInterval(this.timer);

                                this.mobileText = "获取验证码";

                                this.ListForm.mobile = "";

                                this.$message({
                                    message:"时间超时请重新获取验证码",
                                    type:"warning"
                                })
                                
                                this.mobiletime = 60;

                            }
                    

                        },1000);
    

                    }else if(res.userdata == "该用户不存在"){

                        this.$message({
                            message:"该用户不存在",
                            type:"warning"
                        })


                    }else{

                        this.$message({
                            message:"获取验证码失败",
                            type:"warning"
                        })

                    }


                })


            },


            loginforTelephone(){

                if(this.mobileText=="获取验证码"){
                    
                    this.$message({
                        message:"请获取验证码",
                        type:"warning"
                    })

                    return;
                };

                this.loading = true; 


                this.$https.requestServer("/safety/user/loginByShortMsg",{

                    mobile:this.ListForm.mobile,
                    short_msg:this.ListForm.shortCode
                
                }).then(res => {

                    clearInterval(this.timer);

                    this.mobiletime = 60;
                    
                    this.loading = false;
                    
                    layui.sessionData("layuiAdmin",{key: "x-token",value:res.userdata})

                    location.replace("../index.html");

                }).catch(err => {

                    this.loading = false;

                })

            },

        },
        mounted(){


            
        }  


    }

</script>


<style lang="less" scoped>

    .login-tel{

        padding-top:20px;

        /deep/ .el-input{
            
            .el-input__inner{

                border:none;
                border-bottom:1px solid #DCDFE6;
                padding-left:4px;
                border-radius:0px;

            }
        }

        .code-button{

            border-radius:0px;
            float: right;
        }


        .login-button{

            position:absolute;
            bottom:12%;
            width:100%;

            /deep/.el-button{

                width:100%;
            }
        }
    }

</style>