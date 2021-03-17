<template>
    <div 
        class="box-100 login-account" 
    >
       
        <el-form ref="ListForm" :model="ListForm" :rules="rules" @keyup.enter.native="login">
            
            <el-form-item prop="userName">
                <el-input 
                    v-model="ListForm.userName" 
                    placeholder="请输入用户名" 
                    clearable 
                    @focus="HandleFocus('userName')"
                    @blur="HandleBlur('userName')"
                ></el-input>
            </el-form-item>
            <el-form-item prop="passWord">
                <el-input 
                    v-model="ListForm.passWord" 
                    placeholder="请输入密码" 
                    show-password 
                    clearable
                    @focus="HandleFocus('passWord')"
                    @blur="HandleBlur('passWord')"
                ></el-input>
            </el-form-item>
            <el-form-item prop="checkCode">
                <div class="check-code">
                    <el-input 
                    
                        v-model="ListForm.checkCode" 
                        placeholder="请输入验证码"
                        class="check-code-input"
                        clearable

                    ></el-input>
                </div>

                <div class="check-code-canvas">
                    <check-code v-model="checkCodeValue" ref="checkCode"  />
                </div>

            </el-form-item>
            
        </el-form>

        <div class="login-button">
            <el-button type="primary"  @click.native.prevent="login">登录</el-button>
        </div> 


    </div>
</template>


<script>
   
    export default{

        data(){

            return {

                ListForm:{

                    userName:"",
                    passWord:"",
                    checkCode:""

                },

                checkCodeValue:"",  //验证码数值
                
                rules:{

                    userName:[
                        { required: true, message: '请输入用户名称', trigger: 'change' },
                    ],
                    passWord:[
                        { required: true, message: '请输入密码', trigger: 'change' },
                    ],
                    checkCode:[
                        { required: true, message: '请输入验证码', trigger: 'change' },
                    ],
                    
                }
            } 

        },
        components:{

            CheckCode:()=>import("@/components/CheckCode")
        },
        methods:{
            
            login(){
                
                this.$refs["ListForm"].validate((valid) => {

                 
                    if(valid){

                        let { userName,passWord,checkCode  } = this.ListForm;
                         
                        if(checkCode != this.checkCodeValue) {

                            this.$message.warning("验证码输入错误");

                            this.$refs["checkCode"].renderCheckCode();

                            return;

                        } 

                        passWord = this.$md5(passWord) + this.$md5(userName) ;

                        this.$store.dispatch("LoginByUsername",{
                            userName,passWord
                        }).then(res => {


                            this.$router.push({ path: '/' })

                        }).catch((res) => {

                            this.$message({
                                message: '登录失败:'+res,
                                type: 'warning'
                            });
                            
                        })

                    }

                })


            },
            HandleFocus(type){

                this.$emit("focus",type)
            },
            HandleBlur(type){

                this.$emit("blur",type)
            },
            bodyFocus(){

            }

        },
        mounted(){



        }  


    }

</script>


<style lang="less" scoped>

    .login-account{

        padding-top:20px;

        /deep/ .el-input{
            
            .el-input__inner{

                border:none;
                border-bottom:1px solid #DCDFE6;
                padding-left:4px;
                border-radius:0px;

            }
        }

        .check-code{

            width:50%;
            float:left;
        }

        .check-code-canvas{

            width:50%;
            float:left;

            &>div{

                float:right;
                padding-right:8px;
                padding-top:2px;

                &>canvas{

                    float:right;
                }
            }
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