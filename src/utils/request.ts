import axios from 'axios'
import { ElMessage } from 'element-plus'
// 二次封装axios,目的是使用请求与响应拦截器
// 第一步：创建axios实例，配置基础信息
const request = axios.create({
    baseURL: "http://localhost:5173/",
    timeout: 5000
})
// 第二步：给request实例添加请求拦截器
request.interceptors.request.use((config) => {
    // config配置对象,headers属性请求头，经常给服务器携带公共参数
    return config
})
// 第二步：给request实例添加响应拦截器
request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    // 定义变量，存储网络错误信息
    let message = ''
    let status = error.response.status
    switch (status) {
        case 401:
            message = 'token过期'
            break
        case 403:
            message = '无权访问'
            break
        case 404:
            message = '请求地址错误'
            break
        case 500:
            message = '服务器错误'
            break
        default:
            message = '网络错误'
    }
    ElMessage({
        type: 'error',
        message
    })
    return Promise.reject(error)
})

export default request
