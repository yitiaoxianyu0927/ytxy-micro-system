<template>
   <div class="component-ElementTable" style="width:100%;height:100%">
 
        <el-row class="page-table" >
     
            <el-table 

                :data="tableData"      
                @selection-change="List_handleSelectionChange" 
                ref="multipleTable" 
                height="100%" 
                :span-method="arraySpanMethod"
                @sort-change="sortchange"
                :border="listTable.border"
                :row-style="listTable.style&&listTable.style.rowStyle||{}"
                :cell-style="listTable.style&&listTable.style.cellStyle||{}"
                :class="[
                    listTable.option && listTable.option.rowExpand ? 'row-expand': 'row-expand-close'
                ]"
                
            >
                       <!-- :row-style="listTable.style.rowStyle||{}"
                :cell-style="listTable.style.cellStyle||{}" -->
                    <!-- 序号列 -->
                    
                    <el-table-column  v-if="listTable.hasIndex"  label="#" min-width="60" align="center">
                        <template slot-scope="scope">
                            {{scope.$index+(listTable.pagination.pageIndex - 1) * listTable.pagination.pageRowSize + 1}}
                        </template>
                    </el-table-column>
                    

                    <!-- 选择列 -->

                    <el-table-column  v-if="listTable.hasSelect"  width="60" align="center" type="selection"></el-table-column>


                    <!-- 普通列,钻取列,自定义列 --> 

                    <el-table-column  
                        v-for="(item, index) in listTable.header"
                        :property="item.key" 
                        :label="item.name"  
                        :key="item.key" 
                        :align="index == 0 ? 'left' : item.align ? item.align:'center' " 
                        :min-width="item.width?item.width:150" 
                        :fixed="item.fixed?item.fixed:false" 
                        v-if="!item.hidden"
                        show-overflow-tooltip 
                        :sortable="item.sort?'custom':false"
                    >
                        <template slot-scope="scope"  >
                            <template v-if="!item.formatter">
                                <template v-if="!item.isDrill">
                                    <!-- {{listTable.data[scope.$index][item.key]}} -->
                                    {{tableData[scope.$index][item.key]}}
                                </template>
                                <template  v-else>
                                    <el-button v-if="!item.text" type="text" size="mini" @click="CellClick(item.key,scope.row)">{{listTable.data[scope.$index][item.key]}}</el-button>
                                    <el-button v-else type="text" size="mini" @click="CellClick(item.key,scope.row)">{{item.text}}</el-button>
                                </template>
                            </template>    
                            <template  v-else>
                                <slot  :name="item.key" :scope="scope" :row="scope.row"></slot>
                            </template>
                        </template>

                    </el-table-column>


            </el-table>


        </el-row>       
        <el-row class="page-function">
            <el-pagination
                background
                v-if="!(listTable.pagination.show == false)"
                :style="{float:listTable.pagination.position=='right'?'right':'left'}"
                @size-change="List_handleSizeChange"
                @current-change="List_handleCurrentChange"
                :current-page="listTable.pagination.pageIndex"
                :page-sizes="[5, 10, 20, 30, 50, 100, 200]"
                :pager-count=5
                :page-size="listTable.pagination.pageRowSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="listTable.pagination.total">
            </el-pagination> 
            <div class="function-button">
            
            <el-button v-for="item in listTable.button" :key="item.id" type="primary" size="mini" @click="ButtonFunc(item.id,item.export)">{{item.name}}</el-button>

            </div>
        </el-row>



    </div>
</template>





<script>

import { cloneDeep , defaultsDeep } from "lodash"

export default {
 
    data(){
         
        let data = {


            listTable:{
                   
                   cellSpan:false,
                   client:false,
                   hasIndex:false,
                   hasSelect:false,
                   border:true,
                   header:[
                    //    {
                    //         name:"",        表头显示值
                    //         key:"",          
                    //         isDrill:false,  是否钻取
                    //         width:150,      宽度
                    //         text:false,     钻取显示文本
                    //         fixed:false,    左右对其
                    //         hidden:false    是否隐藏    
                    //         sort:false      是否排序    
                    //         exporthidden:false    导出隐藏        
                    //    }
                   ],
                   data:[],
                   pagination:{
                      
                      pageIndex:1,
                      pageRowSize:10,
                      total:0
                   },
                   button:[
                       
                    //  {
                    //    id:"",
                    //    name:"",
                    //    export:false,
                    //    option:{
                    //        url:"",
                    //        params:{},
                    //        fileName:""
                    //    }
                    //   }
                   ],
                   selectOption:[],
                   style:{

                       rowStyle:null,
                       cellStyle:null
                   }
            }, 


        }
        
        return data;
    },
    model:{

        prop:"options",
        event:"ModelValue"

    },
    props:{
        options:{

            type:Object,
            default:() => ({

                hasIndex:false,
                hasSelect:false,
                header:[],
                data:[],
                border:true,
                pagination:{
                    
                    pageIndex:1,
                    pageRowSize:10,
                    total:0
                },
                button:[],
                selectOption:[],
                option:{

                }
            })

        },
        value:""

    },
    computed:{

        tableData(){

            let { data , client , pagination } = this.listTable;

            let { pageIndex , pageRowSize } = pagination;

            let tableData =  !client ? data : 
                                data.slice(  (pageIndex-1) * pageRowSize, pageIndex * pageRowSize);
            
            return tableData;
        },

   
    },
    methods:{

        formatTableData(){

            console.log(cloneDeep(this.options))
            this.listTable = cloneDeep(this.options);

            this.doLayout();  

        },
        updateTableOption(){

            let cw = document.body.clientWidth;

            // this.listTable.option = Object.assign({
            //     rowExpand: cw < 1400 ? false : true
            // },{...this.options.option||{}});

            if(this.options.option && this.options.option.rowExpand ){

                this.listTable.option = Object.assign({
                    rowExpand: cw < 1400 ? false : true
                },{...this.options.option});
            }else{

                this.listTable.option.rowExpand = cw < 1400 ? false : true;
            }

            this.doLayout(); 
        },

        List_handleSelectionChange(val){

            this.listTable.selectOption = val ;
            this.HandleFunc("handleSelectionChange",val);
            
        },
        List_handleSizeChange(val){
            
            this.listTable.pagination.pageRowSize = val; 
            this.HandleFunc("handleSizeChange",val); 

        },  
        List_handleCurrentChange(val){

            this.listTable.pagination.pageIndex = val;
            this.HandleFunc("handleCurrentChange",val);

        },
        ListExportAllData(){


        },
        HandleFunc(type,val){
            
            this.ModelValue();
            this.$emit("HandleFunc",type,val)
            
        },
        CellClick(type,val){
            
            this.ModelValue();
            this.$emit("CellClick",type,val)

        },
        ButtonFunc(id,isexport = false){

            this.ModelValue();
            this.$emit("ButtonFunc",id,isexport)

            if(isexport){
            
                let ExportOption = this.listTable.button.filter(params=>params.export&&params.id==id);
                let exp_columnnamesanddisplaynames  = this.listTable.header.filter(params => !params.hidden&&!params.exporthidden).map(params=>`${params.key}&${params.name}`).join(",");
                
                ComApi.exportAllData(ExportOption[0].option.url,ExportOption[0].option.params,ExportOption[0].option.fileName,exp_columnnamesanddisplaynames)
                
            }

        },
        doLayout(){

            this.$nextTick(()=>{

                if(this.$refs["multipleTable"]){
                    
                    this.$refs["multipleTable"].doLayout();

                }

            })
        },
        ModelValue(){

            this.$emit("ModelValue",cloneDeep(this.listTable));  

        },
        sortchange({ column, prop, order }){

            let sort = order=="ascending"?"asc":"desc"
            let colname = prop;
            
            this.$emit("cell-click","sortChange",{colname,sort})

        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }){  /////合并单元格
                
            if(!this.listTable.cellspan)  return "";
            ///////////
            else{

                let total = this.listTable.data.length;
                
                let row_total =  new Set(this.listTable.data.map(param => param.ROWNUM))

                let row_index = [];
                
                row_total.forEach(elem=>{

                    row_index.push({"number":this.listTable.data.filter(param => param.ROWNUM ==elem ).length})
                })
                
                
                let row_total_index = 0;               
                ///row_index [10, 3, 11, 13]
                row_index = row_index.map(param =>{ 
                
                    param.index = row_total_index; 
                    row_total_index += param.number ; 
                
                    return param
                
                })

            

                if (columnIndex <  6) {
                if ( row_index.filter(param => param.index == rowIndex).length>0 ) {  //0,10,13,24  //10,13,24,37
                    
                    return {
                    rowspan: row_index.filter(param => param.index == rowIndex)[0].number*1,
                    colspan: 1
                    };
                } else {
                    return {
                    rowspan: 0,
                    colspan: 0
                    };
                }
                }
                }
                
                
                ////////
        },
        

    },
    mounted(){

        this.formatTableData();

        this.updateTableOption();

        
        window.addEventListener("resize",()=>{

            this.formatTableData();

            this.doLayout();
        })
    },
    watch:{

        "options.data":{
　　　　　　　　
　　　　　　 handler(val,oldVal){

                if(JSON.stringify(val) == JSON.stringify(oldVal)) return;

                this.formatTableData();
                　　　　　　　　
            },
　　　　　　 deep:true

　　    },
        "options.option":{

            handler(val,oldVal){

                this.formatTableData();
                　　　　　　　　
            },
　　　　　　 deep:true
        }

    }

}
</script>


<style  lang="less"  scoped>

    .component-ElementTable{ 

        .page-table{

            height: calc(100% - 40px);

        }
        .page-function{

            height: 40px;
            margin-top:10px;
            padding:10px 0;

            .function-button{
    
                float: right;
            
            }
        }

        /deep/ .el-table{

            height:100% !important;
            .el-table__header{

                th{
                    background-color:#f4f5f8;
                }
            }


            .el-table__body-wrapper{

                tr:nth-child(2n){
                   background-color: #f8f9fa;
                }
                
            }

            .el-table__fixed-body-wrapper{

                tr:nth-child(2n){
                    background-color: #f8f9fa;
                }
            }

            th{
                color: rgba(0, 0, 0, 0.7);
                //font-weight:normal;
            }

            tr{
                color: rgba(0, 0, 0, 0.7);
                font-weight:normal;
            }
        }

        /deep/ .row-expand{

            td,th{
                padding:8px 0px;
            }
        }


        /deep/ .row-expand-close{

            td,th{
                padding:4px 0px;
            }
        }
    }
    
</style>
