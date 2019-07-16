// 导入 axios 
import axios from 'axios'
// 创建副本
const managerAxios = axios.create({
    // 基地址
    baseURL: 'http://localhost:8888/api/private/v1/'
})

// 添加请求拦截器
managerAxios.interceptors.request.use(
    function(config) {
      // 请求成功触发
      console.log('请求成功')
      // 添加请求头
      // 添加token
      config.headers.Authorization = window.sessionStorage.getItem('token')
      return config
    },
    function(error) {
      // 请求失败触发
      return Promise.reject(error)
    }
  )
  
  // 添加响应拦截器
  managerAxios.interceptors.response.use(
    function(response) {
      // 响应成功触发
      console.log('响应成功')
      // console.log(response)
      if (
        response.data.meta.status == 400 &&
        response.data.meta.msg == '无效token'
      ) {
        // 伪造的token 坏人
        // 删掉他
        window.sessionStorage.clear()
        // 打回去
        router.push('/login')
        // 弹框
        new Vue().$message.error('哈麻皮，伪造token，滚！！！！')
      }
      return response
    },
    function(error) {
      // 响应失败触发
      return Promise.reject(error)
    }
  )



// 暴露接口方法 - 登录
export const login = ({
    username,
    password
}) => {
    return managerAxios.post('/login', {
        username,
        password
    })
}


// 暴露接口方法 - 获取用户列表
export const users = (({
    query,
    pagenum,
    pagesize
}) => {
    return managerAxios.get('users', {
        params: {
            query,
            pagenum,
            pagesize
        },
        // 设置请求头
        // headers: {
        //     Authorization: window.sessionStorage.getItem('token')
        // }
    })
})

// 左侧菜单
export const menus = () => {
    return managerAxios.get('/menus', {
        // 设置请求头
        // headers: {
        //     Authorization: window.sessionStorage.getItem('token')
        // }
    })
}