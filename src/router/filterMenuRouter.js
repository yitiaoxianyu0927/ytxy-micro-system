import router,{ mainRouter } from "@/router";
//import menuConfig from "@/config/menu/index.js";
import store from "@/store"

const mainRouterName = "layout";

export function formatMenuConfig(){  /// 配置菜单路径

    const menuConfig = require("@/config/menu/index.js")

    console.log("---- formatMenuConfig ----",menuConfig);

    let routers = [];  ///全部路由

    renderRouterConfig(menuConfig,routers);
    
    filterMenuRouterConfig(menuConfig); 
}


function renderRouterConfig(menuConfig = [] , routers = []){

    for(let [i,v] of menuConfig.entries()){
        
        if(v.type == "router"){


            if(v.componentUrl){

                try{

                    const component = requireComponent(v.componentUrl);

                    if(component){

                        let meta =  Object.assign(v.meta,v);

                        routers.push({ path:"/"+v.id , name: v.id , component , ...meta   });
                    
                    }

                } catch (e) {}

            }

            if(v.children){

                renderRouterConfig(v.children,routers);
            }

        }else if(v.type == "iframe"){

            let meta =  Object.assign(v.meta,v);

            routers.push({  ...v, path:"/"+v.id , name: v.id , component:null , ...meta });
        
        }else if(v.type == "micro"){

            let meta =  Object.assign(v.meta,v);

            routers.push({  ...v, path:"/"+v.id , name: v.id , component:null , ...meta });
        }

    } 

    console.log("routers",routers)

    if(routers.length > 0){

        mainRouter.children = routers;

        mainRouter.redirect = routers[0].path;

        store.state.tagsView.baseMenuId = routers[0].id;

        store.commit("SET_FISRT_TAG",routers[0]);
    }

    
    // 把主体路由过滤出来加进去

    router.addRoutes([   
        mainRouter
    ])
    
    console.log("router",router)

}


function addMainRouter(config){

    

}

function filterMenuRouterConfig(menuConfig = []){

    store.state.permission.routers = menuConfig;

}


function requireComponent(componentUrl){

    return require(`@/views${componentUrl}/index.vue`).default;
}