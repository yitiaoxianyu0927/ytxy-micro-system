<template>
 
    <!-- input 输入框 -->
  
    <el-input 
        
        v-if="item.elem == 'input' && item.type != 'autocomplete' "
        :type="item.type||'text'"
        ref="componentSubItem"
        v-model="item.value"
        :style="{ width:item.width ? (item.width + 'px') : '100%'  }"
        :disabled="item.disabled||common.disabled"
        :placeholder="item.placeholder||('请输入'+item.name)"
        clearable
        :size="item.size||common.size"
        @change="ChangeElem(item)" 
    ></el-input>
    <!-- input 输入框 -->

    <!-- select 输入框 -->
    <el-select 
        
        v-else-if="item.elem == 'select'"
        v-model="item.value"
        ref="componentSubItem"
        :style="{ width:item.width ? (item.width + 'px') : '100%' }"
        :disabled="item.disabled||common.disabled"
        :filterable="item.filterable"
        :placeholder="item.placeholder||('请输入'+item.name)"
        :multiple="item.multiple"
        clearable
        collapse-tags
        :size="item.size||common.size"
        @change="ChangeElem(item)" 
        @keydown.native.prevent="active"
        
    > 
    <!-- :filterable="item.filterable" -->
        <el-option
            
            v-for="selectItem in item.option"
            :key="selectItem.value"
            :label="selectItem.name"
            :value="selectItem.value"
            @keydown.native.prevent="active"
            @keyup.native.prevent="active"
          
        ></el-option>
    </el-select>
    <!-- select 输入框 -->


    <!-- date-picker 输入框 -->
    <el-date-picker
    
        v-else-if="item.elem == 'datePicker'"
        :type="item.type||'date'"
        v-model="item.value"
        ref="componentSubItem"
        :style="{ width:item.width ? (item.width + 'px') : '100%' }"
        :disabled="item.disabled||common.disabled"
        :placeholder="item.placeholder||'请选择日期'"
        :value-format="item.valueFormat||'yyyy-MM-dd'"
        :start-placeholder="item.startPlaceholder||'开始时间'"
        :end-placeholder="item.endPlaceholder||'结束时间'"
        clearable
        :size="item.size||common.size"
        @change="ChangeElem(item)" 
        @blur="datePickerFocus"

        

    ></el-date-picker>
    <!-- date-picker 输入框 -->

    </div>
</template>



<script>

    import { cloneDeep } from "lodash"

    export default {

        data(){

            return {

                item:{}

            }

        },
        model:{
            
            prop:"option",
            event:"ModelValue"
        },
        props:{

            common:{

                type:Object,
                default:()=>({})

            },
            option:{

                type:Object,
                default:()=>({})

            }

        },
        methods:{

            ChangeElem(item){


                let displayVal = "";

                let option = {

                    "input":()=>{

                        displayVal = item.value;

                    },
                    "select":()=>{

                        displayVal = item.option.filter(v => {   ///获取显示值


                           return  typeof item.value == "string" ? 
                                v.value == item.value : item.value.indexOf(v.value) >=0
                            
                        }).map(v => v.name).join("|");
                        
                    },
                    "datePicker":()=>{

                        displayVal = typeof item.value == "string" ? 
                                item.value : Array.from(item.value || []).join("|") ;
                    }    


                };

                option[item.elem]();


                item = Object.assign(item,{  displayVal })

                this.$emit("ModelValue",item);

                this.$emit("change",{
                    elem:item.elem , item
                })

                //this.$emit("submit",{});

            },
            focus(){

                this.$refs["componentSubItem"].focus();
            },
            datePickerFocus(){

                //alert(1);
            },
            active(){

                alert(1);
            }


        },
        created(){

            this.item = cloneDeep(this.option);
        },
        mounted(){


        }



    }


</script>


<style lang="less" scoped>



</style>