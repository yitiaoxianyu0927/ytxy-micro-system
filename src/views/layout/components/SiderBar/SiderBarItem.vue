<template>

    <div v-if="!item.hidden && (item.contact || item.env == 'development' ) " class="menu-wrapper">

        <template v-if="!item.children">
            

            <!-- 本地路由 接入 -->

            <template 
                v-if="item.type == 'router'"
            >
                <!-- <el-tooltip class="item" effect="dark" :content="item.meta.title" placement="right" popper-class="menu-tooltip"> -->
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
                <!-- </el-tooltip> -->
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
            

        </template>

        <template v-else>
                <el-submenu :index="toPath(item.id)">
                    
                    <template slot="title">
                        <item  :icon="item.meta.icon" :title="item.meta.title" />
                    </template>

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
        
            Item:()=>import("./Item.vue") 
            
        },
        methods:{

            toPath(id){

               return  id.substring(0,1) == "/" ? id : "/" + id; 

            },
            isTextOver(title,el){
                
                console.log(title,el)

            }
        }


    }


</script>


<style lang="less">

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
        } 
        
    }

    .menu-tooltip{

        transform: translateX(30px);
    }

</style>