// 对外暴露配置路由(常量路由)
export const constantRoute = [
    {/* 登录路由 */
        path: '/login',
        component: () => import('../views/login/index.vue'),
        name: 'login'/* 命名路由 */
    },
    {/* 登录成功后展示数据的路由 */
        path: '/',
        component: () => import('../views/home/index.vue'),
    },
    {/* 404 */
        path: '/404',
        component: () => import('../views/404/index.vue'),
        name: '404'/* 命名路由 */
    },
    {/* 任意路由 */
        path: '/:patchMatch(.*)*',
        redirect: '/404',
        name: 'any'
    }
]