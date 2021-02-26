<template>
    <div class="theme-panel  ">
        <div class="title">
            主题选择 <i class="el-icon-close" @click="close"></i>
        </div>
        <div class="theme-list">
            <div 
                class="theme-list-item"
                v-for="item in themeList"    
                @click="queryTheme(item.theme)"
            >
                <div 
                    class="theme-pic" 
                    :style="{'background-image':'url('+require('@/assets/image/theme/'+item.theme+'.png')+')'}"
                ></div>
                <div class="theme-name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>


<script>
   
    export default{

        data(){

            return{

                themeList:[{
                    theme:"normal",
                    name:"默认主题"
                },{
                    theme:"dark",
                    name:"暗黑主题"
                }]

            }
        },
        methods:{

            queryTheme(type){

               
               let theme =  require(`@/assets/theme/${type}/index.less`);
               
               this.changeThemeType(type);

            },
            changeThemeType(type = "normal"){

              document.getElementById("app").setAttribute("theme",type)

            },
            close(){

                this.$emit("close")
            }
            

        },
        mounted(){
             
            //this.addThemeType();

        }

    }

</script>


<style lang="less" scoped>
     
    .theme-panel{

        position:fixed;
        width:200px;
        height:100%;
        top:86px;
        right:0px;
        background:#fff;
        box-shadow: -1px 10px 6px 0px rgba(0, 0, 0, 0.1);
        padding:10px 20px;
        .title{

            height:40px;
            line-height:40px;
            border-bottom:1px solid #707070;
            color:rgba(0, 0, 0, 0.8);
            i{

                float:right;
                height:40px;
                line-height:40px;
                cursor:pointer;
            }
        }

        .theme-list{

            height:calc(100% - 50px);
            margin-top:10px;
            .theme-list-item{
                 
                float:left; 
                width:calc(50% - 10px);
                margin-top:10px;
                cursor:pointer;
                .theme-pic{

                    width:100%;
                    height:50px;
                    //background-color:#000;
                    background-size:100% 100%;
                    background-repeat:no-repeat; 
                    
                    border-radius:4px;
                    margin-bottom:6px;
                }

                .theme-name{

                    text-align:center;
                    color: #666666;
                }
            }
            .theme-list-item:nth-child(2){

                margin-left:20px;
            }
        }

        
    }

    

</style>