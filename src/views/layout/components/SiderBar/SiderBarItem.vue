<template>

    <div v-if="NoHidden(item)" class="menu-wrapper">

        <template v-if="!item.children || item.children == 0">
            

            
            <text-over-tip :title="item.meta.title" :domName="'.menu-title'" :popper-class="'menu-tooltip'">
               
                <!-- 本地路由 接入 -->
                <template 
                    v-if="item.type == 'router'"
                >
                    <router-link  :to="toPath(item.id)" tag="div">
                        <el-menu-item :index="toPath(item.id)">
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
                    <router-link  :to="toPath(item.id)" tag="div">

                        
                            <el-menu-item :index="toPath(item.id)">
                                <i 
                                    v-if="item.meta.icon" 
                                    :class="[item.meta.icon]" 
                                ></i>
                                <span slot="title" :title="item.meta.title" class="menu-title">{{item.meta.title}}</span>
                                <!-- <item  :icon="item.meta.icon" :title="item.meta.title" /> -->
                            </el-menu-item>

                    </router-link>
            
                </template>


                <!-- 微前端  接入-->

                <template 
                    v-if="item.type == 'micro'"
                >
                
                    <router-link  :to="toPath(item.id)" tag="div">
                        <el-menu-item :index="toPath(item.id)">
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

            <el-submenu :index="toPath(item.id)">
                
                <text-over-tip slot="title" :title="item.meta.title" :domName="'.menu-title'" :popperClass="'el-submenu-tooltip'">
                <!-- <item  :icon="item.meta.icon" :title="item.meta.title" /> -->
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
                
                 
                return !item.hidden && ((item.contact || !CORE_CONFIG.IS_FILTER_MENU_BY_DATABASE) || ( item.env == 'development' && mode == 'development') ); 
                
                  

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
            width: calc(100% - 24px);
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