<template>
    <div class="box-100 search-bar">
        <el-autocomplete
            v-model="menuName" 
            placeholder="全局搜索" 
            :fetch-suggestions="querySearchAsync"
            suffix-icon="el-icon-search" 
            size="small"
            @select="handleSelect"
            value-key="name"
        > 
            <template slot-scope="{ item }">
                <!-- <router-link :to="item.path" tag="div" >{{ item.name }}</router-link> -->
                <span>{{item.name}}</span>
            </template>
        </el-autocomplete>
  
    
    </div>
</template>

<script>

import { mapGetters } from "vuex"

export default{
    
    data(){

        return {
           
           menuName:""

        }
    
    },
    computed:{

        ...mapGetters([
            "allMenuRouter"
        ]),
        menuList(){

            return this.allMenuRouter.map(item => {

                let arr = {};
                
                arr.name = item.title || item.meta.title;

                arr.value = item.path;

                return arr

            })
        }
    },
    methods:{
       
        handleSelect(item){

            let path = item.value;

            this.$router.push({path});
        },
        querySearchAsync(queryString, cb){

           let menuList = this.menuList;
          
           let result = menuList.filter(item => item.name.indexOf(queryString) >= 0)

           cb(result);

        }
       

    },
    
    mounted(){

       console.log(this.allMenuRouter) 

    }
}


</script>


<style lang="less">

    .search-bar{

        position:absolute;
        width:300px;
        height:50px;
        line-height:50px;
        padding-left:20px;

        /deep/.el-input{

            input{

                border-radius:20px;
                width:260px;
            }

            .el-input__icon{

                padding-right:4px;
                color:#409eff;
            }
        }
    }

</style>