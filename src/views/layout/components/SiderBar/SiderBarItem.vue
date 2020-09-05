<template>

    <div v-if="NoHidden(item)" class="menu-wrapper">

        <template v-if="!item.children || item.children == 0">
            

            
            <text-over-tip :title="item.meta.title" :domName="'.menu-title'" :popper-class="'menu-tooltip'">
               
                <!-- 本地路由 接入 -->
                <template 
                    v-if="item.type == 'router'"
                >
                    <router-link  :to="item.path" tag="div">
                        <el-menu-item :index="item.path">
                            <i 
                                v-if="item.meta.icon" 
                                :class="[item.meta.icon]" 
                            ></i>
                            <span slot="title" :title="item.meta.title" class="menu-title">{{item.meta.title}}</span>
                            
                            <!-- <item  :icon="item.meta.icon" :title="item.meta.title" /> -->
                            
                        </el-menu-item>
                    </router-link>
                    
                </template>
                
                <!-- iframe 接入 -->
                
                <template 
                    v-if="item.type == 'iframe'"
                >
                    <router-link  :to="item.path" tag="div">

                        
                            <el-menu-item :index="item.path">
                                <i 
                                    v-if="item.meta.icon" 
                                    :class="[item.meta.icon]" 
                                ></i>
                                <span slot="title" :title="item.meta.title" class="menu-title">{{item.meta.title}}</span>
                                <!-- <item  :icon="item.meta.icon" :title="item.meta.title" /> -->
                            </el-menu-item>

                    </router-link>
            
                </template>

                <template 
                    v-if="item.type == 'externalLink'"
                >
                    <el-menu-item :index="item.path" @click="openExternalPage(item.url)">
                        <i 
                            v-if="item.meta.icon" 
                            :class="[item.meta.icon]" 
                        ></i>
                        <span slot="title" :title="item.meta.title" class="menu-title">{{item.meta.title}}</span>
                    </el-menu-item>
            
                </template>


                <!-- 微前端  接入-->

                <template 
                    v-if="item.type == 'micro'"
                >
                
                    <router-link  :to="item.path" tag="div">
                        <el-menu-item :index="item.path">
                            <i 
                                v-if="item.meta.icon" 
                                :class="[item.meta.icon]" 
                            ></i>
                            <span slot="title" :title="item.meta.title" class="menu-title">{{item.meta.title}}</span>
                            <!-- <item  :icon="item.meta.icon" :title="item.meta.title" /> -->
                        </el-menu-item>
                    </router-link>
                    
                </template>
            
            </text-over-tip>

        </template>

        <template v-else>

            <el-submenu :index="item.path">
                
                <template slot="title" v-if="isCollapse">
                    <i 
                        v-if="item.meta.icon" 
                        :class="[item.meta.icon]" 
                    ></i>
                    <span slot="title" :title="item.meta.title" class="menu-title">{{item.meta.title}}</span>
                </template>
                
                <text-over-tip slot="title" v-else :title="item.meta.title" :domName="'.menu-title'" :popperClass="'el-submenu-tooltip'">
                    
                    <template>
                        <span :title="item.meta.title" class="menu-title">
                            <i 
                                v-if="item.meta.icon" 
                                :class="[item.meta.icon]" 
                            ></i>
                            {{item.meta.title}}
                        </span>
                    </template>    
                </text-over-tip>

                <sider-bar-item v-for="v in item.children" :key="v.id" :item="v"/> 
                
            </el-submenu>


        </template>    

    </div>


</template>


<script>

    import { mapGetters } from "vuex"

    import microConfig from "@/micro/apps/config.js"
    

    export default{

        name:"sider-bar-item", 
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
        
            Item:()=>import("./Item.vue"),
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

            
            isTextOver(title,el){
                
                console.log(title,el)

            },
            NoHidden(item){

                //hidden 隐藏
                //contact 隐藏
                //hidden 隐藏

                let mode = process.env.NODE_ENV;
                

                // return  !item.hidden &&   ///是否隐藏
                //             (
                //                 (
                //                     item.env == 'development' &&  mode == 'development' ///开发环境菜单
                //                 ) ||
                //                 (
                //                     item.env != 'development'  &&  ///生产环境菜单
                //                     (item.contact || !CORE_CONFIG.IS_FILTER_MENU_BY_DATABASE) //是否过滤数据库
                //                 )
                //             ) 


                return true;
                    

            },
            openExternalPage(url){
               
                window.open(url);

            }


        }


    }


</script>


<style lang="less" scoped>

    .menu-wrapper{


        .menu-title{

            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: calc(100% - 34px);
            display: inline-block;
        }
         
        .el-menu-item{

            padding-right:20px;
            min-width:unset;
            display:block;
            box-sizing:border-box;
            width:100%;
            .menu-title{

                width:100%;
            }
        } 

        .el-submenu__title{

            .menu-title{

                width:calc(100% - 24px);
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


</style>


<style lang="less" >

    
    .menu-tooltip{

        transform: translateX(10px);
    }


    .el-submenu-tooltip{

        transform: translateX(52px);
    }


</style>