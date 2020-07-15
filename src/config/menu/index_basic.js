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
        title:"基础设置",
        meta:{ icon:"el-icon-location",title:"基础设置",cache:true },
        children:[{

            type:"router",
            id:"menuManagement",
            env:"development",
            title:"菜单管理",
            componentUrl:"/basicSetting/menuManagement",
            meta:{ title:"菜单管理",cache:true },
            
        },{

            type:"router",
            id:"customSetting",
            env:"development",
            componentUrl:"/basicSetting/customSetting",
            title:"自定义设置",
            meta:{ title:"自定义设置",cache:true },

        }]
    },
    {
        type:"iframe",  ///类型iframe
        id:"faultOriginReason",
        moduleName:"TCOAMP_BDM",
        url:"/page/fault/faultOriginReason/index.html",
        title:"跨专业故障场景分析",
        meta:{ icon:"el-icon-s-flag",title:"跨专业故障场景分析",cache:true },
    },
    {
     
        type:"micro",  ///类型微前端
        id:"sotn",
        projectName:"SOTN",
        router:"",
        title:"微前端集成",
        meta:{ icon:"el-icon-s-platform",title:"微前端集成",cache:true },
    },

    
]



module.exports = meunConfig;

