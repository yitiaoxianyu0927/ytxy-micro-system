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
            
            <scroll-pane ref="scrollPane" class="tags-view-wrapper">
                <router-link
                    v-for="tag in Array.from(tagsList.slice(1))"
                    :key="tag.path" 
                    ref="tag"
                    :to="tag"
                    tag="div"
                    v-if="tag.meta.type"
                    class="tag-item"
                    :class="isActive(tag.path)?'active':''"
                    @contextmenu.prevent.native="openMenu(tag,$event)">
                    {{ tag.title }}
                    <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"/>
                </router-link>
            </scroll-pane>
        </div>  
        
        <div class="func-tags">
            <el-dropdown>
                
                <i class="el-icon-arrow-down" />
                
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >
                        <div @click="closeTag">关闭当前标签页</div>
                    </el-dropdown-item>
                    <el-dropdown-item >
                        <div @click="otherCloseTag">关闭其他标签页</div>
                    </el-dropdown-item>
                    <el-dropdown-item >
                        <div @click="otherAllTag">关闭全部标签页</div>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>    
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
            closeTag(){


                let path = this.$route.path;

                let view = this.tagsList.filter(item => item.path == path)[0];
                 
                this.closeSelectedTag(view);

            },
            otherCloseTag(){

                this.$store.dispatch('otherCloseTag', {
                    path:this.$route.path
                }).then(()=>{

                    this.moveToCurrentTag()
                })

            },
            otherAllTag(){
                
                this.$store.dispatch('otherAllTag').then(() => {

                    this.$route.path == "/" + this.baseMenuId  ?  null : this.$router.push("/"+this.baseMenuId)
                   
                })

            },
            moveToCurrentTag(){

                if(this.$route.path == "/" + this.baseMenuId) return;
                
                const tags = this.$refs.tag
                this.$nextTick(() => {
                    for (const tag of tags) {
                        if (tag.to.path === this.$route.path) {
                            this.$refs.scrollPane.moveToTarget(tag.$el)
                            break
                        }
                    }
                })

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
    @endTagWidth:40px;
    
    .tag-view{

        //padding:3px 20px; 
        font-size: 0px;
        overflow: hidden;

        .tags-view-wrapper {

            background: #fff;
            height: 36px;
        }
      
        .tag-item{

            height: 36px;
            line-height: 36px;
            background: #fff;
            color: #666;
            padding: 0 15px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            // float: left;
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
            float:left;
            
        }

        .other-tags{

            width:calc(100% - @firstTagWidth - @endTagWidth);
            float:left;
            height:100%;
            overflow:hidden;
        }

        .func-tags{

            width:@endTagWidth;
            height:36px;
            float:right;
            font-size:18px;
            line-height:36px;
            text-align:center;
            border-left:1px solid  #f6f6f6;

            /deep/ .el-dropdown{

                width:100%;
                height:100%;
            }
        }

        .func-tags:hover{

            background: rgb(243,243,243);
            color:#247fff;
            border-bottom: 2px solid #247fff;

        }

        .active{

            background: rgb(243,243,243);
            color:#247fff;
            border-bottom: 2px solid #247fff;
        }

    }


</style>