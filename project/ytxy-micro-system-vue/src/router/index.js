import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



const routersConfig=[

    
    {
        path: '/login',
        name: 'login',
        component:()=>import('@/views/login')
    }
  
]

export const mainRouter = {
        
    path: '/',
    name: 'layout',
    component:()=>import('@/views/layout'),
    
}

export const iframeExtRouter = {

    path:'/iframe_ext_router',
    component:null
}


// 去掉  Uncaught (in promise) Error:Redirected when going from “x“ to “x“ via a navigation guard 错误//

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  //mode:"history",
  routes: routersConfig
})


export const constantRouterMap = routersConfig;
export const asyncRouterMap = [];



export default router;
