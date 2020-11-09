<template>
   <div class="box-100 custom-property">

        <div v-if="!property.uid || property.root "> 说明 </div>

        <el-form   
            
            v-else
            :inline="true" :model="form" ref="form" 
            class="demo-form-inline" size="small" 
            label-width="80px" label-position="left"
        
        >
            <div class="title">菜单管理</div>


                <el-row>  
                
                    <el-col :span="12" >
                        <el-form-item label="菜单类型" prop="menuType">
                            <el-select v-model="form.menuType.value" placeholder="请选择"  >
                                <el-option 
                                    v-for="item in form.menuType.option"
                                    :key="item.value"
                                    :value="item.value"
                                    :label="item.name"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>  

                <el-row>
                    
                    <el-col :span="12" >
                        <el-form-item label="菜单名称" prop="menuName">
                            <el-input  v-model="form.menuName" placeholder="请输入菜单名称" clearable></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12" >
                        <el-form-item label="菜单ID" prop="menuId">
                            <el-input  v-model="form.menuId" placeholder="请输入菜单ID" clearable></el-input> 
                        </el-form-item>
                    </el-col>

                </el-row>   

                <el-row>  
                
                    <el-col :span="12" >
                        <el-form-item label="显示环境" prop="env">
                            <el-select v-model="form.env.value" placeholder="请选择"  >
                                <el-option 
                                    v-for="item in form.env.option"
                                    :key="item.value"
                                    :value="item.value"
                                    :label="item.name"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12" >
                        <el-checkbox v-model="form.hidden">隐藏</el-checkbox>
                        <el-tag class="tag-contact" :type="form.contact ? 'success' : 'danger'">{{form.contact ? '关联数据库' : '未关联数据库'}}</el-tag>
                    </el-col>    

                </el-row> 

                <el-row>  
                
                    <el-col :span="12" >
                        <el-form-item label="菜单图标" prop="icon">
                            <el-input v-model="form.icon" placeholder="请选择"   @focus="openDialog" clearable/>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12" >
                        <el-form-item label="菜单模块" prop="module" v-if="form.menuType.value == 'iframe'">
                            <el-select v-model="form.module.value" placeholder="请选择"  >
                                <el-option 
                                    v-for="item in form.module.option"
                                    :key="item.value"
                                    :value="item.value"
                                    :label="item.name"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12" >
                        <el-form-item label="项目模块" prop="module" v-if="form.menuType.value == 'micro'">
                            <el-select v-model="form.project.value" placeholder="请选择"  >
                                <el-option 
                                    v-for="item in form.project.option"
                                    :key="item.value"
                                    :value="item.value"
                                    :label="item.name"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="24" >
                        <el-form-item label="菜单路径" prop="url">
                            <el-input v-model="form.url" placeholder="请选择" style="width:450px;" :readonly="form.children.length > 0"/>
                        </el-form-item>
                    </el-col>

                </el-row> 

                <el-row class="button-group">
            
                    <el-button type="primary" size="mini" @click="save">保存属性</el-button>
                    <el-button type="primary" size="mini" @click="exportConfigFile">导出配置文件</el-button>
                    <el-button type="primary" size="mini" disabled @click="syncData">同步数据库</el-button>
                    <el-button type="primary" size="mini" disabled @click="displaySql">查看sql</el-button>

                </el-row>


        </el-form>           

        <el-dialog title="图标库" :visible.sync="dialogVisible" custom-class="dialog-1366" :append-to-body="true">
            <div class="">
                <iconsGroup
                    
                    :mode="'selectIcon'"
                    :tab-hidden="['svg-icon']"
                    @select="handleSelectIcon"

                ></iconsGroup>
            </div>
        </el-dialog>
        
   </div>
</template>


<script>

    
   
    export default{

        data(){

            return {

                form:{

                    menuType:{

                        value:"router",
                        option:[{
                            name:"路由",value:"router"
                        },{
                            name:"iframe",value:"iframe"
                        },{
                            name:"外链页面",value:"externalLink"
                        },{
                            name:"微前端",value:"micro"
                        }]
                    },
                    menuName:"",
                    menuId:"",
                    env:{

                        value:"",
                        option:[{
                            name:"pro/dev",value:""
                        },{
                            name:"dev",value:"development"
                        }]
                    },
                    hidden:false,
                    icon:"",
                    module:{
                        value:"",
                        option:[]
                    },
                    project:{
                        value:"",
                        option:[]
                    },
                    url:"",
                    contact:false,
                    children:[]

                },
                uid:"",
                dialogVisible:false,
                

            }

        },
        components:{

            iconsGroup:()=>import("@/views/basicSetting/iconsGroup")
        },
        props:{

            property:{

                type:Object,
                default:()=>{

                } 

            }
        },
        methods:{
           
            save(){

                let type = this.form.menuType.value;
                let id = this.form.menuId;
                let env = this.form.env.value;
                let componentUrl = this.form.url;
                let icon = this.form.icon;
                let title = this.form.menuName;
                let moduleName = this.form.module.value;
                let url = this.form.url
                let projectName = this.form.project.value;
                let routerPath = this.form.url;
                let contact = this.form.contact;
                let uid = this.uid;
                let hidden = this.form.hidden;

                let { children } = this.property;


                this.$emit("save",{
                    
                    uid,
                    type,
                    id,
                    env,
                    contact,
                    icon , title,
                    meta:{  icon , title  },
                    
                    //router
                    componentUrl: type == 'router' ? componentUrl : null,
                    //iframe
                    url: type == 'iframe'  || type == 'externalLink' ? url : null,
                    moduleName,
                    //micro
                    routerPath: type == 'micro' ? url : null,
                    projectName,

                    children,
                    hidden
                    
                })

            },
            syncData(){


            },
            renderOption(){

                let { 
                    uid,
                    componentUrl,env = "",id,title,type,icon, contact,
                    moduleName,url,
                    projectName,routerPath,
                    hidden,
                    children
                 
                }  =  this.property;



                this.form.url = type == 'router' ? componentUrl : url;
                this.form.children = this.property.children;
                this.form.url = this.form.children.length > 0 ? "" : this.form.url;
                this.form.env.value = env;
                this.form.menuId = id;
                this.form.menuName = title;
                this.form.module.value = moduleName;
                this.form.menuType.value = type;
                this.form.icon = icon;
                this.form.contact = contact;
                this.form.hidden = hidden;
                this.uid = uid;

                
            },
            renderDictList(){

                let moduleList = [];
                let projectList = [];

                Object.keys(CORE_CONFIG).forEach(key => {

                    key.startsWith("FRAME_") ? moduleList.push({
                        name:key,value:key
                    }) : ""

                    key.startsWith("PROJECT_") ? projectList.push({
                        name:key,value:key
                    }) : ""
                    
                });

                this.form.module.option = moduleList;
                
                this.form.project.option = projectList;


            },
            displaySql(){

                this.$emit("displaySql","")
            },
            exportConfigFile(){

                this.$emit("exportConfigFile","")
            },
            handleSelectIcon(option){

                let { className } = option

                this.form.icon = className;

                this.dialogVisible = false;
            },
            openDialog(){


                this.dialogVisible = true
            }


        },
        mounted(){
             
            this.renderDictList(); 

        },

        watch:{

            property:{

                handler(val,oldVal){

                    this.renderOption();

                },
                deep:true
            }
        }

    }

</script>



<style lang="less" scoped>

    .custom-property{


        overflow:auto;
        padding:10px 20px;

        .tag-contact{

            margin-left:20px;
        }

        .title{
           
            height:30px;
            margin-bottom: 20px;
            position: relative;
            &::before{

                content: "";
                position: absolute;
                bottom:0px;
                width: calc(100% + 12px);
                height: 1px;
                background-color: rgb(219,219,219);
                transform: translateX(-6px);
            }
            
        }

        .button-group{

            position: absolute;
            right:10px;
            bottom:10px;

        }

        .demo-form-inline{

            height:100%;
        }


    }

    /deep/ .icon-panel{

        width:300px;
        height:200px;

        .el-scrollbar{

            height:100%;
            /deep/.el-scrollbar__wrap{

                overflow-x: hidden;
            
            }
        }
    }

</style>