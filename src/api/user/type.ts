// 登录接口需要携带参数数据类型
export interface loginForm {
    username: String,
    password: String
}

// 登录接口返回数据类型
interface dataType {
    token: String
}
export interface loginResponseData {
    code: Number,
    data: dataType
}

// 服务器返回用户信息数据类型
interface userInfo {
    userId: Number,
    avatar: String,
    username: String,
    password: String,
    desc: String,
    roles: String[],
    buttons: String[],
    routes: String[],
    token: String
}
interface user {
    checkUser: userInfo
}
export interface userResponseData {
    code: number,
    data: user
}