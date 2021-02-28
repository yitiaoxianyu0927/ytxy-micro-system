
import Vue from 'vue'

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import store from './store'

import App from './App.vue';

//样式
import '@/assets/styles/common.less';
import '@/assets/svg/index.js' // svg

//路由
import './router/beforeRouter.js'

// // 微前端
import startQiankun from '@/micro/index.js'
// startQiankun({
//   prefetch:false,
//   sandbox:{
//     strictStyleIsolation: true
//   }
// });

//Vue.prototype.$eventBus = new Vue()

// 接口
import RequestUtils from "@/utils/request.js";
Vue.prototype.$http = RequestUtils;

// 加密
import md5 from 'js-md5'
Vue.prototype.$md5 = md5;



Vue.use(Element, {
  size: 'medium', // set element-ui default size

})


// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })


let instance = null;

function render(props = {}){

  console.log("render",props);
  const { container } = props;

  instance = new Vue({

    router,
    store,
    render: h => h(App)

  }).$mount(container ? container.querySelector('#app') : '#app')

}



if(window.__POWERED_BY_QIANKUN__){

  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


///子组件协议

export async function  bootstrap(props){

  console.log("bootstrap",props)

};

export async function  mount(props){

  console.log("mount",props)
  render(props)

};

export async function  unmount(props){

  if(instance){
  
    instance.$destory();
  
  }

};

