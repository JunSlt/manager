
// 导入vue
import Vue from "vue"

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import login from '../views/login.vue'
import index from '../views/index.vue'

// 导入嵌套路由
import usersList from '../views/userslist.vue'


// 规则
const routes = [
  // 路由重定向
  {
    path:"/",
    redirect:'login'
  },
  {
    path: '/login',
    component: login,
    //路由元信息
    meta:{
        tologin:false
    }
  },
  {
    path: '/index',
    component: index,
    children:[
        {
            path:'usersList',
            component:usersList
        }
    ]
  }
]

// 实例化路由
const router = new VueRouter({
  routes
})

// 增加导航守卫 
router.beforeEach((to,from,next)=>{
    // console.log('123')
    if(to.meta.tologin !== false){
        if(window.sessionStorage.getItem('token') !== undefined){
            // 去吧
            next()
        }else {
            // 弹框
            new Vue().$message.error('请先登录')
            // 去登录页
            router.push('/login')
        }
    }else{
        // 不需要判断页面

        next()
    }
})



// 暴露出去
export default router