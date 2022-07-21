import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { store } from '@/store'
import router from '@/router/'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

// request 不支持泛型
// request.get、post、put 支持响应数据泛型
// 由于我们的后端又包装了一层数据 data,
// 导致我们访问数据比较麻烦，所有我们自己封装了一个request

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  const user = store.state.user
  if (user && user.token && config.headers) {
    config.headers.Authorization = `Bearer ${user.token}`
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 控制登录过期的锁(防止统一时间多个请求)
let isRefreshing = false

// 响应拦截器
request.interceptors.response.use(function (response) {
  const status = response.data.status

  // 正确的情况
  if (!status || status === 200) {
    console.log(response)
    return response
  }
  // 错误情况: 比如token无效

  // 统一处理登录过期
  if (status === 410000) {
    if (isRefreshing) return Promise.reject(response)
    isRefreshing = true
    ElMessageBox.confirm('登录过期,请重新登录', '登录过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    }).then(() => {
      // 清除本地过期的登录状态
      store.commit('setUser', null)
      // 跳转到登录页面
      router.push({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
      // 抛出异常
    }).finally(() => {
      isRefreshing = false
    })
    // 在内部消化掉这个业务异常
    return Promise.reject(response)
  }
  ElMessage.error(response.data.msg || '请求失败，请稍后重试')
  // 手动返回promise异常
  return Promise.reject(response.data)
  // 统一处理接口响应错误，比如token过期无效、服务端异常
  // if (response.data.status && response.data.status !== 200) {
  //   ElMessage.error(response.data.msg || '请求失败,请稍后重试')
  //   // 手动返回一个promise异常
  //   return Promise.reject(response.data)
  // }
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
