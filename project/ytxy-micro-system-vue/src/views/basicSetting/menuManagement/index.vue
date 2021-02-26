<template>
    <div class="box-100 pad-20 menu-management">
        <div class="left-container">
            <el-scrollbar>
                <custom-tree  
                    
                    :treeData="treeData"
                    :defaultProps="defaultProps"
                    :firstLeaf="firstLeaf"
                    @node-click="nodeClick"
                    @addNode="addNode"
                    ref="custom-tree"
                    
                ></custom-tree>
            </el-scrollbar>
        </div>  

        <div class="right-container">

            <custom-property 
                :property="nodeProperty" 
                @save="saveProperty" 
                @displaySql="displaySql"
                @syncData="syncData"
                @lookConfigFile="lookConfigFile"
                @exportConfigFile="exportConfigFile"
            ></custom-property> 
        
        </div> 


        <el-dialog
            title="菜单配置信息"
            :visible.sync="dialogShow"
            custom-class="dialog-1366"
            append-to-body
        >
            <div class="pad-20">{{menuConfig}}</div> 
        </el-dialog>
        
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

                nodeProperty:{}, // 单节点属性

                curNodeId:null, //当前节点id

                dialogShow:false,
                menuConfig:""
            }

        },
        components:{

            CustomTree:()=>import("./components/CustomTree"),
            CustomProperty:()=>import("./components/CustomProperty")
        },
        computed:{
           
            ...mapGetters([
                "permission_routers"
            ]),
            systemName(){

                return this.$store.state.projectConfig.projectName;

            },
            firstLeaf(){

                return this.treeData.length > 0 ? [this.treeData[0].uid] : []
            }

        },
        methods:{

            renderTree(){

                //console.log(this.systemName)

                let systemName = this.systemName;

                //const menuConfig = require("@/config/menu/index.js");

                this.treeData = [{
                    root:true,
                    children:addTreeOptionForAll(   //每个添加uuid
                        cloneDeep(this.permission_routers),
                        { uid : "func" }
                    ),
                    meta:{
                        title:systemName
                    },
                    uid:getUUID()
                }]

                this.orgTreeData = cloneDeep( this.treeData );

                //console.log("treeData",this.treeData);   

            },
            nodeClick(data,node){

                //console.log(data);

                let {
                    root,   ///是否根目录
                    uid,
                    componentUrl,env,id,meta,type,contact,
                    moduleName,url,
                    projectName,routerPath,
                    children = [],
                    hidden = false
                    
                } = data;

                let { icon = "" , cache , title } = meta;



                this.nodeProperty = {
                    root,
                    uid,
                    componentUrl,env,id,title,type,icon,contact,
                    moduleName,url,
                    projectName,routerPath,
                    children,
                    hidden,
                    env
                }
                //Object.assign({},data);
                //this.$set("nodeProperty",Object.assign({},data))

            },
            saveProperty(option){

                let { uid , id } = option;

                if(!id){

                    this.$message.warning("页面ID不能为空")

                    return;
                }

                if(TreeToFlat(this.treeData).some(item => item.id == id && item.uid !=uid )){

                    this.$message.warning("页面ID冲突请修改")

                    return;
                }

                let treeData = this.treeData;
                
                
                this.treeData = updateTreeChild(treeData , option , "uid" , option.uid);
                //this.$refs["custom-tree"].updateKeyChildren(option.uid,option)
                this.$message.success("添加成功"); 

            },
            lookConfigFile(){

                let _treeData = this.formatConfigData();

                let menuConfig = `

                    const menuConfig = 
                        
                        ${JSON.stringify(_treeData,null,2)} ;

                    module.exports = menuConfig;
                
                `


                this.menuConfig = menuConfig;
                this.dialogShow = true;

            },
            exportMenuConfig(){

                let _treeData = this.formatConfigData();

                let province = CORE_CONFIG.PROVINCE;

                let blob = new Blob([`

                    const menuConfig = 
                        
                        ${JSON.stringify(_treeData,null,2)} ;

                    module.exports = menuConfig;
                
                `], {type: "text/plain;charset=utf-8"});
                
                FileSaver.saveAs(blob, `index_${province}.js` );

            },

            formatConfigData(){

                let treeData = this.treeData[0].children;

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

                return _treeData;

            },

            displaySql(){

                let newData = TreeToFlat(this.treeData);
                let oldData = TreeToFlat(this.orgTreeData);
                
                console.log(newData,oldData)
            },
            exportConfigFile(){

                this.exportMenuConfig();  
            },
            addNode(option){

                //console.log("addNode",option)

                this.curNodeId = option.uid;
            },
            syncData(){

                // console.log(TreeToFlat(this.treeData).filter(item => item.meta.env != "development" && !item.root  && item.env != "development"));

                // return;

                


                let nodesTree =  TreeToFlat(this.treeData)
                    .filter(item => item.meta.env != "development" && !item.root && item.env != "development")
                    .map(item => {

                    let pageUrl = item.meta.type == 'router' ? item.componentUrl : 
                                        item.meta.type == 'iframe' ? item.url : "";

                    return {

                        id:item.id,
                        parentId:item.parentId,
                        name:item.meta.title||"",
                        pageUrl

                    }                    
                    
                });

                //console.log(nodesTree,JSON.stringify(nodesTree))
                

                this.$confirm('是否同步数据库?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.$https.requestServer("/safety/menuuse/createmenu",{
                        menuJson:JSON.stringify(nodesTree)
                    }).then(res => {

                        this.$message.success("同步成功"); 

                    })

                }).catch(() => {
                    
                    this.$message({
                        type: 'info',
                        message: '已取消同步'
                    });
                    
                });    

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
            height: 100%;
            float:left;
            
            /deep/ .el-scrollbar{

                height:100%;
                
                .el-scrollbar__wrap{

                    overflow-x:hidden;
                }
            }


        }


        .right-container{

            float:left;
            width:calc(100% - 370px);
            margin-left:20px;
            border:1px solid rgba(0,0,0,0.1);
            padding: 10px;
            height: 100%;
        }

    }


</style>
