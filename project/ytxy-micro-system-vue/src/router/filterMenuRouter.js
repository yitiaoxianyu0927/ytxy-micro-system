import router,{ mainRouter , iframeExtRouter } from "@/router";
//import menuConfig from "@/config/menu/index.js";
import { cloneDeep } from "lodash";
import store from "@/store"

// import startQiankun from '@/micro/index.js'

import microConfig from '@/micro/apps/config.js'


const mainRouterName = "layout";


let prefix = window.__POWERED_BY_QIANKUN__ ? "/ytxy-micro-system-vue" : "";


export function formatMenuConfig(){  /// 配置菜单路径

    const menuConfig = cloneDeep(require("@/config/menu/index.js"));

    //console.log("---- formatMenuConfig ----",menuConfig);

    let routers = [];  ///全部路由

    
    filterMenuRouterConfig(menuConfig); 

}


function renderRouterConfig(menuConfig = [],routers = [],breadcrumb = []){  ///初始化路由
    
    //console.log(menuConfig)

    for(let [i,v] of menuConfig.entries()){

        
        let option = {

            router(){

                if(v.componentUrl){

                    try{

                        const component = requireComponent(v.componentUrl);

                        if(component){

                            let _v = {...v};    delete _v.meta;

                            let meta =  Object.assign(v.meta,_v);

                            let path = prefix + ( v.id.substring(0,1) == "/" ? v.id : "/" + v.id );

                            routers.push({ path, name: v.id , component , meta   });
                        
                        }

                    } catch (e) {}

                }

                v.hasComponet = v.componentUrl ? true : false;



            },
            iframe(){

                let _v = {...v};    delete _v.meta;

                let meta =  Object.assign(v.meta,_v);

                let path = prefix + ( v.id.substring(0,1) == "/" ? v.id : "/" + v.id );

                routers.push({  ...v, path, name: v.id , component:null , meta });

            },
            micro(){

                let _v = {...v};    delete _v.meta; 

                let meta =  Object.assign(v.meta,_v);
                
                let micro_base_route = microConfig[meta.projectName].BASE_ROUTE;

                let path = micro_base_route +  toPath( v.routerPath );

                routers.push({  ...v, path , name: v.id , component:null , meta });
            },
            externalLink(){


            }
             

        }

        if(v.contact || !CORE_CONFIG.IS_FILTER_MENU_BY_DATABASE  || v.env == 'development'){
        
            option[v.type]() ;
           
            v.meta.breadcrumb = breadcrumb.concat([v.meta.title]);

            v.children ? renderRouterConfig(v.children,routers,v.meta.breadcrumb) : null;

        }
        
       

        

    } 

   

}


function addMainRouter(routers){

    
    if(routers.length > 0){

        let _routers = routers.map(item => {

            item._children = item.children || [];

            delete item.children;

            return item;  
             
        }).filter(item => item._children.length == 0)

        if(process.env.NODE_ENV == "production"){//生产环境

           _routers = _routers.filter(item => item.env != 'development' && item.meta.env != 'development');
        }

        mainRouter.children = [ ..._routers];

        mainRouter.redirect = _routers[0].path;

        store.state.tagsView.baseMenuId = _routers[0].meta.id;

        

        store.commit("SET_FISRT_TAG",_routers[0]);
        store.commit("SET_ALL_MENU_ROUTER",_routers);
    }

    
    // 把主体路由过滤出来加进去

    console.log("mainRouter",mainRouter)

    router.addRoutes([   
        mainRouter,
        { path: '*', redirect: '/404'}
    ])

    //startQiankun();
    
    
}

function filterMenuRouterConfig(menuConfig = []){

   
    let  dbRouters = store.getters.permission_dbRouters; ///数据库菜单信息
    
    let fn = (data) => {

			let tree = [];
	
			for(let [i,v] of data.entries()){


                v.children ? v.children = fn(v.children) : null;

                v.path = formatPath(v);  
                
                ///配置微前端数据
                if(v.type == "micro"){

                    let { projectName , id } = v;

                    let { DEV_BASE_URL , PRO_BASE_URL , BASE_ROUTE , MICRO_NAME } =  microConfig[projectName];

                    let microName = MICRO_NAME;
                    let entry = CORE_CONFIG[projectName] + (process.env.NODE_ENV == "production" ? PRO_BASE_URL : DEV_BASE_URL) + "/" ;
                    let container = "#" + id ;
                    let activeRule = entry + '#' + BASE_ROUTE;
                    
                    v.meta = Object.assign(v.meta,{
                        microName,entry,container,activeRule
                    })
                } 


                let contact = dbRouters.filter(item => 
                    (item.right_id.startsWith("/") ? item.right_id.substring(1) : item.right_id ) == (v.id.startsWith("/") ? v.id.substring(1) : v.id )
                )

                contact.length == 0 ? v.contact = false : v.contact = true;

                tree.push(v)

			} 

			return tree;

	}

	

    store.state.permission.routers = fn(menuConfig);



    let routersConfig = [];

    
    renderRouterConfig(menuConfig,routersConfig);


    addMainRouter(routersConfig);
 

}


function requireComponent(componentUrl){

 return     process.env.NODE_ENV == "development" ?
 
                require(`@/views${componentUrl}/index.vue`).default:
                resolve => require([`@/views${componentUrl}/index.vue`], resolve)
}


function formatPath({ id, type , projectName , routerPath }){

    return type == "micro" ? 
                microConfig[projectName].BASE_ROUTE  +  toPath( routerPath ) :  
                    toPath( id ); 

};


function toPath(path){

   return path.startsWith("/") ? path : "/" + path       
}