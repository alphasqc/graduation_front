import axios from 'axios'
// 创建实例
const instance = axios.create({
  timeout: 1000
})
// 添加请求拦截器
instance.interceptors.request.use(
)

export default instance
