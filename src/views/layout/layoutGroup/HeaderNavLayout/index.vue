<template>
    <div ref='layout-container'  class="box-100 layout-container"  layout="hnl-layout">
        <div 
            class="navbar-container"
            :style="{
                //height:isHome ? '140px':'50px'
            }"
        >
            <NavBar/>
        </div>
        <transition name="main" mode="out-in">
            <div class="content"  v-if="!isHome">
                <div  class="breadcrumb-container" >
                    <breadcrumb class="breadcrumb-container" />
                </div>
                <div  class="appview-container" >
                    <app-main/>
                </div>
            </div>
            <div class="home-content" v-else>
                <app-main/>
            </div>
        </transition>
    </div>
</template>


<script>

    export default{

        data(){

            return {


            }
        },
        computed:{

            isHome(){

                return this.$route.path == "/home"
            }
        },
        components:{

            NavBar:()=>import("../../components/NavBar/index-hnl.vue"),
            AppMain:()=>import("../../components/AppMain/index-hnl.vue"),
            Breadcrumb:()=>import("../../components/Breadcrumb"),
        }
    }

</script>


<style lang="less" scoped>

    .layout-container[layout="hnl-layout"]{

        overflow:auto;
        background-color:rgb(232,235,240);

        .navbar-container{
            height:50px;
        }

        .content{

            height:calc(100% - 50px);
            background-color:rgb(239,244,248);
            padding:0 20px;
            padding-bottom:20px;
            overflow:auto;

            .breadcrumb-container{
                height:40px;
            }

            .appview-container{

                height:calc(100% - 40px);
                background-color:#fff;
                border-radius:4px;

            }
        }

        .home-content{

            position:absolute;
            top:60px;
            width:100%;
            height:1000px;

            /deep/ .app-main{

                overflow:unset;
            }
            
        }
    }

     .main-enter,.main-leave-to {
        opacity: 0;
        transform: translateX(50px)
    }
    .main-enter-active,.main-leave-active {
        transition: all 0.5s ease
    }

</style>