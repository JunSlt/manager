import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入饿了么ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)



// 路由规则
const routes = [
  {
    path:'',
    component:''
  }
]
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
