const meunConfig = [

    {
        type:"router",
        id:"home",
        env:"development",
        componentUrl:"/home",
        meta:{ icon:"el-icon-menu",title:"工作台",cache:true }
    },
    {
        type:"router",
        id:"basicSetting",
        env:"development",
        meta:{ icon:"el-icon-location",title:"基础设置",cache:true },
        children:[{

            type:"router",
            id:"menuManagement",
            env:"development",
            componentUrl:"/basicSetting/menuManagement",
            meta:{ title:"菜单管理",cache:true },
            
        },{

            type:"router",
            id:"customSetting",
            env:"development",
            componentUrl:"/basicSetting/customSetting",
            meta:{ title:"自定义设置",cache:true },

        },{

            type:"router",
            id:"iconsGroup",
            env:"development",
            componentUrl:"/basicSetting/iconsGroup",
            meta:{ title:"图标库",cache:true },

        }]
    },
    {
        type:"iframe",  ///类型iframe
        id:"faultOriginReason",
        moduleName:"FRAME_HTTP",
        url:"/page/single-spa-vue/index.html",
        meta:{ icon:"el-icon-s-flag",title:"内嵌页面",cache:true },
    },
    {
        type:"externalLink",  ///类型iframe
        id:"externalLink",
        url:"https://www.baidu.com/",
        meta:{ icon:"el-icon-link",title:"外链页面",cache:true },
    },
    {
     
        type:"micro",  ///类型微前端
        //id:"micro",
        id:"doc",
        env:"development",
        projectName:"PROJECT_VUEAPP",
        routerPath:"",
        meta:{ icon:"el-icon-s-platform",title:"微前端集成",cache:true },
    },

    
]



module.exports = meunConfig;

