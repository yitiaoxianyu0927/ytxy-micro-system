<template>
    <div class="box-100 refresh-page" @click="refreshPage">
       <i class="el-icon-refresh" :class="[refresh ? 'refresh':'']"/>
    </div>
</template>

<script>

export default{

    data(){
        
       return {
         
          //refresh

       } 

    },
    computed:{
      
        refresh(){

            return this.$store.state.tagsView.refreshPage;
        }

    },
    methods:{

        refreshPage(){

            this.$store.dispatch("refreshPage",true);   
            
        }

    }

}


</script>


<style lang="less" scoped>

    .refresh-page{
 
        i{
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%) rotate(0deg);
            font-size:20px;
            cursor:pointer;
            transition: all 2s ease-in-out ;

        }
        
        .refresh{

            animation: 1s refresh infinite linear;
        }

        @keyframes refresh{

            0%{

                transform:rotate(0deg) translate(-50%,-50%);
            }
            100%{

                transform:rotate(360deg) translate(-50%,-50%);
            }

        }
    }

</style>