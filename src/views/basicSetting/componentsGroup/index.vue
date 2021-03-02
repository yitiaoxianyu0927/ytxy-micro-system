<template>
    <div class="pad-20 components-group box-100">
        <el-divider content-position="left" >复杂搜索</el-divider>
        <ComplexSearchDisplay/>
    </div>    
</template>



<script>

    export default {

        data(){

            return {

            }

        },
        components:{

            ElementTableDisplay:()=>import("./components/ElementTableDisplay"),
            ComplexSearchDisplay:()=>import("./components/ComplexSearchDisplay")

        },
        methods:{



        },
        mounted(){


        }






    }


</script>



<style lang="less" scoped>

    .components-group{



    }

</style>