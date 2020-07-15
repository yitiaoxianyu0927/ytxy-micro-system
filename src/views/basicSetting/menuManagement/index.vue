<template>
    <div class="box-100 pad-20 menu-management">
        <div class="left-container">
            
            <custom-tree  
                
                :treeData="treeData"
                :defaultProps="defaultProps" 
                
            ></custom-tree>
        
        </div>  

        <!-- <div class="left-container">

            <div class="custom-property">


            </div>
        
        </div>  -->

    </div>
</template> 



<script>

    import { cloneDeep } from "lodash"

    export default {
    
        data(){

            return {

                treeData:[],

                defaultProps:{

                    children: 'children',
                    label: data => data.meta.title

                }

            }

        },
        components:{

            CustomTree:()=>import("@/components/CustomTree")
        },
        methods:{

            renderTree(){

               const menuConfig = require("@/config/menu/index.js");

               this.treeData = cloneDeep(menuConfig);

               //console.log("routerConfig",menuConfig);   

            }

        },
        mounted(){

            this.renderTree();

        }


    }

</script>


<style lang="less" scoped>

    .menu-management{

        .left-container{

            width:350px;
            border:1px solid rgba(0,0,0,0.1);
            padding: 10px;
            min-height: 100%;

        }

    }


</style>
