
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
// import startQiankun from './micro/index.js'
// startQiankun();

Vue.prototype.$eventBus = new Vue()

// 接口
import RequestUtils from "@/utils/request.js";
Vue.prototype.$http = RequestUtils;

// 加密
import md5 from 'js-md5'
Vue.prototype.$md5 = md5;



Vue.use(Element, {
  size: 'medium', // set element-ui default size

})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

