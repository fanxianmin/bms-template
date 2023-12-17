// 统一管理用户相关的接口文件
import request from '../../utils/request'
import type { loginForm, loginResponseData, userResponseData } from './type'

enum API {
    LOGIN_URL = '/api/user/login',
    USERINFO_URL = '/api/user/info'
}
// 暴露请求函数
export const reqLogin = (data: loginForm) => { request.post<any, loginResponseData>(API.LOGIN_URL, data) }
export const reUserinfo = () => {
    request.get<any, userResponseData>(API.USERINFO_URL)
}