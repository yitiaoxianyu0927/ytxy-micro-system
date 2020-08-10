<template>
    <div 
    
        class="text-over-tip box-100" 
        @mouseover="mouseover($event,$el)"
    
    >
        <el-tooltip 
        
            class="item" 
            effect="dark" 
            :content="title" 
            :placement="placement" 
            :disabled="!showTip"
            :popper-class="popperClass"
        >
           <slot/>
        </el-tooltip>
    </div>
</template>


<script>
    
    export default{

        data(){

            return{
               
               showTip:false

            }
        },
        props:{

            title:{

                type:String,
                default:""
            },
            domName:{

                type:String,
                default:""
            },
            placement:{

                type:String,
                default:"right"
            },
            popperClass:{

                type:String,
                default:""
            }
            
        },
        methods:{

            mouseover(e,$el){


               let $ = $el.querySelector(this.domName);

               let $w = $.clientWidth - $.scrollWidth;

               this.showTip = $w < 0;
            }

        },
        mounted(){



        }
    }
 

</script>


<style lang="less" scoped>

    .text-over-tip{



    }

</style>


