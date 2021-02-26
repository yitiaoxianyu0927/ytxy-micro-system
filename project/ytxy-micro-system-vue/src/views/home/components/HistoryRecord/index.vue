<template>
    <div class="box-100 history-record pad-20">
        <div class="display-title">
            <span> 我的收藏 </span> 
            <span> 最近浏览 </span> 
        </div>
        <div class="display-container">
            <div class="display-item">
                <div class="display-shortName">流</div>
                <div class="display-item-title">静态工程库</div>
            </div>

            <div class="display-item">
                <div class="display-shortName">作</div>
                <div class="display-item-title">任务制定</div>
            </div>

            <div class="display-item">
                <div class="display-shortName">入</div>
                <div class="display-item-title">方案审核</div>
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


<style lang="less" scoped>

    .history-record{

        .display-title{

            font-size:16px;
            font-weight:bold;
            height:20px;

            &>span:nth-child(2){

                color:#ccc;
                margin-left:20px;
            }
        }

        .display-container{

            height:calc(100% - 20px);
            display:flex;
            align-items:center;

            .display-item{

                float:left;
                margin-right:30px;
                display:flex;
                flex-direction:column;
                align-items:center;
                .display-shortName{
                       
                    width:50px;
                    height:50px;
                    text-align:center;
                    line-height:50px;
                    background-color: #f1f3f9;
                    border-radius: 4px;
                    border: solid 1px #d6e4ff;
                    color: #247fff;
                    margin:10px 0;
                }
                .display-item-title{
                    
                    color: rgba(0, 0, 0, 0.65);

                }
            }
        }


    }

</style>