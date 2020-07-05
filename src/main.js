
import Vue from 'vue'

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import store from './store'

import App from './App.vue';

import '@/assets/styles/common.less';


import RequestUtils from "@/utils/request.js";
Vue.prototype.$http = RequestUtils;

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  router,
  store
})


new Vue({
  el: '#app',
  render: h => h(App)
})

