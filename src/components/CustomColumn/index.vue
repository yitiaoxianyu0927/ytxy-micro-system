<template>
    <div class="component-CustomColumn" style="width:180px;height:100%;position:relative">
 
      
        <el-select 
            v-model="value" 
            multiple
            collapse-tags
            @remove-tag="changeColumn"
            @visible-change="changeColumn"
            placeholder="请选择"
        > 
          <!-- 
            @change="changeColumn" -->
            <el-option
                
                v-for="item in option"
                :key="item.key"
                :label="item.name"
                :value="item.key"
                
            ></el-option>
        </el-select>
   

    </div>
</template>



<script>

    import RequestUtils from "@/utils/request.js";

    export default {

        data(){
         
            let data = {

                option:[],
                value:[]

            }
            
            return data;
        },
        model:{

            prop:"value",
            event:"ModelValue"

        },
        props:{
            
            pageId:{

                type:String,
                
            },
            column:{

                type:Array,
                default:[]
            }

        },
        methods:{
        
            changeColumn(type){

                //if(!type){


                    this.saveDisplayColumnList();

                    //this.$emit("changeColumn",this.value);

                //}


            },
            queryDisplayColumnList(){

                RequestUtils.requestServer("/commonweb/querypagesstyle",{
                    page_id:this.pageId,
                    page_type:"VUE"
                }).then(res => {
                    
                    this.value = res.userdata.map(item => item.COLUMN_KEY);

                    this.renderEnd(this.value);
                    
                })  


            },
            saveDisplayColumnList(){

                let columnlist = this.option.filter(item => this.value.includes(item.key)).map(item => {

                    let arr = {};

                    arr.COLUMN_KEY = item.key;
                    arr.COLUMN_DISPLAYNAME = item.name;

                    return arr;

                });

                let columnmodeljson = JSON.stringify(columnlist);

                RequestUtils.requestServer("/commonweb/savepagesstyle",{
                    page_id:this.pageId,
                    page_type:"VUE",
                    columnmodeljson
                }).then(res => {

                    this.renderEnd(this.value);
                }) 


            },
            queryDisplayColumn(){

                return this.value;

            },
            renderEnd(val){

                console.log(val)

                this.$emit("render-end",val);  


            }

        },
        mounted(){

            this.option = this.column;

            this.queryDisplayColumnList();

        },
        watch:{


        }



    }

</script>
