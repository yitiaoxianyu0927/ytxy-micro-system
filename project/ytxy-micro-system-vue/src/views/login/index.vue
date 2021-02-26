

<template>
    <div class="box-100">   
        <component
        
            :is="componentName"
        >
        </component>
    </div>
</template>


<script>
   
    export default{

        data(){

            return {

               componentName:null

            } 

        },
        components:{

            CommonLogin:() => import("./components/CommonLogin"),
            YnLogin:() => import("./components/YnLogin"),
            
        },
        methods:{

            queryComponentName(){

                let province = CORE_CONFIG.PROVINCE;

                let option = {

                    "ynyd":"YnLogin"
                }

                this.componentName = option[province] || "CommonLogin"

            }

        },
        mounted(){

            this.queryComponentName();

        }


    }

</script>


<style lang="less" scoped>
   
    

</style>