<template>
    <div class="box-100 nav-bar">

        <!-- <div class="hamburger">
            <Hamburger/>
        </div> -->
        <div class="refreshPage-container">
           <refresh-page/>
        </div>
        <div class="searchbar-container">
           <search-bar/>
        </div>
        <!-- <div class="guide-container">
           <guide/>
        </div> -->
        <div class="dropdown-bar">
            <i class="icon-user"></i> 
            <el-dropdown trigger="click">
                <span class="user-name" >{{name}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-if="mode == 'development'">
                        <div @click="menuManagement">
                            <i class="icon-file-text2" />菜单管理
                        </div>
                    </el-dropdown-item>
                    
                    <el-dropdown-item >
                        <div @click="logout">
                            <i class="el-icon-news"></i>登出
                        </div>
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

            ...mapGetters(["name"]),
            mode(){

                return process.env.NODE_ENV;
            },
            layoutType(){
                
                return this.$store.state.app.layoutType
            }
        },
        components:{

            SearchBar:()=>import("../SearchBar"),
            RefreshPage:()=>import("../RefreshPage"),
            Guide:()=>import("../Guide"),
            Hamburger:()=>import("../Hamburger"),
        },
        methods:{

            setting(){



            },
            logout(){

                this.$store.dispatch("LogOut").then(res => {

                    this.$router.push("/login");
                    location.reload();
                })
            },
            menuManagement(){

                this.$router.push({path:"/menuManagement"})
            }

        },
        mounted(){


        } 

    }


</script>


<style lang="less" scoped>

    .nav-bar{

        //box-shadow: 0px 3px 6px 0px  rgba(0, 0, 0, 0.1);
        
        .refreshPage-container{

            width:40px;
            height:50px;
            float:left;
            margin:0 10px;
        }

        .searchbar-container{

            width:300px;
            height:50px;
            float:left;

        }

        .guide-container{

            width:40px;
            height:50px;
            position:absolute;
            right:140px;
        }


        .dropdown-bar{

            position:absolute;
            top:0px;
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