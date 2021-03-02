<template>
    <div class="complex-search">
        
        <div class="complex-container">

            <div class="complex-searchbar" @click="HandleClickSearchBar">

                <!--选择筛选条件 -->
                    <el-select 
                        class="search-type-select"  
                        ref="search-type-select"
                        v-model="searchType.value" 
                        filterable 
                        size="mini"
                        placeholder=""
                        v-if="!editOption.name"
                        @change="HandleSelectSearchType"
                    >
                        <el-option :key="'default'" :label="'选择资源属性进行过滤'" :value="'default'" disabled ></el-option>
                        <el-option
                            v-for="item in searchType.option"
                            :key="item.value"
                            :label="item.name"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                <!--选择筛选条件 -->

                
                <!--编辑筛选条件-->
                    <div
                        class="search-edit-panel"  
                        v-if="editOption.name"
                    >
                        <span class="edit-name">{{editOption.name}}：</span>

                        <componentItem v-model="editOption" :option="{
                            ...editOption
                        }" ref="search-edit-select"/>
                    </div>
                <!--编辑筛选条件-->

                <!--编辑的标签项-->

                    <div 
                        class="tag-item"
                        v-for="item in tagList"
                    >
                        <span class="item-name">{{item.name}}:</span>
                        <span class="item-value">{{item.value}}</span>
                    </div>
                <!--编辑的标签项 -->

            </div>

            <div class="complex-expand" @click="expand = !expand">
                <span>高级搜索</span> <i :class="[expand ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"> </i>
            </div>


        </div>

        <div class="complex-panel">

            <el-form 

                ref="complexSearchForm"
                class="demo-form-inline complex-form-container"  
                :label-width="ListForm.option.labelWidth + 'px'" 
                :label-position="ListForm.option.labelPosition" 
                size="small"
                :inline="true"
                :model="ListModelForm"
        
            >
                <el-row 
            
                    v-for="(rowItem,rowIndex) in ListForm.row" 
                    :key="rowIndex"

                >
                    <el-col 

                        v-for="item in rowItem" 
                        :span="item.col"
                        :key="item.id"
                        :offset="item.offset"
                        
                    >
                        <el-form-item 
                        
                            :label="item.name" 
                            v-if="!(item.elem == 'button' || (item.elem == 'custom' && item.labelhidden ))" 
                            :label-width="(item.labelWidth||ListForm.option.labelWidth) + 'px'"
                            :prop="item.id"
                        >
                            
                            <componentItem :option="item" :common="ListForm.option"/>

                        </el-form-item>

                    </el-col>

                </el-row>

            </el-form>
            
        </div>

        <div class="complex-expand"></div>

    </div>
</template>



<script>

    import { ListForm }  from "./config.js"

    export default{

        data(){

            return {

                ListForm,
                ListModelForm:{},
                expand:false,
                searchType:{
                    value:"",
                    option:[]
                },
                tagList:[],
                editOption:{
                }
            }

        },
        components:{

            componentItem:()=>import("./componentItem")
        },
        methods:{

            ChangeElem(id,val,item){


            },
            renderSelectType(){

                let list = [];

                let { row } = ListForm;

                row.forEach((item,index) => {
                    
                    item.forEach((v,i) => {

                        list.push({
                            ...v,value:v.id,selected:false
                        })

                    });

                });

                this.searchType.option = list;

            },
            HandleClickSearchBar(){

                this.$refs["search-type-select"].focus();
            },
            HandleSelectSearchType(){

                let type = ""; 

                [ type , this.searchType.value ] = [ this.searchType.value , "" ];

                this.editOption = Object.assign(this.searchType.option.find(item => item.id == type ),{
                    size:'mini',value:""
                });

                this.$nextTick(()=>{

                    this.$refs["search-edit-select"].focus();
                })
                
            },
            addTagItem(){

                const { id , name , value , displayName } = this.editOption;

                this.tagList.push({
                    id,name,value
                })
               
                this.editOption = {};
                this.searchType.value = "";

                this.searchType.option = this.searchType.option.map(item => {

                    item.id == id ? item.selected = false : null;

                    return item;
                })


            },
            ListenerKeyUp(){

                document.onkeydown =  (event) => {
                    var e = event || window.event;
                    if (e && e.keyCode == 13) { //回车键的键值为13
                       this.addTagItem();
                    }
                };

            }

        },
        mounted(){

            this.renderSelectType();
            this.ListenerKeyUp();

        },
        beforeDestory(){

            if(document.onkeydown){

                document.onkeydown = null;
            }

        }



    }

</script>


<style lang="less" scoped>

    .complex-search{


        .complex-container{

            &>div{

                display:inline-block;
                vertical-align:middle;
            }

            .complex-expand{

                margin-left:20px;
                cursor:pointer;
                transition:all 0.2s ease-in-out;
                &:hover{

                    color:#409eff;
                }

            }

            .complex-searchbar{

                width:600px;
                height:30px;
                border:1px solid #cfd5de;
                padding:0px 10px;

                .search-tag{

                    &>span{

                        font-size: 12px;
                        vertical-align: top;
                        max-width: 100px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .tag-label{

                        color:rgba(0,0,0,.4);
                    }

                    
                }
                

            }

            .search-edit-panel{

                display:inline-block;
                font-size:12px;
                height:28px;
                line-height:28px;
                white-space: nowrap;

                &>div{
                    display:inline-block;
                }

                /deep/.el-input__inner{
                    transform:translateY(-1px);
                    border:none;
                }

            }

            .tag-item{

                background-color: #f3f4f7;
                color:#000;
                display:inline-block;
                height:20px;
                line-height:20px;
                font-size:12px;
                &>span{
                    height:20px;
                    line-height:20px;
                    padding:0 10px;
                }
                .item-name{
                    color: rgba(0,0,0,.4);
                }
            }

        }


        .complex-panel{

            padding:20px 10px;
        }

        /deep/ .search-type-select{

            width:10px;

            .el-input__suffix{

                display:none !important;
            }

            .el-input__inner{

                border:none;
                padding:0px 2px;
              
            }
        }

    }

</style>