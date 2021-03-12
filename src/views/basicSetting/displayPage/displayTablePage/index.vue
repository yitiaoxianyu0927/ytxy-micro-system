<template>
    <div class="display-table-page box-100 pad-20">
    
        <div class="title-container">
            <div class="title-name">表格页面</div>
            <div class="button-group">
                <div class="iconfont iconfont-icon-shuaxin" ></div>
                <div 
                
                    class="iconfont " 
                    :class="[ 
                        ListTable.option && ListTable.option.rowExpand ? 
                            'iconfont-icon-zhediexiaoguo' : 'iconfont-icon-zhediexiaoguo1' 
                    ]"
                    @click="HandleClickRowExpand"

                ></div>
                <div class="iconfont iconfont-icon-download" ></div>
                <div class="">自定义列</div>
            </div>
        </div>
        <div class="searchbar">
            <ComplexSearch 
                :option="ComplexSearchForm"
            >
                <div class="button-group" >
                    <el-button type="primary" size="mini" icon="el-icon-plus" @click="search">创建</el-button>
                    <el-button type="danger"  size="mini" icon="el-icon-delete">删除</el-button>
                    <el-button type="default" size="mini">次要</el-button>
                    <el-dropdown :class="'abc'">
                        <el-button type="default" size="mini">
                            更多操作 <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <span>导入</span>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <span>导出</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>    
                </div>
            </ComplexSearch>
        </div>

        <div class="table-title-container">
            <div class="table-total">已选择{{ListTable.selectOption.length}}条</div>
            <div class="table-detail">点击查看>></div>
        </div>

        <div class="table-container">
            <ElementTable

                ref="mainTable"
                v-model="ListTable"
                :options="ListTable"
                @HandleFunc="HandleFunc"
                @CellClick="CellClick"
                @ButtonFunc="ButtonFunc"
            
            >
                <template slot="rank" slot-scope="data">
                    <el-rate v-model="data.row.rank"></el-rate>
                </template>
                <template slot="operation" slot-scope="data">
                    <el-button type="text" size="mini" >查看详情</el-button>
                </template>
            
            </ElementTable>
        </div>

    </div>
</template>

<script>

    import { ComplexSearchForm , ListTable } from "./config.js"

    import Mock from "mockjs"

    export default{

        data(){

            return {

                ComplexSearchForm,
                ListTable,

            }

        },
        components:{

            ComplexSearch:()=>import("@/components/ComplexSearch"),
            ElementTable:()=>import("@/components/ElementTable")
        },
        methods:{

            search(){

                this.queryListTableData();

            },
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

                });


                this.ListTable.data = list;

                this.ListTable.pagination.total = total;

            },

            HandleClickRowExpand(){

                console.log(this.ListTable)

                this.ListTable.option.rowExpand = !this.ListTable.option.rowExpand;

            },

            HandleFunc(type,val){},
            CellClick(type,val){},
            ButtonFunc(type,val){}

        },
        mounted(){

            this.queryListTableData();

        }


    }


</script>



<style lang="less" scoped>

    .display-table-page{

        .title-container{

            height:30px;
            width:100%;
            .title-name{
                float:left;
                height:30px;
                // line-height:30px;
                font-size:16px;
                color: rgba(0, 0, 0, 0.85);
            }
            .button-group{

                float:right;
                &>div{
                    display:inline-block;
                    margin:0 2px;
                    height:30px;
                    line-height:30px;
                    padding:0 10px;
                    background-color: #eaf6fe;
                    color:#006eff;
                    cursor:pointer;
                    vertical-align: middle;
                    min-width:38px;
                    text-align: center;
                }

                .active{

                    background:#fcaf41;
                }
            }


        }

        .searchbar{

            min-height:30px;
            margin:15px 0;

            .button-group{

                button{

                    margin:0px;
                }
            }
        }

        .table-title-container{

            height:30px;
            line-height:30px;
            background-color:#e7f0fb;
            border-left:4px solid #247fff;
            color: #00a4ff;
            font-size: 12px;
            margin:20px 0;

            &>div{

                display:inline-block;
            }

            .table-total{

                margin:0 20px;
            }

            .table-detail{

                margin:0 10px;
            }
        }

        .table-container{

            height:calc(100% - 160px);
        }

    }

</style>