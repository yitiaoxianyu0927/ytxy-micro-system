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
        @change="val => ChangeElem(item.id,val,item)" 

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
        @change="val => ChangeElem(item.id,val,item)" 

    > 
    <!-- :filterable="item.filterable" -->
        <el-option
            
            v-for="selectItem in item.option"
            :key="selectItem.value"
            :label="selectItem.name"
            :value="selectItem.value"
        
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
        @change="val => ChangeElem(item.id,val,item)" 

    ></el-date-picker>
    <!-- date-picker 输入框 -->

    </div>
</template>



<script>

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

            ChangeElem(id,val,item){

                console.log("item",item)

                let displayVal = "";

                let option = {

                    "input":()=>{

                        displayVal = this.value;

                    },
                    "select":()=>{

                        displayVal = this.value;
                        
                    },
                    "datePicker":()=>{


                    }    


                };


                this.$emit("ModelValue",item);

            },
            focus(){

                console.log(13212);

                this.$refs["componentSubItem"].focus();
            }


        },
        created(){

            this.item = Object.assign({},{...this.option})
        },
        mounted(){


        }



    }


</script>


<style lang="less" scoped>



</style>