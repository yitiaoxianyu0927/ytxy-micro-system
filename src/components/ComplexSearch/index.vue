
<template>
    <div class="complex-search">
     
        <div class="complex-container">
        
            <div 
            
                class="complex-searchbar" 
                @click.stop.prevent="HandleClickSearchBar"
                :class="[editFocus || editOption.name ? 'isfocus': '' ]"
               
            
            >
                <div class="complex-searchbar-inner">
                    <!--编辑的标签项-->

                        <div 
                            class="tag-item"
                            v-for="item in tagList"
                        >
                            <span class="item-name">{{item.name}}:</span>
                            <span class="item-value">{{item.displayVal}}</span>
                            <i class="el-icon-error" @click="removeTagItem(item)"></i>
                        </div>
                    <!--编辑的标签项 -->


                    <!--编辑筛选条件-->
                        <div
                            class="search-edit-panel"  
                            v-if="editOption.name"
                            
                        >
                            <span class="edit-name">{{editOption.name}}：</span>

                            <el-form ref="editForm" :model="editOption"  
                                @submit.native.prevent
                                @keyup.enter.native="addTagItem"
                                
                            >
                                <componentItem v-model="editOption" :option="{
                                    ...editOption
                                }" ref="search-edit-select"
                                    @change="componentItemChange"
                                />
                            </el-form>
                        </div>
                    <!--编辑筛选条件-->

                

                    <!--选择筛选条件 -->
                        <el-select 
                            class="search-type-select"  
                            ref="search-type-select"
                            v-model="searchType.value" 
                            filterable 
                            size="mini"
                            :placeholder="''"
                            v-if="!editOption.name"
                            @change="HandleSelectSearchType"
                            @keyup.native.delete.stop.capture="removeTagItem"
                            @focus="editFocus = true"
                            @blur="editFocus = false"
                        >
                            <el-option :key="'default'" :label="'选择资源属性进行过滤'" :value="'default'" disabled ></el-option>
                            <el-option
                                v-for="item in filterSearchTypeOption"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                            ></el-option>
                        </el-select>
                    <!--选择筛选条件 -->


                    <div class="complex-placeholder">多个关键字用"|"分隔，多个过滤标签用回车键分隔</div>

                </div>


            </div>

            <div class="complex-expand" @click="HandleExpand">
                <span>高级搜索</span> <i :class="[expand ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"> </i>
            </div>

            <div class="button-group">
                <slot/>
            </div>
        
        </div>

        <el-collapse-transition>
            <div  class="complex-panel"  v-if="expand">
                
                    <ElementForm

                    
                        :option="ListForm"
                        @ChangeElem="ChangeElem"

                    ></ElementForm>
                
            </div>
        </el-collapse-transition>


    </div>
</template>



<script>

    /** 只支持 输入框 选择框 日期框 */

    // import { ListForm }  from "./config.js";

    import { cloneDeep } from "lodash";

    import tagListMix from "./taglist"


    export default{

        mixins:[tagListMix],
        data(){

            return {

                ListForm:{},
                ListModelForm:{},
                expand:false,
                searchType:{
                    value:"",
                    option:[]
                },
                
                editOption:{
                },

                editFocus:false
            }

        },
        props:{

            option:{

                type:Object,
                default:()=>({})

            }

        },
        computed:{

            filterSearchTypeOption(){


                return this.searchType.option.filter(item => !item.selected);
            }
        },
        components:{

            componentItem:()=>import("./componentItem"),
            ElementForm:()=>import("@/components/ElementForm")
        },
        methods:{

            ChangeElem(...args){


                this.updateTagItem(...args);
            },
            renderSelectType(){

                let list = [];

                let { row } = this.ListForm;

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

                this.$nextTick(()=>{

                    this.$refs["search-type-select"].focus();

                    this.searchType.value = "";
                });

            },
            HandleSelectSearchType(){

                let type = ""; 

                [ type , this.searchType.value ] = [ this.searchType.value , "" ];

                this.editOption = Object.assign(this.searchType.option.find(item => item.id == type ),{
                    size:'mini',value:""
                });

            
                
            },
            
            componentItemChange({elem,item}){

                if(elem == "datePicker" ){

                    window.onkeyup = null;
                
                    window.onkeyup = (event) => {
                        if (event.keyCode == "13" ) {
                            //回车执行查询

                            this.addTagItem();
                            window.onkeyup = null;
                        }
                    }

                }

            },
            
            HandleExpand(){

                this.expand = !this.expand;


            }

        },
        created(){

            this.$set(this,"ListForm",cloneDeep(this.option));
        },
        mounted(){

            this.renderSelectType();

        },
        beforeDestory(){

            window.onkeyup = null;

        }



    }

</script>


<style lang="less" scoped>

    .complex-search{


        .complex-container{

            height: 30px;
            line-height: 30px;

            &>div{

                display:inline-block;
                vertical-align:middle;
            }

            .complex-expand{

                margin-left:620px;
                cursor:pointer;
                transition:all 0.2s ease-in-out;
                &:hover{

                    color:#409eff;
                }

            }

            .complex-searchbar{

                width:600px;
                height:30px;
                overflow:hidden;
                border:1px solid #cfd5de;
                padding:0px 6px;
                position:absolute;
                background-color:#fff;

                // /deep/ .el-input__inner{

                //     height:27px;
                //     line-height:27px;
                // }

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

                // /deep/.el-input__inner{

                //     color:rgba(0,0,0,0)
                // }

                .search-type-select{

                    vertical-align: middle;
                }

                .complex-placeholder{

                    color:rgba(0,0,0,.25);
                    display:inline-block;
                    vertical-align: middle;
                    font-size: 12px;
                    height:20px;
                    line-height:20px;
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

                .el-form{

                    display:inline-block;
                }

            }

            .tag-item{

                background-color: #f3f4f7;
                color:#000;
                display:inline-block;
                height:20px;
                line-height:20px;
                font-size:12px;
                margin:2px;
                vertical-align: middle;
                padding:0 5px;
                 
                &>span{
                    height:20px;
                    line-height:20px;
                    cursor:pointer;
                }
                .item-name{
                    color: rgba(0,0,0,.4);
                }

                i{

                    color:#bbb;
                    cursor:pointer;
                }

                i:hover{

                    color:#333;
                }
            }

            .button-group{

                float:right;
                display:inline-block;
                height:30px;
                line-height:30px;
            }

            .isfocus{

                height:auto;
                overflow:visible;
                border:1px solid #409EFF;

                // .tag-item{

                //     margin-top:4px;
                // }

                .complex-placeholder{

                    margin:4px 0;
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