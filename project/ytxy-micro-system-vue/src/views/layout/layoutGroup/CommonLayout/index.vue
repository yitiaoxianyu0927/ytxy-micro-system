<template>
    <div class="box-100 layout-container">   
   
        <div 
            
            class="layout-left-container"
            :style="{
                width: isCollapse ? '64px' :
                    windowSize == '1366' ? '200px' : '260px'
            }"    

            
        >
           
            <div class="siderbar-container">
                <sider-bar/>
            </div>

        </div>    
        <div 
            
            class="layout-right-container"
            :style="{
                marginLeft: isCollapse ? '64px' : 
                    windowSize == '1366' ? '200px' : '260px',

                width: isCollapse ? 'calc(100% - 64px)' : 
                     windowSize == '1366' ? 'calc(100% - 200px)' : 'calc(100% - 260px)'
            }"    
        >
          
            <div class="navbar-container">
                <nav-bar/>
            </div>
            <div class="tagview-container">
                <tag-view/>
            </div>
            <div class="appmain-container">
                <app-main/>
            </div>
            
        </div>    
    </div>
</template>


<script>

    import { mapGetters } from "vuex" 
   
    export default{

        data(){

            return {

                windowSize:"1366"

            } 

        },
        computed:{

            ...mapGetters([
                "sidebar"
            ]),
            isCollapse(){
                 
                return !this.sidebar.opened  
            }
        },
        components:{

            SiderBar:()=>import("../../components/SiderBar"),
            NavBar:()=>import("../../components/NavBar"),
            TagView:()=>import("../../components/TagView"),
            AppMain:()=>import("../../components/AppMain"),
            
        },
        methods:{

            handleDrag(e){

                //console.log(e)  

            },
            windowSizeChange(){

                let windowSize = document.body.clientWidth;
            
                this.windowSize  = windowSize >= 1800 ? 1920 : 1366;
            }

        },
        mounted(){

            this.windowSizeChange();

            window.addEventListener("resize",()=>{

                this.windowSizeChange();
                
            })
        }


    }


</script>


<style lang="less">

    @CollapseTime : 0.4s;

    .layout-container{

        .layout-left-container{

            //width:200px;
            height:100%;
            // float:left;
            position: fixed;
            transition: all @CollapseTime ease-in-out;
            
            z-index: 1000;

            .siderbar-container{

                height:100%;

            }

        }

        .layout-right-container{

            // width:calc(100% - 200px);
            height:100%;
            // float:left;
            position: fixed;
            width: 100%;
            transition: all @CollapseTime ease-in-out;

            .navbar-container{
            
                height:50px;
                box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.1);
                z-index: 900;
                position: relative;
            }
            
            .tagview-container{
                
                height:36px;
                box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.1);
                z-index: 800;
                position: relative;
                //border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .appmain-container{
                
                height:calc(100% - 80px);
            }

        }
          
    }

  

</style>