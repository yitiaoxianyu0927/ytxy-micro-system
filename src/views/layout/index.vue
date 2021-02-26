

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

            CommonLayout:() => import("./layoutGroup/CommonLayout"),
            //YnLayout:() => import("./layoutGroup/YnLayout"),
            
        },
        methods:{

            renderComponentName(){

                let province = CORE_CONFIG.PROVINCE;

                let option = {

                    "ynyd":"YnLayout"
                }

                this.componentName = option[province] || "CommonLayout"

            }

        },
        mounted(){

            this.renderComponentName();

        }


    }

</script>


<style lang="less" scoped>
   
    

</style>