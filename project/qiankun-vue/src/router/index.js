import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [


  {
    path: "/",
    redirect: "/vue",
  },
  {
    path: "/vue",
    name: "Home",
    component: Home
  },
  {
    path: "/doc",
    name: "doc",
    component: Home
  },
  {
    path: "/three",
    name: "three",
    component: ()=>import("@/views/three")
  },
  {
    path: "/vue/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import('@/views/layout'),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children:[{
      path:"/vue/doc",
      name:"doc",
      
          component: () =>
          import(/* webpackChunkName: "about" */ "../views/Doc.vue")
      
    }]
  }
  
];

const router = new VueRouter({
  //mode: "history",
  base: "/vue",//process.env.BASE_URL,
  routes
});

export default router;
