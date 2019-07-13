import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入饿了么ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入axios 
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
Vue.prototype.$axios = axios

// 样式引用
import './assets/baes.css'
// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import login from './components/login.vue'
import index from './components/index.vue'


// 规则
const routes = [
  // 路由重定向
  {
    path:"/",
    redirect:'login'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/index',
    component: index
  }
]

// 实例化路由
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
