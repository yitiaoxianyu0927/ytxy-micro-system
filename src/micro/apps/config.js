
let microConfig = {
    
    "PROJECT_VUEAPP":{
        
        "DEV_BASE_URL":"/qiankun-vue",   //项目名称 开发模式访问地址 //localhost:10100/qiankun-vue/
        "PRO_BASE_URL":"/qiankun-vue",   //项目名称 生产模式访问地址 //localhost:8080/qiankun-vue/
        "BASE_ROUTE":"/vue",    ///子应用路由头
        "MICRO_NAME":"vueApp"   ///子应用webpackUMI配置
        
    },

    "PROJECT_YTXY_MIRCO":{    ///project文件夹子应用

        "DEV_BASE_URL":"",   //项目名称 开发模式访问地址 //localhost:10200/qiankun-vue/
        "PRO_BASE_URL":"/ytxy-micro-system-vue",   //项目名称 生产模式访问地址 //localhost:8080/qiankun-vue/
        "BASE_ROUTE":"/ytxy-micro-system-vue",
        "MICRO_NAME":"ytxySubApp"

    },

    "PROJECT_REACTAPP":{    ///project文件夹子应用

        "DEV_BASE_URL":"",   //项目名称 开发模式访问地址 //localhost:10200/qiankun-vue/
        "PRO_BASE_URL":"/reactApp",   //项目名称 生产模式访问地址 //localhost:8080/qiankun-vue/
        "BASE_ROUTE":"/reactApp",
        "MICRO_NAME":"reactApp"

    }

}


export default microConfig;