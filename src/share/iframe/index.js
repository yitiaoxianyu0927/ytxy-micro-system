import store from "@/store";

import router,{ mainRouter } from "@/router";


export function ListenSharedIframe(){

    // window.parent.postMessage({

    //         type:"iframe", 
    //         id:"abc_"+parseInt(Math.random()*100),
    //         title:"子页面新增",
    //         url:"http://localhost:1234/page/single-spa-vue/index.html?id="+parseInt(Math.random()*100)

    // },"*"); 

    window.addEventListener('message',e => {

        if(e.data.type == "iframe" && !e.data.contact){
        
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

        if(e.data.contact){

            let allMenuRouter = store.state.permission.allMenuRouter;

            let { id , params } = e.data;

            let result = allMenuRouter.filter(item => item.id == id || item.meta.id == id);

            //console.log("allMenuRouter",allMenuRouter,"result",result)

            if(result.length > 0){

                store.commit("SET_ROUTER_PARAMS",{
                    id,params
                });


                store.dispatch("addExtTag",{...result[0]
                }).then(({path}) => {

                    router.push({path});
                    
                })

            }

        }


    },false)
}


