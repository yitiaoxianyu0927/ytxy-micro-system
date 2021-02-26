<template>
    <div class="nco-status box-100 pad-20">
        <div class="display-title">状态占比</div>
        <div class="chart" ref="chart"></div>
    </div>
</template>


<script>

    import echarts from "echarts"
   
    export default{
        
        data(){

            return{
              
               chart:null

            }

        },
        methods:{

            queryChartData(){

                let color = ["#95de64","#31a4ff","#ffd666"]

                let data = ["进行中","审批中","已完成"].map((item,index) => {

                    return {

                        name:item,
                        value:parseInt(Math.random() * 90 + 10),
                        itemStyle:{

                            color:color[index]
                        }
                    }
                })

                this.renderChart(data); 

            },
            renderChart(data){

                let option = {
                   
                    legend:{
                       
                        left:10,
                        top:"center",
                        itemWidth:10,
                        itemHeight:10,
                        itemGap:20,
                        orient:'vertical',
                        formatter:(val) => {

                            let num = data.filter(item => item.name == val)[0].value;

                            return val + " " + num
                        }

                    },
                    series:[{

                        type:"pie",
                        radius:["40%","60%"],
                        center:["65%","50%"],
                        data,
                        labelLine:{

                            show:false
                        },
                        label:false
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

            this.chart = echarts.init(this.$refs["chart"])
            
            this.queryChartData();

        }

    }

</script>

<style lang="less" scoped>

    .nco-status{

        .display-title{

            font-size:16px;
            font-weight:bold;
            height:20px;

        }

        .chart{

            height:calc(100% - 20px);
        }
    
    }

</style>