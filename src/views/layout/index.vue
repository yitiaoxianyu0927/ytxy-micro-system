

<template>
    <div class="box-100">   
        <template  v-if="!isMicro">
            <component

                :is="componentName"
            >
            </component>
        </template>
        <template   v-else>
            <keep-alive> 
                <router-view />
            </keep-alive>
        </template>    
    </div>
</template>


<script>

    import { getUrl } from "@/utils/common.js"
   
    export default{

        data(){

            return {

               componentName:null

            } 

        },
        components:{

            CommonLayout:() => import("./layoutGroup/CommonLayout"),
            HeaderNavLayout:() => import("./layoutGroup/HeaderNavLayout"),
            SiderDarkLayout:() => import("./layoutGroup/SiderDarkLayout"),
            AppMain:()=>import("./components/AppMain"),
            
        },
        computed:{

            layoutType(){
                
                return this.$store.state.app.layoutType
            },
            isMicro(){

                
                return  getUrl("fromSystem") || window.__POWERED_BY_QIANKUN__ ? true : false;

            }
        },
        methods:{

            renderComponentName(){

                // let province = CORE_CONFIG.PROVINCE;

                // let option = {

                //     "ynyd":"YnLayout"
                // }

                this.componentName = this.layoutType;//option[province] || "CommonLayout"

            }

        },
        mounted(){

            this.renderComponentName();

        },
        watch:{

            layoutType:{

                handler(val,oldVal){

                    this.renderComponentName();

                }

            }

        }


    }

</script>


<style lang="less" scoped>
   
    

</style>