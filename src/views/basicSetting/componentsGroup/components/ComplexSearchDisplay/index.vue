<template>
    <div class="complex-search-display box-100">
        <ComplexSearch/>
    </div>    
</template>



<script>

    import Mock from "mockjs"

    export default {

        data(){

            return {

            }

        },
        components:{

            ComplexSearch:()=>import("@/components/ComplexSearch")
        },
        methods:{

            queryListTableData(){

       
            },
            HandleFunc(type,val){

                
               
            },
            CellClick(col,row){


            },
            ButtonFunc(id,option){
                
            },

        },
        mounted(){

        }






    }


</script>



<style lang="less" scoped>

    // .element-table-display{

    //     height:400px;

    // }

</style>