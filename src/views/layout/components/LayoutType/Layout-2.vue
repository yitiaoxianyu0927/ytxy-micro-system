<template>
    <div class="box-100 layout-container">   

        <div class="navbar-container">
            <nav-bar/>
        </div>
        

        <div 
            
            class="layout-left-container"
            :style="{
                width: isCollapse ? '64px' : '200px'
            }"    

            
        >
           
            <div class="siderbar-container">
                <sider-bar/>
            </div>

        </div>    
        <div 
            
            class="layout-right-container"
            :style="{
                marginLeft: isCollapse ? '64px' : '200px',
                width: isCollapse ? 'calc(100% - 64px)' : 'calc(100% - 200px)'
            }"    
        >
          
            
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

            SiderBar:()=>import("../SiderBar"),
            NavBar:()=>import("../NavBar"),
            TagView:()=>import("../TagView"),
            AppMain:()=>import("../AppMain"),
            
        },
        methods:{

            handleDrag(e){

                //console.log(e)  

            }

        },
        mounted(){

            
        }


    }


</script>


<style lang="less">

    @CollapseTime : 0.4s;

    .layout-container{

        .navbar-container{
            
            height:50px;
            box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.1);
            z-index: 900;
            position: relative;
            background-color:rgb(1,65,125);
            color:#fff;
            /deep/ .user-name{

                color:#fff;
            }
        }

        .layout-left-container{

            width:200px;
            height:calc(100% - 50px);
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
            height:calc(100% - 50px);
            // float:left;
            position: fixed;
            width: 100%;
            transition: all @CollapseTime ease-in-out;

            
            
            .tagview-container{
                
                height:36px;
                box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.1);
                z-index: 800;
                position: relative;
                //border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .appmain-container{
                
                height:calc(100% - 30px);
            }

        }
          
    }

  

</style>