// 用户信息数据
function createUserList() {
    return [
        {
            userId: 1,
            avatar: '用户头像url',
            username: 'admin',
            password: '111111',
            desc: '平台管理员',
            roles: ['平台管理员'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'admin token'
        },
        {
            userId: 2,
            avatar: '用户头像url',
            username: 'system',
            password: '111111',
            desc: '系统管理员',
            roles: ['系统管理员'],
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'system token'
        }
    ]
}
// 对外暴露一个数组，数组包含了两个接口
// 用户登录假接口，获取用户信息假接口
export default [
    // 用户登录接口
    {
        url: '/api/user/login',
        method: 'post',
        response: ({ body }) => {

            // 获取请求体携带的用户和密码
            const { username, password } = body

            // 调用获取用户信息函数，判断此用户是否存在
            const checkUser = createUserList().find(item => item.username === username && item.password === password)
            // 没有用户返回失败信息
            if (!checkUser) {
                return { code: 201, data: { message: '账号或密码不正确！' } }
            }
            // 存在用户返回成功信息
            const { token } = checkUser
            return { code: 200, data: { token } }
        }
    },
    // 获取用户信息接口
    {
        url: '/api/user/info',
        method: 'get',
        response: (requset) => {
            // 获取请求头携带的token
            const token = requset.headers.token
            // 查看用户信息是否包含有次token的用户
            const checkUser = createUserList().find(item => item.token === token)
            // token匹配失败
            if (!checkUser) {
                return { code: 201, data: { message: '获取用户信息失败！' } }
            }
            // token匹配成功
            return { code: 200, data: { checkUser } }
        }
    }]