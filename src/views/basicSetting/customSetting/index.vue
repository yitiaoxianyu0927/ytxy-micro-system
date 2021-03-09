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
                :class="[layoutType == item.id ? 'active' : '']"
                @click="HandleClickLayoutItem(item.id)"
            ></div>
        </el-row>    
    </div>
</template> 


<script>

    export default {

        data(){

            return{

                layoutList:[{
                    id:"CommonLayout",
                    icon:require("@/assets/image/layout/layout-1.png"),
                },{
                    id:"HeaderNavLayout",
                    icon:require("@/assets/image/layout/layout-2.png"),
                },{
                    id:"SiderDarkLayout",
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

            HandleClickLayoutItem(id){

                this.$store.dispatch("changeLayout",id)

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
