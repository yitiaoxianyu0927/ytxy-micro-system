import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



const routersConfig=[
       
    {
        path: '/',
        redirect: '/login',

    },
    {
        path: '/login',
        name: 'login',
        component:()=>import('@/views/login')
    },
    {
        path: '/layout',
        name: 'layout',
        component:()=>import('@/views/layout/layout'),

    },
  
]


const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  // mode:"history",
  routes: routersConfig
})




export default router;
