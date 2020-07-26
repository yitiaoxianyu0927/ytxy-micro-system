import router,{ mainRouter } from "@/router";
//import menuConfig from "@/config/menu/index.js";
import { cloneDeep } from "lodash";
import store from "@/store"

const mainRouterName = "layout";

export function formatMenuConfig(){  /// 配置菜单路径

    const menuConfig = cloneDeep(require("@/config/menu/index.js"));

    console.log("---- formatMenuConfig ----",menuConfig);

    let routers = [];  ///全部路由

    
    filterMenuRouterConfig(menuConfig); 

}


function renderRouterConfig(menuConfig = [],routers = []){  ///初始化路由
    
    console.log(menuConfig)

    for(let [i,v] of menuConfig.entries()){

        
        let option = {

            router(){

                if(v.componentUrl){

                    try{

                        const component = requireComponent(v.componentUrl);

                        if(component){

                            let meta =  Object.assign(v.meta,v);

                            routers.push({ path:"/"+v.id , name: v.id , component , ...meta   });
                        
                        }

                    } catch (e) {}

                }

                v.hasComponet = v.componentUrl ? true : false;



            },
            iframe(){

                let meta =  Object.assign(v.meta,v);

                routers.push({  ...v, path:"/"+v.id , name: v.id , component:null , ...meta });

            },
            micro(){

                let meta =  Object.assign(v.meta,v);

                routers.push({  ...v, path:"/"+v.id , name: v.id , component:null , ...meta });
            }
             

        }

        if(v.contact  || v.env == 'development'){
        
            option[v.type]() ;

            v.children ? renderRouterConfig(v.children,routers) : null;

        }
        
       

        

    } 

    //console.log("routers",routers)

    if(routers.length > 0){

        mainRouter.children = routers;

        mainRouter.redirect = routers[0].path;

        store.state.tagsView.baseMenuId = routers[0].id;

        store.commit("SET_FISRT_TAG",routers[0]);
        store.commit("SET_ALL_MENU_ROUTER",routers);
    }

    
    // 把主体路由过滤出来加进去

    router.addRoutes([   
        mainRouter
    ])
    
    //console.log("router",router)

}


function addMainRouter(config){

    

}

function filterMenuRouterConfig(menuConfig = []){

   
    let  dbRouters = store.getters.permission_dbRouters; ///数据库菜单信息
    
    let fn = (data) => {

			let tree = [];
	
			for(let [i,v] of data.entries()){


                v.children ? v.children = fn(v.children) : null;

                let contact = dbRouters.filter(item => 
                    (item.right_id.startsWith("/") ? item.right_id.substring(1) : item.right_id ) == (v.id.startsWith("/") ? v.id.substring(1) : v.id )
                )

                contact.length == 0 ? v.contact = false : v.contact = true;

                tree.push(v)

			} 

			return tree;

	}

	

    store.state.permission.routers = fn(menuConfig);

    
    renderRouterConfig(menuConfig,[]);
 

}


function requireComponent(componentUrl){

 return     process.env.NODE_ENV == "development" ?
 
            require(`@/views${componentUrl}/index.vue`).default:
            resolve => require([`@/views${componentUrl}/index.vue`], resolve)
}