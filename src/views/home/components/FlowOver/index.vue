<template>
    <div class="flow-over box-100 pad-20">
        <div class="display-title">各地市情况</div>
        <div class="chart" ref="chart"></div>
    </div>
</template>



<script>
    
    import echarts from "echarts"

    export default{

        data(){

            return {
                    
                chart:null,    
                city:[
                    "沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口",
                    "阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"
                ]    

            }

        },
        methods:{
          
            queryChartData(){

                let axis = this.city;
                let data = Array.from({length:14},v => parseInt(Math.random()*100));  

                this.renderChart(axis,data);
            
            },
            renderChart(axis,data){
                
                let option = {
                  
                    grid:{

                       top:20,
                       bottom:30,
                       left:30,
                       right:20

                    },
                    xAxis:{
                        
                        type: "category",
                        data:axis,
                        axisLabel:{

                            interval:0,
                            color:"#000"

                        },
                        axisLine:{

                            lineStyle:{

                                color:"#707070"
                            }
                        },
                        axisTick:{

                            show:false
                        
                        },
                        axisLine:{

                            show:false
                        
                        },
                        splitLine:{

                            show:true,
                            lineStyle:{

                                color:"#F0F0F0"
                            }
                        }

                    },
                    yAxis:{

                        type: "value",
                        axisTick:{

                            show:false
                        
                        },
                        axisLine:{

                            show:false
                        
                        },
                        splitLine:{

                            show:true,
                            lineStyle:{

                                color:"#F0F0F0"
                            }
                        }
                    
                    },
                    series:[{
                         
                        type:"line",
                        lineStyle:{

                            color:"#247fff",
                        },
                        itemStyle:{

                            color:"#247fff",
                        },
                        data,
                        symbol:"circle",
                        symbolSize:[6,6],
                        areaStyle:{

                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(36, 127, 255, 0.6)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(36, 127, 255, 0)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        } 

                    }]



                }
               
                this.chart.setOption(option); 

            }


        },
        beforeDestory(){

            if(this.chart){

                this.chart.dispose();
                this.chart = null;
            }
        },
        mounted(){

            this.chart = echarts.init(this.$refs["chart"]);

            this.queryChartData(); 

        }

    }

</script>



<style lang="less" scoped>

    .flow-over{

        .display-title{

            font-size:16px;
            font-weight:bold;
            height:20px;
        } 
         
        .chart{

            width:100%;
            height:calc(100% - 20px);
             

        } 

    }

</style>