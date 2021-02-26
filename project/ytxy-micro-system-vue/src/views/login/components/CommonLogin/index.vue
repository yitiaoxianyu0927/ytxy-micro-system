<template>
    <div class="box-100 login-page">   

        <div class="login-bg"></div>

        <div class="lottie-display" ref="lottie">
        
            <lottie 
                :options="defaultOptions" 
                :height="1000" 
                :width="800" 
                speed="1" 
                @animCreated="handleAnimation" 
            />
            

        </div>

        <div class="login-container">

            <div class="login-title">微前端工程模板</div>
            <login-account @focus="HandleFocus"  @blur="HandleBlur"/>
            
        </div>
    
    </div>
</template>


<script>

    
    import lottie from 'vue-lottie'
   
    export default{

        data(){

            return {

                tabIndex:"1",
                defaultOptions: { 
                    animationData: require("@/assets/lottie/commonLogin/data.json"),
                    // loop: false,
                    // autoplay: false,
                },
                anim:null

            } 

        },
        components:{

            LoginAccount:()=>import("../LoginAccount"),
            lottie
        },
        methods:{

            handleAnimation(anim) {
                this.anim = anim;
                console.log(anim); //这里可以看到 lottie 对象的全部属性

                this.anim.stop();

                this.HandleFocus("default");
             
            },
            HandleFocus(type){

                let self = this;

                let option = {
                    /// 250 500 750
                    "default":()=>{
                        this.anim.playSegments([0,100], false);
                        this.anim.playSegments([0,100], true);  // 帧 , 是否等待之前动画  false 等待

                        option["start"]();
                    },
                    "start":()=>{

                        this.anim.playSegments([120,226], true);
                    },
                    "userName":()=>{

                        this.anim.playSegments([240,480], true);
                    },
                    "passWord":()=>{

                        this.anim.playSegments([500,750], true);
                    }

                }

                option[type]();
            },
            HandleBlur(){

                this.HandleFocus("default");
            }
         

        },
        mounted(){

        }


    }

</script>


<style lang="less" scoped>
   
    .login-page{

        .login-bg{
           
           position:absolute;
           background-image:url(~@/assets/image/login/login-bg-1366.png);
           background-size:100% 100%;
           width:100%;
           height:100%;

        }

        /deep/ .lottie-display{

            width:100%;
            height:100%;
            position:absolute;
            left:0px;
            top:0px;
            overflow:hidden;

            &>div{

                position:absolute !important;
                left:50px !important;
                height:100% !important;
                width:80% !important;
                top:0px !important;
            }

            

            //width: 1600px;

        }

        // @media screen and (min-width: 1800px) {
        //     body {
        //         background-color:lightblue;
        //     }
        // }

        .login-container{

           width:340px;
           height:400px;
           position:absolute;
           right:0;
           top:50%;
           transform:translate(-50%,-50%);
           background-color:#fff;
           box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.3);
           padding:20px 30px;
           
           padding-top:40px;

           .login-title{

               font-size:16px;
               margin-bottom:20px;
           }

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

        @media screen and (min-width: 1800px) {
            .login-container{

                width:480px;
                height:540px;
             
            } 
        }


    }

</style>
