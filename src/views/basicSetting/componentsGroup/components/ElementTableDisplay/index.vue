<template>
    <div class="element-table-display box-100">
        <ElementTable

            ref="mainTable"
            v-model="ListOption"
            :options="ListOption"
            @HandleFunc="HandleFunc"
            @CellClick="CellClick"
            @ButtonFunc="ButtonFunc"
        
        >
            <template slot="operation" slot-scope="data">
                <el-button type="text" size="mini" >查看详情</el-button>
            </template>
        
        </ElementTable>
    </div>    
</template>



<script>

    import Mock from "mockjs"

    export default {

        data(){

            return {

                ListOption:{

                    cellSpan:false,
                    client:false,
                    hasIndex:false,
                    hasSelect:true,
                    border:true,
                    header:[
                        {
                            name:"地市",
                            key:"city"
                        },
                        {
                            name:"区县",
                            key:"region"
                        },
                        {
                            name:"名称",
                            key:"name"
                        },
                        {
                            name:"评级",
                            key:"rank"
                        },
                        {
                            name:"销售额",
                            key:"price"
                        },
                        {
                            name:"邮箱",
                            key:"email"
                        },
                        {
                            name:"地址",
                            key:"adress"
                        },
                        {
                            name:"操作",
                            key:"operation",
                            fixed:"right",
                            formatter:true
                        },
                    ],
                    data:[],
                    pagination:{
                        
                        pageIndex:1,
                        pageRowSize:10,
                        total:0
                    },
                    button:[
                        
                       
                    ],
                    selectOption:[],
                }  
            }

        },
        components:{

            ElementTable:()=>import("@/components/ElementTable")

        },
        methods:{

            queryListTableData(){

                let { list , total } = Mock.mock({

                    "list|20":[{

                        "city": "@city",
                        "region": "@region",
                        "name":"@ctitle(16)",
                        "rank|1-5":1,
                        "price|30-500":30,
                        "email":"@email",
                        "adress":"@county(true)"
                    }],
                    "total":20

                })


                this.ListOption.data = list;

                this.ListOption.total = total;



            },
            HandleFunc(type,val){

                
                if(type=="handleCurrentChange"||type=="handleSizeChange")  this.queryListTableData();  
            
            },
            CellClick(col,row){


            },
            ButtonFunc(id,option){
                
            },

        },
        mounted(){

            this.queryListTableData();
        }






    }


</script>



<style lang="less" scoped>

    // .element-table-display{

    //     height:400px;

    // }

</style>