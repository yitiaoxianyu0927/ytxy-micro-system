<template>
    <div class="box-100 nav-bar">
        <div class="search-bar">
           <el-input v-model="menuName" placeholder="全局搜索" suffix-icon="el-icon-search" size="small"> </el-input>
        </div>
        <div class="dropdown-bar">
            <i class="icon-user"></i> 
            <el-dropdown trigger="click">
                <span class="user-name" >{{name}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-setting" >
                        <span @click="setting">设置</span>
                    </el-dropdown-item>
                    <el-dropdown-item icon="el-icon-news" >
                        <span @click="logout">登出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>    
    </div>
</template>


<script>

    import { mapGetters } from 'vuex'

    export default{
 
        data(){

            return {
             
               menuName:"",
               userName:""

            }
        
        },
        computed:{

            ...mapGetters(["name"])
        },
        methods:{

            setting(){



            },
            logout(){

                this.$store.dispatch("LogOut").then(res => {
                    location.reload();
                })
            }

        },
        mounted(){



        } 

    }


</script>


<style lang="less" scoped>

    .nav-bar{

        //box-shadow: 0px 3px 6px 0px  rgba(0, 0, 0, 0.1);
        

        .search-bar{

            position:absolute;
            width:300px;
            height:50px;
            line-height:50px;
            padding-left:20px;

            /deep/.el-input{

                input{

                    border-radius:20px;
                }

                .el-input__icon{

                    padding-right:4px;
                    color:#409eff;
                }
            }
        }


        .dropdown-bar{

            position:absolute;
            right:0px;
            height:50px;
            line-height:50px;
            padding-right:20px;
            cursor:pointer;
            font-size:16px;

            .icon-user{

                padding-right:4px;
            }

            .el-dropdown{

                height:40px;
                font-size:16px;
            }
        }


    }

</style>