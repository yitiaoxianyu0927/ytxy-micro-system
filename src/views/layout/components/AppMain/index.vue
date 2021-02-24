<template>
    <div class="box-100 app-main">

        <el-tabs v-model="activeTabName"  class="appMain-tab">
            <el-tab-pane 
                v-for="item in tagsList"
                :key="item.path"
                :label="item.meta.title" 
                :name="item.path"
                
            >
                <div :class="['tab-'+item.meta.type+'-panel']">
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
                            <template v-if="item.meta.type == 'iframe_ext'">
                                <iframe 
                                    ref="iframe"
                                    :src="item.meta.url"
                                    v-show="activeTabName == item.path"
                                ></iframe>
                            </template>
                        </transition>

                        <transition name="main" mode="out-in">
                            <template v-if="item.meta.type == 'micro'">
                                <div :id="item.meta.id" class="box-100 pad-20">
                                    <!-- <h3>微前端施工中。。。</h3> -->
                                </div>
                                <!-- <div id="micro" class="box-100 pad-20">
                                    <h3>微前端施工中。。。</h3>
                                </div>  -->
                            </template>
                        </transition>
                    </template>
                </div>

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
    import { getUrl , contractUrl } from "@/utils/common.js"
     // 微前端
    //import startQiankun from '@/micro/index.js'
    import { loadMicroApp } from 'qiankun';

    import { ListenSharedIframe } from "@/share/iframe"

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

                return this.$store.state.tagsView.refreshPage;
            },
            isMicro(){

                let isMicro = getUrl("fromSystem") ? true : false;  ///父级

                return isMicro;
            }

        },
        
        methods:{


            queryIframeUrl(item){

                let { moduleName , url } = item.meta;

                let moduleUrl = CORE_CONFIG[moduleName] + url ;

                let { projectName } = this.$store.state.projectConfig;

                moduleUrl = contractUrl(moduleUrl,{
                    fromSystem: projectName || true,
                    x_token:getToken()
                })

                return moduleUrl
            },

            queryRouterConfig(){

                this.activeTabName = this.$route.path
            },

            queryMicroPro(){

                if(this.$route.meta.type != "micro") return;
                 
                let microOption = this.tagsList.filter(item => this.activeTabName == item.path)[0];

                let { microName,entry,container,activeRule } = microOption.meta;

                loadMicroApp(
                    { 
                        name:microName,
                        entry,
                        container,
                        activeRule,
                        props: { name: 'qiankun' } 
                    
                    },
                    {
                        //sandbox:{ strictStyleIsolation: true }
                    }
                );

                // loadMicroApp(
                //     { 
                //         name:"vueApp",
                //         entry:"//localhost:10100/qiankun-vue/",
                //         container: '#micro',
                //         activeRule: '//localhost:10100/qiankun-vue/#/vue',
                //         props: { name: 'qiankun' } 
                    
                //     },
                //     {
                //         sandbox:{ strictStyleIsolation: true }
                //     }
                // );
               
                

            },

            queryIframeLoad(){


            },
            renderCurPage(val){

                if(val){

                    this.$nextTick(()=>{

                        this.$store.dispatch("refreshPage",false);
                        
                        if(this.$route.meta.type == "micro") {

                            this.queryMicroPro()
                        }
                    
                    })
                    
                }
            },

            

        },
        mounted(){

            ListenSharedIframe();

        },
        update(){

            //this.microApp.update({ name: 'kuitos' });
        },
        watch:{

            $route: {

                handler(){
         
                    this.queryRouterConfig();


                    if(this.$route.meta.type == "micro") {

                        this.queryMicroPro()
                    }

                    if(this.$route.meta.type == "iframe") {

                        this.queryIframeLoad()
                    }
                    
                },
                immediate:true
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
              
            .tab-router-panel,.tab-router-micro{

                width:100%;
                height: 100%;
                position:relative;
                overflow:auto;

            }

            .tab-iframe-panel,.tab-iframe_ext-panel{

                width:100%;
                height: 100%;
                position:relative;

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