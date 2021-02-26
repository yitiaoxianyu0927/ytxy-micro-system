<template>

    <div v-if="NoHidden(item)" class="header-menu-wrapper">
        <template v-if="!item.children || item.children == 0">
                <!-- 本地路由 接入 -->
                <template 
                    v-if="item.type == 'router'"
                >
                    <router-link  :to="toPath(item.id)" tag="div">
                        <el-menu-item :index="toPath(item.id)">
                            <!-- <i 
                                v-if="item.meta.icon" 
                                :class="[item.meta.icon]" 
                            ></i> -->
                            <span slot="title" :title="item.meta.title" class="menu-title">{{item.meta.title}}</span>
                          
                        </el-menu-item>
                    </router-link>
                    
                </template>
                
                <!-- iframe 接入 -->
                
                <template 
                    v-if="item.type == 'iframe'"
                >
                    <router-link  :to="toPath(item.id)" tag="div">

                        
                            <el-menu-item :index="toPath(item.id)">
                                <!-- <i 
                                    v-if="item.meta.icon" 
                                    :class="[item.meta.icon]" 
                                ></i> -->
                                <span slot="title" :title="item.meta.title" class="menu-title">{{item.meta.title}}</span>
                                <!-- <item  :icon="item.meta.icon" :title="item.meta.title" /> -->
                            </el-menu-item>

                    </router-link>
            
                </template>

                <!-- 外链 接入 -->

                <template 
                    v-if="item.type == 'externalLink'"
                >
                    <el-menu-item :index="item.path" @click="openExternalPage(item.url)">
                        <!-- <i 
                            v-if="item.meta.icon" 
                            :class="[item.meta.icon]" 
                        ></i> -->
                        <span slot="title" :title="item.meta.title" class="menu-title">{{item.meta.title}}</span>
                    </el-menu-item>
            
                </template>


                <!-- 微前端  接入-->

                <template 
                    v-if="item.type == 'micro'"
                >
                
                    <router-link  :to="item.path" tag="div">
                        <el-menu-item :index="item.path">
                            <!-- <i 
                                v-if="item.meta.icon" 
                                :class="[item.meta.icon]" 
                            ></i> -->
                            <span slot="title" :title="item.meta.title" class="menu-title">{{item.meta.title}}</span>
                            <!-- <item  :icon="item.meta.icon" :title="item.meta.title" /> -->
                        </el-menu-item>
                    </router-link>
                    
                </template>
            

        </template>

        <template v-else>

            <el-submenu :index="toPath(item.id)">
                    
                <template slot="title">
                    <span :title="item.meta.title" class="menu-title">
                        <!-- <i 
                            v-if="item.meta.icon" 
                            :class="[item.meta.icon]" 
                        ></i> -->
                        {{item.meta.title}}
                    </span>
                </template>    
                <header-bar-item v-for="v in item.children" :key="v.id" :item="v" class=""/> 
                
            </el-submenu>

        </template>

    </div>


</template>


<script>

    import { mapGetters } from "vuex"


    export default{

        name:"header-bar-item", 
        data(){

           return{


           } 
            
        },
        props:{

            item:{

                type:Object
            }
        },
        components: { 
        
            TextOverTip:()=> import("@/components/TextOverTip")
            
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
        methods:{

            toPath(id){

                

               return  id.substring(0,1) == "/" ? id : "/" + id; 

            },
            isTextOver(title,el){
                
                console.log(title,el)

            },
            NoHidden(item){

                //hidden 隐藏
                //contact 隐藏
                //hidden 隐藏

                let mode = process.env.NODE_ENV;
                

                return  !item.hidden &&   ///是否隐藏
                            (
                                (
                                    item.env == 'development' &&  mode == 'development' ///开发环境菜单
                                ) ||
                                (
                                    item.env != 'development'  &&  ///生产环境菜单
                                    (item.contact || !CORE_CONFIG.IS_FILTER_MENU_BY_DATABASE) //是否过滤数据库
                                )
                            ) 
                    

            },
            openExternalPage(url){
               
                window.open(url);

            }

        },
        mounted(){

        }


    }


</script>


<style lang="less" scoped>

    

    .header-menu-wrapper{

        display: inline-block;
        vertical-align: top;
        height:100%;


        .menu-title{

            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            display: inline-block;
            font-size:14px !important;
            font-weight:bold;
            padding:2px 10px !important;
            
        }

        
         
        .el-menu-item{

            // padding-right:20px;
            // min-width:unset;
            // display:block;
            // box-sizing:border-box;
            // width:100%;
            // background-color: rgb(255, 181, 205);

            //background-color:rgb(37, 181, 205) !important;
            
        } 

        .el-submenu{

            .menu-title{
                font-weight:bold;
                //width:100%;
            }
        }


        /deep/ .el-menu-item,/deep/ .el-submenu__title{
            height:50px;
            line-height:50px;
        }

        /deep/ .el-submenu__title{
            height:100%;

            .menu-title{
                // font-weight:normal;
               // width:calc(100% - 24px);
            }

            .el-submenu__icon-arrow{
                position:relative !important;
                right:0px;    
                margin:0 10px;
                color:#fff;
                display:none;
            }
        }

        i[class^="icon-"]{
            margin-right: 5px;
            width: 24px;
            text-align: center;
            font-size: 16px;
            display:inline-block;
            vertical-align: middle;
        }

        
        
    }

    @media screen and (min-width: 1800px) {
        .header-menu-wrapper{
            
            .menu-title{
                font-size:16px !important;
                padding:2px 16px !important;
            }

        }
    }


</style>


<style lang="less" >

    
    .menu-tooltip{

        transform: translateX(10px);
    }

    .el-submenu-tooltip{

        transform: translateX(52px);
    }

    .el-menu--popup{

        .header-menu-wrapper{

            display: block !important;

            .el-submenu__icon-arrow{
                display:inline-block !important;
                right:0px;    
                margin:0 10px;
                
            }

            .el-menu-item{

                padding:0 2px !important;
            }

            .el-submenu__title{

                padding:0 2px !important;
            }
        }

        .menu-title{

            font-weight:normal !important;
            
        } 
    }

</style>