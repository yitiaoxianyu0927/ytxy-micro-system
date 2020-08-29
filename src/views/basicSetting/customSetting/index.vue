<template>
    <div class="box-100 customSetting pad-20" >
        <el-row>
            <div class="layout-title">布局</div>
            <div 
                v-for="(item,index) in layoutList"
                :style="{
                    backgroundImage:`url(${item.icon})`
                }"
                class="layout-item"
                :class="[layoutType == index + 1 ? 'active' : '']"
                @click="HandleClickLayoutItem(index)"
            ></div>
        </el-row>    
    </div>
</template> 


<script>

    export default {

        data(){

            return{

                layoutList:[{
                    icon:require("@/assets/image/layout/layout-1.png"),
                },{
                    icon:require("@/assets/image/layout/layout-2.png"),
                },{
                    icon:require("@/assets/image/layout/layout-3.png"),
                }]

            }
        },
        computed:{

            layoutType(){
                
                return this.$store.state.app.layoutType
            }
        },
        components:{

            


        },
        methods:{

            HandleClickLayoutItem(index){

                this.$store.dispatch("changeLayout",index + 1)

            } 
            
        },
        mounted(){



        }


    }

</script>



<style lang="less" scoped>
    
    .customSetting{

        .layout-title{

            margin-bottom:20px;
        }

        .layout-item{

            background-size:100% 100%;
            background-repeat:no-repeat;
            width:110px;
            height:70px;
            display:inline-block;
            margin-left:20px;
            cursor:pointer;
            border:1px solid #ccc;
            border-radius:4px;
        }

        .active{
            position:relative;
        }
        .active:after{
            content:"";
            position:absolute;
            right:0px;
            bottom:0px;
            border:10px solid #2de87b;
            border-color:transparent #2de87b  #2de87b transparent; 
        }
    }
    

</style>
