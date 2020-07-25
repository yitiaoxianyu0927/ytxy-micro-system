<template>
    <div class="history-notice box-100 pad-20">
        <div class="display-title">
           公告
        </div>
        <div class="display-container">
            <div class="list-item">
                <div class="tag">更新</div>
                <div class="content">设备入网验收_设备名称显示不全问题修复补丁</div>
                <div class="time">今日</div>
            </div>

            <div class="list-item ">
                <div class="tag tip">提示</div>
                <div class="content">您有一条设备入网工单即将过期</div>
                <div class="time">一周前</div>
            </div>

            <div class="list-item tip">
                <div class="tag tip">提示</div>
                <div class="content">您有一条设备入网工单即将过期</div>
                <div class="time">三周前</div>
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
     
    .history-notice{

        .display-title{

            font-size:16px;
            font-weight:bold;
            height:20px;

        }
       
        .display-container{

            width:100%;
            height:calc(100% - 20px);
            padding:10px 0;

            .list-item{

                overflow:auto;
                display:flex;
                flex-direction:row;
                align-items:center;
                min-height:30px;
                margin-bottom:10px;

                .tag{
                
                    width:50px;
                    margin-right:20px;
                    height:26px;
                    line-height:26px;
                    text-align:center;
                    float:left;
                    background-color: #f1f3f9;
                    border-radius: 4px;
                    border: solid 1px #d6e4ff;

                }
                .content{
    
                    width:calc(100% - 140px);
                    float:left;   

                }

                .time{

                    width:70px;
                    float:left;
                    text-align:right;
                    color: #247fff;
                }

                .tip{

                    background-color: #fff2e8 !important;
                    border-radius: 4px;
                    border: solid 1px #ff7a45;
                }

            }

            
        }


    }

</style>
