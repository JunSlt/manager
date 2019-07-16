// 导入vue
import Vue from "vue"

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 组件
import login from '../views/login.vue'
import index from '../views/index.vue'
import error from '../views/error.vue'

// 导入嵌套路由
import users from '../views/users.vue'
import roles from '../views/roles.vue'
import rights from '../views/rights.vue'
import goods from '../views/goods.vue'
import params from '../views/params.vue'
import categories from '../views/categories.vue'
import orders from '../views/orders.vue'
import reports from '../views/reports.vue'


// 规则
const routes = [
  // 路由重定向
  {
    path: "/",
    redirect: 'login'
  },
  {
    path: '/login',
    component: login,
    //路由元信息
    meta: {
      tologin: false
    }
  },
  {
    path: '/index',
    component: index,
    children: [{
        path: 'users',
        component: users
      },
      {
        path: 'roles',
        component: roles
      },
      {
        path: 'rights',
        component: rights
      },
      {
        path: 'goods',
        component: goods
      },
      {
        path: 'params',
        component: params
      },
      {
        path: 'categories',
        component: categories
      },
      {
        path: 'orders',
        component: orders
      },
      {
        path: 'reports',
        component: reports
      }
    ]
  },
  // 错误页
  {
    path:'/error',
    component:error
  },
  // 兜底规则
  {
    path:'*',
    redirect:'/error'
  }
]

// 实例化路由
const router = new VueRouter({
  routes
})

// 增加导航守卫 
router.beforeEach((to, from, next) => {
  // console.log('123')
  if (to.meta.tologin == false) {
    next()
  } else {
    // 不需要判断页面
    if (window.sessionStorage.getItem('token') !== undefined) {
      // 去吧
      next()
    } else {
      // 弹框
      new Vue().$message.error('请先登录')
      // 去登录页
      router.push('/login')
    }
    
  }
})



// 暴露出去
export default router