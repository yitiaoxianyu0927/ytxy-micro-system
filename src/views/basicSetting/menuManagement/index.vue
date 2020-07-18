<template>
    <div class="box-100 pad-20 menu-management">
        <div class="left-container">
            
            <custom-tree  
                
                :treeData="treeData"
                :defaultProps="defaultProps" 
                @node-click="nodeClick"
                ref="custom-tree"
                
            ></custom-tree>
        
        </div>  

        <div class="right-container">

            <div class="custom-property">

                <custom-property :property="nodeProperty" @save="saveProperty" @displaySql="displaySql"/> 
               
            </div>
        
        </div> 
        
        
    </div>
</template> 



<script>

    import { cloneDeep } from "lodash";

    import { updateTreeChild , addTreeOptionForAll , getUUID , TreeToFlat } from "@/utils/common.js";

    import { mapGetters } from "vuex"

    import FileSaver from 'file-saver';


    export default {
    
        data(){

            return {

                treeData:[],

                orgTreeData:[], //初始sql

                defaultProps:{

                    children: 'children',
                    label: data => data.title

                },

                nodeProperty:{} // 单节点属性

            }

        },
        components:{

            CustomTree:()=>import("./components/CustomTree"),
            CustomProperty:()=>import("./components/CustomProperty")
        },
        computed:{
           
            ...mapGetters([
                "permission_routers"
            ])

        },
        methods:{

            renderTree(){

                //const menuConfig = require("@/config/menu/index.js");

                this.treeData = addTreeOptionForAll(
                   cloneDeep(this.permission_routers),
                   { uid : "func" }
                );

                this.orgTreeData = addTreeOptionForAll(
                   cloneDeep(this.permission_routers),
                   { uid : "func" }
                );

                console.log("treeData",this.treeData);   

            },
            nodeClick(data,node){

                //console.log(data);

                let {
                    uid,
                    componentUrl,env,id,meta,type,contact,
                    moduleName,url,
                    projectName,routerPath
                    
                } = data;

                let { icon = "" , cache , title } = meta;

                this.nodeProperty = {
                    uid,
                    componentUrl,env,id,title,type,icon,contact,
                    moduleName,url,
                    projectName,routerPath
                }
                //Object.assign({},data);
                //this.$set("nodeProperty",Object.assign({},data))

            },
            saveProperty(option){

                let id = option.id;

                let treeData = this.treeData;
                
                this.treeData = updateTreeChild(treeData , option , "uid" , option.uid);

                

                this.exportMenuConfig();  

            },
            exportMenuConfig(){

                let treeData = this.treeData;

                let fn = (data) => {

			        let tree = [];
	
			        for(let [i,v] of data.entries()){


                            if(v.children){

                                    v.children =  fn(v.children);

                                    
                            }
                            
                            let { icon ,title , cache } = v.meta;
                           
                            v.meta = { icon ,title , cache }

                            tree.push(v)
                    } 

                    return tree;

                }

                

                let _treeData = fn(treeData);

                let province = CORE_CONFIG.PROVINCE;

                let blob = new Blob([`

                   const meunConfig = ${JSON.stringify(_treeData)} ;

                   module.exports = meunConfig;
                
                `], {type: "text/plain;charset=utf-8"});
                
                FileSaver.saveAs(blob, `index_${province}.js` );
            },

            displaySql(){

                let newData = TreeToFlat(this.treeData);
                let oldData = TreeToFlat(this.orgTreeData);
                
                console.log(newData,oldData)
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
            float:left;

        }


        .right-container{

            float:left;
            width:calc(100% - 370px);
            margin-left:20px;
            border:1px solid rgba(0,0,0,0.1);
            padding: 10px;
            min-height: 100%;
        }

    }


</style>
