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
    name: '/layout',
    component:()=>import('@/views/layout'),
    
}


const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode:"history",
  routes: routersConfig
})


export const constantRouterMap = routersConfig;
export const asyncRouterMap = [];



export default router;
