<template>
    <div class="box-100 pad-20">
        微前端父子应用通信页面

        <el-divider content-position="left">父级输入信息</el-divider>

        <el-row :gutter="10">
            <el-col :span="6">
                <el-input v-model="parentInputMsg" placeholder="输入信息" clearable></el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" @click="sendMessageToChild">发送到子应用MICRO_VUE菜单</el-button>
            </el-col>
        </el-row>

    </div>
</template>


<script>

    import actions from "@/share/micro/action"

    export default{

        data(){

            return{

                parentInputMsg:""

            }

        },
        methods:{

            sendMessageToChild(){

                actions.sendMessageToChild({
                    parentInputMsg:this.parentInputMsg
                })
                
            }


        },
        mounted(){



        }

      

    

    }



</script>