import store from "@/store";

import router,{ mainRouter } from "@/router";


export function ListenSharedIframe(){

    window.addEventListener('message',e => {

        if(e.data.type == "iframe"){
        
            console.log("子页面PostMessage请求",e.data)

            let { id , title , url } = e.data;

            let iframe_ext_router = {
               
                id:"iframe_ext_"+id,title,url,type:"iframe_ext",
                path:"/iframe_ext_"+id,
                meta:{
                    id:"iframe_ext_"+id,title,url,type:"iframe_ext",
                }

            }

            let allMenuRouter = store.state.permission.allMenuRouter;

            let children = [
                ...allMenuRouter,iframe_ext_router
            ]

            mainRouter.children = children;

            store.commit("SET_ALL_MENU_ROUTER",children);

            router.addRoutes([   
                mainRouter
            ])

            store.dispatch("addExtTag",{...iframe_ext_router
            }).then(({path}) => {

                router.push({path})
            })
        }

    },false)
}


