<template>

    <div v-if="!item.hidden" class="menu-wrapper">

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
                            <span slot="title" class="menu-title">{{item.meta.title}}</span>
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
                        <span slot="title" class="menu-title">{{item.meta.title}}</span>
                    </el-menu-item>
                </router-link>
                
                <!-- <el-tooltip class="item" effect="dark" :content="item.meta.title" placement="right" popper-class="menu-tooltip"> -->
                    <!-- <el-menu-item :index="toPath(item.id)">
                        <i 
                            v-if="item.meta.icon" 
                            :class="[item.meta.icon]" 
                        ></i>
                        <span slot="title" class="menu-title">{{item.meta.title}}</span>
                    </el-menu-item> -->
                <!-- </el-tooltip> -->
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
                        <span slot="title" class="menu-title">{{item.meta.title}}</span>
                    </el-menu-item>
                </router-link>
                
                <!-- <el-tooltip class="item" effect="dark" :content="item.meta.title" placement="right" popper-class="menu-tooltip">
                    <el-menu-item :index="toPath(item.id)">
                        <i 
                            v-if="item.meta.icon" 
                            :class="[item.meta.icon]" 
                        ></i>
                        <span slot="title" class="menu-title">{{item.meta.title}}</span>
                    </el-menu-item>
                </el-tooltip> -->
            </template>
            

        </template>

        <template v-else>
            <!-- <el-tooltip class="item" effect="dark" :content="item.meta.title" placement="right" popper-class="menu-tooltip"> -->
                <el-submenu :index="toPath(item.id)">
                    
                    <template slot="title">
                        <i 
                            v-if="item.meta.icon" 
                            :class="[item.meta.icon]" 
                        ></i>
                        <span class="menu-title">{{item.meta.title}}</span>
                    </template>

                    <sider-bar-item v-for="v in item.children" :key="v.id" :item="v"/> 
                    
                </el-submenu>
            <!-- </el-tooltip> -->
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
        methods:{

            toPath(id){

               return  id.substring(0,1) == "/" ? id : "/" + id; 

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

        
    }

    .menu-tooltip{

        transform: translateX(10px);
    }

</style>