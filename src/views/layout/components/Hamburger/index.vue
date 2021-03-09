<template>
    <div 
        class="box-100 ham" 
        :style="{width:width+'px',height:height+'px'}"
        :class="[!isCollapse?'collapse':'']"
        @click="toggleSideBar"
        v-if="openIcon == ''"
    >
       <div v-for="i in [1,2,3]" ></div>
    </div>

    <div 
        v-else 
        class="box-100  ham-icon" 
        :style="{width:width+'px',height:height+'px',lineHeight:height+'px'}"
        :class="[!isCollapse? openIcon : closeIcon ]"    
        @click="toggleSideBar" 
    >

    </div>

</template>

<script>

    import { mapGetters } from "vuex"

    export default{

        data(){

            return {


            }
        },
        computed:{

            ...mapGetters(
                [
                    "sidebar"
                ]
            ),
            isCollapse(){
                 
                return !this.sidebar.opened  
            }
        },
        props:{

            width:{
                
                type:Number,
                default:18
            },
            height:{

                type:Number,
                default:14
            },
            openIcon:{

                type:String,
                default:""
            },
            closeIcon:{

                type:String,
                default:""
            }
        },
        methods:{

            toggleSideBar(){

                this.$store.dispatch("toggleSideBar");

               
            }
        }


    }


</script>

<style lang="less" scoped>
   
    .ham{

        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:flex-end;
        position:relative;
        cursor:pointer;
        &>div{
             
            width:100%; 
            height:2px;
            background-color:#409eff;
            border-radius:20px;
            transition: all 0.2s ease-in-out;
        } 
       
    }

    .ham-icon{

        cursor:pointer;
        text-align:center;
    }

    .collapse{

        div:nth-child(1){
             
            width:60%; 
        }  
        
        div:nth-child(3){
             
            width:40%; 
        } 
          
    }


</style>