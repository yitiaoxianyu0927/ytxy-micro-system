<template>
    <div class="bdm-condition box-100 pad-20">
        <div class="display-title">全省情况</div>
        <div class="display-container">
            <div class="display-left-container">
                <div class="period-info">
                   统计粒度：实时
                </div> 
                <div class="total-info">
                    <div class="total-info-item">
                        <div class="total-info-name">一级故障</div>
                        <div class="total-info-num">381</div>
                    </div>
                    <div class="total-info-item">
                        <div class="total-info-name">二级故障</div>
                        <div class="total-info-num">381</div>
                    </div>
                    <div class="total-info-item">
                        <div class="total-info-name">三级故障</div>
                        <div class="total-info-num">400</div>
                    </div>
                    <div class="total-info-item">
                        <div class="total-info-name">四级故障</div>
                        <div class="total-info-num">381</div>
                    </div>
                </div>    
            </div>    
            <div class="display-right-container">
                <div ref="chart" class="chart box-100"></div>
            </div>    
        </div>
    </div>
</template>


<script>

    import echarts from "echarts"

    import "echarts/map/js/province/liaoning.js"; 

    export default{

        data(){

            return{

                chart:null

            }
        
        },
        methods:{

            renderChart(normalImg,warningImg,dangerImg){

                

                let option = {
                    
                    
                    series: [{
                        type: 'map',
                        map: '辽宁',
                        zoom:1.2,
                        itemStyle:{

                            borderWidth:0,
                            areaColor:{

                                image: normalImg ,
                                repeat: 'repeat' 
                            }
                        },
                        data:[{
                            name:"朝阳市",
                            itemStyle:{

                                //areaColor:"#ff0000",
                                areaColor:{
                                    image: dangerImg ,
                                    repeat: 'repeat' 
                                }
                            },
                        },{
                            name:"营口市",
                            itemStyle:{

                                //areaColor:"#ff0000",
                                areaColor:{
                                    image: dangerImg ,
                                    repeat: 'repeat' 
                                }
                            },
                        },{
                            name:"沈阳市",
                            itemStyle:{

                                //areaColor:"#fcaf41",
                                areaColor:{
                                    image: warningImg ,
                                    repeat: 'repeat' 
                                }
                            
                            },
                        },{
                            name:"丹东市",
                            itemStyle:{

                                //areaColor:"#fcaf41",
                                areaColor:{
                                    image: warningImg ,
                                    repeat: 'repeat' 
                                }
                            },
                        }]
                    }]


                }   
                 
                    
                this.chart.setOption(option);

                

            },
            // loadImage(url){

                

            //     return new Promise((resolve,reject) => {

            //         var normalImg = new Image();  
            //         normalImg.src = require(url);

            //         normalImg.onload = () => {

            //             resolve(true)
            //         }

            //     })

            // }
            


        },
        beforeDestory(){

            if(this.chart){

                this.chart.dispose();
                this.chart = null;
            }
        },
        mounted(){

            this.chart = echarts.init(this.$refs["chart"]);

            var normalImg = new Image();  
                normalImg.src = require("@/assets/image/home/normal.png");

            var warningImg = new Image();
                warningImg.src = require("@/assets/image/home/warning.png");
   
            var dangerImg = new Image();
                dangerImg.src = require("@/assets/image/home/danger.png");
            
            // this.$nextTick(() => {

            //     this.renderChart(normalImg,warningImg,dangerImg); 

            // })

            normalImg.onload = () => {

                this.renderChart(normalImg,warningImg,dangerImg); 
            }

            

        }




    }



</script>


<style lang="less">

    .bdm-condition{

        .display-title{

            font-size:16px;
            font-weight:bold;
            height:20px;
        } 

        .display-container{

            height: calc(100% - 20px);

            .display-left-container{
               
                width: 40%;
                height:100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                float:left;
                .period-info{

                    color:#247fff;
                    margin-bottom: 10px;
                }

                .total-info{

                    width: 220px;
                    .total-info-item{
                        
                        width:50%;
                        float: left;
                        margin-bottom:10px;
                        .total-info-name{

                           float: left; 
                           height: 30px;
                           line-height: 30px;

                        }
                        .total-info-num{
                           
                           float: left;
                           height: 30px;
                           line-height: 30px;
                           margin-left:10px;
                           font-size: 16px;
                           font-weight: bold;
                        }
                    }
                }

            }

            .display-right-container{

                width: 60%;
                height:100%;
                float:left;

            }


        }

    }
    
    
</style>