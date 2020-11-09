import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");

Vue.use(Element, {
  size: 'medium', // set element-ui default size

})


let instance = null;

function render(props = {}){

  console.log("render",props);
  const { container } = props;

  instance = new Vue({

    router,
    render: h => h(App)

  }).$mount(container ? container.querySelector('#app') : '#app')

  //router.push({path:"/"})
 
  // if(window.__POWERED_BY_QIANKUN__){

  //   router.beforeEach((to,from,next) => {

        
  //       console.log(to)

  //       if(!to.path.includes('/vue')){

  //         next({
  //           path:'/vue' + to.path
  //         })
  //       }else{
  //         //  next({
  //         //    path:'/vue'
  //         //  });
  //         next();
  //       }


  //       next();
  //   })
  // }

}

if(window.__POWERED_BY_QIANKUN__){

  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


///子组件协议

export async function  bootstrap(props){

  console.log(props)

};

export async function  mount(props){

  console.log(props)
   render(props)
};

export async function  unmount(props){


   if(instance){
   
      instance.$destory();
   
   }


 };
