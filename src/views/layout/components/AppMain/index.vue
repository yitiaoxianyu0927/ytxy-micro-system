<template>
    <div class="box-100 app-main">

        <el-tabs v-model="activeTabName"  class="appMain-tab">
            <el-tab-pane 
                v-for="item in tagsList"
                :key="item.path"
                :label="item.meta.title" 
                :name="item.path"
                
            >
               
                <template v-if="!refreshPage || ($route.path != item.path)">
                    <transition name="main" mode="out-in">
                        <template v-if="item.meta.type == 'router'">
                            <keep-alive> 
                                <router-view />
                            </keep-alive>
                        </template>  
                    </transition>
                    
                    <transition name="main" mode="out-in">
                        <template v-if="item.meta.type == 'iframe'">
                            <iframe 
                                ref="iframe"
                                :src="queryIframeUrl(item)"
                                v-show="activeTabName == item.path"
                            ></iframe>
                        </template>
                    </transition>

                    <transition name="main" mode="out-in">
                        <template v-if="item.meta.type == 'micro'">
                            <!-- <div :id="item.meta.id" class="box-100 pad-20">
                            <h3>微前端施工中。。。</h3>
                            </div> -->
                            <div id="micro" class="box-100 pad-20">
                                <h3>微前端施工中。。。</h3>
                            </div> 
                        </template>
                    </transition>
                </template>

            </el-tab-pane>
        </el-tabs>
          

        <!-- <div id="micro" class="box-100 pad-20">
            <h3>微前端施工中。。。</h3>
        </div>  -->
        

        
    </div>
</template>


<script>

    import { mapGetters } from "vuex";
    import { getToken } from "@/utils/auth.js"
     // 微前端
    //import startQiankun from '@/micro/index.js'
    import { loadMicroApp } from 'qiankun';

    export default{
 
        data(){

            return {

               activeTabName:""

            }
        
        },
        components:{

            home:()=>import("@/views/home")
        },
        computed:{

            ...mapGetters([
               "tagsList"     
            ]),
            refreshPage(){

               console.log(12123,this.$store)

                return this.$store.state.tagsView.refreshPage;
            }

        },
        
        methods:{


            queryIframeUrl(item){

                let { moduleName , url } = item.meta;

                let moduleUrl = CORE_CONFIG[moduleName] + url + "?x_token=" + getToken();


                return moduleUrl
            },

            queryRouterConfig(){

                this.activeTabName = this.$route.path
            },

            queryMicroPro(){


                setTimeout(()=>{

                    this.$nextTick(() => {

                        console.log(document.querySelector("#micro"))

                        this.microApp = loadMicroApp(
                            { 
                                name: 'doc', 
                                entry: '//localhost:10200', 
                                container: '#micro', 
                                props: { name: 'qiankun' } 
                            
                            },
                        );

                        

                    })

                },10000)
            },

            queryIframeLoad(){


            },
            renderCurPage(val){

                if(val){

                    this.$nextTick(()=>{

                        this.$store.dispatch("refreshPage",false);
                    })
                }
            }

        },
        mounted(){

            this.queryRouterConfig();

            // setTimeout(() => {
            //     this.$nextTick(()=>{
            //          startQiankun();
            //     }) 
            // }, 1000);

            //this.queryMicroPro()

        },
        update(){

            //this.microApp.update({ name: 'kuitos' });
        },
        watch:{

            $route() {
         
                this.queryRouterConfig();


                // if(this.$route.meta.type == "micro") {

                //     this.queryMicroPro()
                // }

                if(this.$route.meta.type == "iframe") {

                    this.queryIframeLoad()
                }
            
            },
            refreshPage:{

                handler(val,oldVal){

                    this.renderCurPage(val);
                }

                
            } 
        } 

    }


</script>


<style lang="less" scoped>

    .app-main{

        //background-color:#f1f3f9;
        overflow:auto;

        /deep/ .appMain-tab{

            width: 100%;
            height: 100%;
            position: relative;

            
            &>.el-tabs__header{

               display: none;

            }

            &>.el-tabs__content{

                width: 100%;
                height: 100%;
                position: relative;

                .el-tab-pane{
               
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: auto;
                }

            }

            

            iframe{

                width:100%;
                height: 100%;
                overflow: auto;
                border: none;
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