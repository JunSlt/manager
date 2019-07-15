import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入饿了么ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 样式引用
import './assets/baes.css'

// 导入自己抽取的router
import router from './router/router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
