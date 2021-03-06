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

        },{

            type:"router",
            id:"componentsGroup",
            env:"development",
            componentUrl:"/basicSetting/componentsGroup",
            meta:{ title:"组件库",cache:true },

        },
        { 
            uid: "ee761905-5c2b-426a-8a84-f07392420a1a", 
            type: "router", 
            id: "displayPage", 
            env: "development", 
            icon: "", 
            title: "展示页面", 
            meta: { 
                icon: "", 
                title: "展示页面" 
            }, 
            url: null, 
            routerPath: null, 
            children: [ 
                { 
                    uid: "e6198330-0d93-42bf-8d53-a8c077dc6a99", 
                    type: "router", 
                    id: "displayTablePage", 
                    env: "development", 
                    icon: "", 
                    title: "展示表格", 
                    meta: { 
                        icon: "", 
                        title: "展示表格" 
                    }, 
                    componentUrl: "/basicSetting/displayPage/displayTablePage", 
                    url: null, 
                    routerPath: null, 
                    children: [], 
                    hidden: false 
                } 
            ], 
            hidden: false, 
            parentId: "basicSetting" 
        }    
        ]
    },
    {
        type:"iframe",  ///类型iframe
        id:"subPage",
        moduleName:"FRAME_ANY",
        url:"/static/page/subPage",
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
        routerPath:"doc",
        meta:{ icon:"el-icon-s-platform",title:"微前端集成",cache:true },
    },
    {
        uid: "427fe8f5-0501-43a2-b67f-ef8ba7d20c53",
        type: "router",
        id: "micro",
        env: "",
        icon: "icon-make-group",
        title: "子应用",
        meta: {
            icon: "icon-make-group",
            title: "子应用"
        },
        url: null,
        routerPath: null,
        projectName: "",
        children: [
        { 
            uid: "d4a9d1cf-6a63-4278-836d-d3e448768b91", 
            type: "router", 
            id: "shared", 
            env: "", 
            icon: "", 
            title: "主应用父子通信", 
            meta: { 
                icon: "", 
                title: "主应用父子通信" 
            }, 
            componentUrl: "/subApp/shared", 
            url: null, 
            routerPath: null, 
            children: [], 
            hidden: false 
            
        },
        {
            uid: "50ccf83d-4343-4412-ba26-bd54cd9ba736",
            type: "iframe",
            id: "frame_vue",
            env: "development",
            icon: "",
            title: "FRAME_VUE",
            meta: {
                icon: "",
                title: "FRAME_VUE"
            },
            componentUrl: null,
            url: "/subApp_frame_vue",
            moduleName: "FRAME_YTXY_MIRCO",
            routerPath: null,
            projectName: "",
            children: [],
            hidden: false
        }
        ,
        {
            uid: "adc10fb8-b485-48e6-84d9-a8fc15e7ebd9",
            type: "micro",
            id: "micro_vue",
            env: "development",
            icon: "",
            title: "MICRO_VUE",
            meta: {
            icon: "",
            title: "MICRO_VUE"
            },
            componentUrl: null,
            url: null,
            routerPath: "subApp_micro_vue",
            projectName: "PROJECT_YTXY_MIRCO",
            children: [],
            hidden: false,
            parentId: "micro"
        },
        { 
            uid: "d52d420e-f2e0-43a7-8fa5-e817fc2da49c", 
            type: "micro", 
            id: "micro_react", 
            env: "", 
            icon: "", 
            title: "MICRO_REACT", 
            meta: { 
                "icon": "", 
                "title": "MICRO_REACT" 
            }, 
            componentUrl: null, 
            url: null, 
            routerPath: "home", 
            projectName: "PROJECT_REACTAPP", 
            children: [], 
            hidden: false 
             
        }  
        ],
        hidden: false,
        parentId: ""
    }
    
]



module.exports = meunConfig;

