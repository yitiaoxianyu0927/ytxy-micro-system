<template>
    <div ref="home-container" class="pad-20 home-container">
       
        <div class="welcome-container">
            
            <div>Hi，欢迎使用ZZNODE-UI !</div>
            <div>轻松创建、部署和管理你的前端产品，提升研发效率、降低业务成本。</div>
           
        </div>

        <el-row :gutter="20" class="display-container">
             
            <el-col :span="14" >
                
                <div class="opm-wapper display-wapper"></div>

                <div class="bdm-wapper display-wapper"></div>

                <div class="flow-wapper display-wapper"></div>
                  
            </el-col>     

            <el-col :span="10" >
                
                <div class="collect-wapper display-wapper"></div>

                <div class="notice-wapper display-wapper"></div>

                <div class="nco-wapper display-wapper"></div>
                  
            </el-col>     
            

        </el-row>    

       
        <div 
            class="func-container" 
            :style="{ right : funcRight + 'px' }"
        >
            
            <div class="el-icon-star-off"></div>
            <div class="el-icon-magic-stick"></div>
            <div class="el-icon-setting"></div>
            <div class="el-icon-arrow-up"></div>

        </div>    

    </div>
</template>


<script>

    export default{
 
        data(){

            return {

                funcRight:0

            }
        
        },
        computed:{

         
        },
        methods:{

            queryFuncPostion(){

                this.$nextTick(()=>{

                    let box = document.querySelector(".app-main");

                    let innerBox = this.$refs["home-container"]

                    this.funcRight = box.offsetWidth - innerBox.clientWidth + 20;
                })

            }

        },
        mounted(){

            this.queryFuncPostion();

            window.addEventListener("resize",()=>{ 
                
                this.queryFuncPostion();
                
            })

        } 

    }


</script>


<style lang="less" scoped>

    .home-container{

        background-color:#f1f3f9;

        .welcome-container{

            height:120px;
            background-color:#247fff;
            border-radius: 6px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            padding-left:20px;
            div{

                color:#fff;
            }

            div:nth-child(1){

                font-size:18px;
                margin-bottom   :20px;
            }

        }

        .display-container{
            
            width:calc(100% - 50px);
            margin-top:20px;

            .display-wapper{

                background-color:#fff;
                border-radius:4px;
                margin-bottom:20px;
            }
            
            .opm-wapper{

                height:110px;
            }

            .bdm-wapper{

                height:220px;
            }

            .flow-wapper{

                height:170px;
            }

            .collect-wapper{

                height:150px;
            }

            .notice-wapper{

                height:170px;
            }

            .nco-wapper{

                height:180px;
            }

        }

        .func-container{

            position:fixed;
            width:50px;
            top:340px;
            padding:0 5px;

            &>div{

                width:40px;
                height:40px;
                border-radius:4px;
                background-color: #31a4ff;
                box-shadow: 0px 0px 6px 0px  #31a4ff;
                line-height:40px;
                text-align:center;
                margin-bottom:20px;
                font-size:20px;
                color:#fff;
                cursor:pointer;

            }

            &>div:nth-child(1){

                background-color: #fff;
                color:rgb(162,162,162);
                box-shadow: 0px 0px 6px 0px  rgba(0, 0, 0, 0.2);
            }

        }
        
    }


</style>