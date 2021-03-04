<template>
    <div class="box-100 pad-20">
        这是project文件夹下 开发环境为 localhost:10200 的 子应用MICRO页面


        <div class="subPage-font-color">子应用字体为黄色颜色</div>

        <div> 主应用侧边栏是否展开 {{sidebar.opened}} </div>

    </div>
</template> 

<script>

    import { mapGetters } from "vuex"

    import actions from "@/share/micro/action"

    export default{

        data(){

            return{


            }


        },
        computed:{

            ...mapGetters(
                [
                    "permission_routers",
                    "baseMenuId",
                    "sidebar"
                ]
            ),
            
        },
        mounted(){

            console.log(this.$store)

            actions.onGlobalStateChange((state) => { //监听全局状态
                console.log("子应用",state)
            }, true);
        }




    }



</script>


<style lang="less" scoped>

    .subPage-font-color{

        color:#fcaf41;
    }

</style>  