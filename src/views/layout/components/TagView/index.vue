<template>
    <div class="box-100 tag-view">
        <router-link

            class="icon-home3 tag-item tag-first-item" 
            :to="'/'+baseMenuId"
            :class="isActive('/'+baseMenuId)?'active':''"
            tag="div"
            @click="selectTag"

        >
        </router-link>

        <div class="other-tags">
            
            <!-- <scroll-pane ref="scrollPane" class="tags-view-wrapper"> -->
                <router-link
                    v-for="tag in Array.from(tagsList.slice(1))"
                    :key="tag.path" 
                    ref="tag"
                    :to="tag"
                    tag="div"
                    v-if="!tag.type"
                    class="tag-item"
                    :class="isActive(tag.path)?'active':''"
                    @contextmenu.prevent.native="openMenu(tag,$event)">
                    {{ tag.title }}
                    <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"/>
                </router-link>
            <!-- </scroll-pane> -->
        </div>  
        
    </div>
</template>


<script>

    import { mapGetters } from "vuex";

    export default{
 
        data(){

            return {



            }
        
        },
        computed:{

            ...mapGetters([
                "tagsList",
                "baseMenuId"
            ])
        },
        components:{

            scrollPane:()=>import("@/components/scrollPane")
        },
        methods:{

            generateRoute() { //获取当前路由

                if (this.$route.path) {
                    return this.$route
                }
                return false
            
            },
            isActive(path) {
                return path === this.$route.path
            },
            selectTag(){

                

            },
            addTag(){

                const route = this.generateRoute();

                if (!route) {
                    return false
                }
            
                this.$store.dispatch('addTag', route)

            },
            openMenu(){


            },
            closeSelectedTag(view){

                this.$store.dispatch('closeTag', view).then((closeAfterPath) => {

                    this.$router.push(closeAfterPath)
                   
                })


            },
            moveToCurrentTag(){


            }

        },
        mounted(){

            this.addTag();

        },
        watch: {

            $route() {
         
                this.addTag();
                this.moveToCurrentTag();
            
            } 
        }

    }


</script>


<style lang="less" scoped>

    @firstTagWidth:40px;

    .tag-view{

       //padding:3px 20px; 
       font-size: 0px;
       overflow: hidden;
      
        .tag-item{

            height: 36px;
            line-height: 36px;
            background: #fff;
            color: #666;
            padding: 0 15px;
            cursor: pointer;
            display: block;
            float: left;
            font-size:14px;
            //margin-right: 10px;
            //border:1px solid #d8dce5;
            .el-icon-close{

                font-size: 10px;
            }

            
        }

        .tag-first-item{
           
            width: @firstTagWidth;
            text-align: center;
            padding: 0px !important;
            font-size:14px;
        }

        .other-tags{

            width:calc(100% - @firstTagWidth);
        }

        .active{

            background: rgb(243,243,243);
            color:#247fff;
            border-bottom: 2px solid #247fff;
        }

    }


</style>