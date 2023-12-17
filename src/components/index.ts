// 自定义的插件 —— 实现全局组件注册

// 引入项目中的全局组件
import SvgIcon from './SvgIcon.vue'

// 定义全局对象
const allGloablComponent = { SvgIcon }
// 对外暴露插件
export default {
    install(app) {
        // 注册项目全部的组件
        // Object.keys()返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。
        Object.keys(allGloablComponent).forEach(item => {
            //  app.component('名字',组件)注册组件为全局组件
            app.component(item, allGloablComponent[item])
        })
    }
}