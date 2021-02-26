<template>
    <div class="box-100 opm-task">
        <div class="display-title">任务情况</div>
        <div class="display-total">
            <div class="display-total-item">
                <div class="display-sub-title">对象量</div>
                <div class="display-num">1675</div>
            </div>
            <div class="display-total-item">
                <div class="display-sub-title">
                    <i/>无异常量
                </div>
                <div class="display-num">1286</div>
            </div>
            <div class="display-total-item">
                <div class="display-sub-title">
                    <i style="background-color: #ff7875"/>异常量
                </div>
                <div class="display-num">389</div>
            </div>
            <div class="display-total-item">
                <div class="display-sub-title">
                    <i/>健康度
                </div>
                <div class="display-num">
                    76.7<i>%</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default{
        
        data(){

            return {



            }
        },
        methods:{



        },
        mounted(){



        } 

    } 


</script>


<style lang="less">
    
    .opm-task{

        padding:20px;

        .display-title{

            font-size:16px;
            font-weight:bold;
            height:20px;
        }

        .display-total{
            
            height:calc(100% - 20px);
            .display-total-item{
                
                height:100%;
                float:left;
                width:22%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:flex-end;
                position:relative;

                .display-sub-title{
                      
                    margin:10px 0;
                    font-size:14px;
                    color:#262626;
                    &>i {

                        margin-right:10px;
                        margin-bottom:1px;
                        width: 8px;
                        height: 8px;
                        background-color: #95de64;
                        border-radius: 2px;
                        display:inline-block;
                    }
                }

                .display-num{

                    font-size:18px;
                    font-weight:bold;

                    &>i{

                        font-style:normal;
                        font-size:12px;
                    }

                }
            }

            .display-total-item:nth-child(1){
               
                align-items:flex-start;
            }

            .display-total-item:nth-child(1)::before{
                
                content:"";
                position:absolute;
                right:0px;
                width:1px;
                background-color:#707070;
                height:70%;
                top:55%;
                transform:translateY(-50%);
            }
        }
    }

</style>
