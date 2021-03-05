<template>
    <div class="box-100 pad-20">
        这是project文件夹下 开发环境为 localhost:10200 的 子应用MICRO页面


        <div class="subPage-font-color">子应用字体为黄色颜色</div>

        <div> 子应用获取 -- 主应用父子通信 发过来的信息 -- 
           <span style="color:#ff0000"> {{parentMsg}} </span> 
        </div>

    </div>
</template> 

<script>

    import { mapGetters } from "vuex"

    import actions from "@/share/micro/action"

    export default{

        data(){

            return{

                parentMsg:""
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

         
            actions.onGlobalStateChange((state) => { //监听全局状态
                console.log("子应用",state)
                this.parentMsg = state.parentInputMsg;
            }, true);
        }




    }



</script>


<style lang="less" scoped>

    .subPage-font-color{

        color:#fcaf41;
    }

</style>  