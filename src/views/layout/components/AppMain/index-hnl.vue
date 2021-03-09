<template>
    <div class="box-100 app-main" layout="hnl-layout" >
     
        <template>
            <transition name="main" mode="out-in">
                <template v-if="$route.meta.type == 'router'">
                    <keep-alive> 
                        <router-view />
                    </keep-alive>
                </template>  
                <template v-if="$route.meta.type == 'iframe'">
                    <iframe 
                        ref="iframe"
                        width="100%" height="100%" frameborder="0" scrolling="yes"
                        :src="queryIframeUrl()"
                    ></iframe>
                </template>
            </transition>
        </template>    

      
                    
    </div>
</template>


<script>

    import { mapGetters } from "vuex";
    import { getToken } from "@/utils/auth.js"
    import moment from "moment";
    import { ListenSharedIframe } from "@/share/iframe"


    export default{
 
        data(){

            return {

               activeTabName:""

            }
        
        },
        components:{

        },
        computed:{

            ...mapGetters([
               "tagsList"     
            ]),
            refreshPage(){

                return this.$store.state.tagsView.refreshPage;
            }

        },
        
        methods:{

            queryIframeUrl(){

                let { moduleName , url , id } = this.$route.meta;

                let routeParams = this.$store.state.tagsView.routeParams;

                let moduleUrl =  CORE_CONFIG[moduleName] + url ;
                

                moduleUrl.match(/\?/g) ? 
                            moduleUrl += "&x_token=" + getToken() : moduleUrl += "?x_token=" + getToken()            

      
                routeParams[id] ?  
                
                        moduleUrl.match(/\?/g)  ? 
                            
                            moduleUrl += Reflect.ownKeys(routeParams[id]).map(item => `&${item}=${routeParams[id][item]}`).join("") : 
                            moduleUrl += ("?" + Reflect.ownKeys(routeParams[id]).map(item => `${item}=${routeParams[id][item]}`).join("&"))

                        : null

                moduleUrl.match(/\?/g) ? 
                            moduleUrl += "&x_from_system=1" : moduleUrl += "?x_from_system=1"       

                return moduleUrl
            }

        },
        mounted(){

            ListenSharedIframe();

        },
        watch:{

            $route() {

                // this.queryRouterConfig();
                //console.log(this.$route)

                // if(this.$route.meta.type == "micro") {

                //     this.queryMicroPro()
                // }

                // if(this.$route.meta.type == "iframe") {

                //     this.queryIframeLoad()
                // }
            
            },
            refreshPage:{

                // handler(val,oldVal){

                //     this.renderCurPage(val);
                // }

                
            } 
        } 

    }


</script>


<style lang="less" scoped>

    .app-main[layout='hnl-layout']{

        //background-color:#f1f3f9;
       

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
                overflow:hidden;
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