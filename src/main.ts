import { createApp } from 'vue'
import App from './App.vue'

// 完整引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入svg配置代码
import "virtual:svg-icons-register"

// 应入自定义插件对象
import gloablComponent from './components/index'

// 引入模板的全局样式
import "@/styles/index.scss"

// 引入路由
import router from './router'

// 创建应用实例对象
const app = createApp(App)

// 安装插件到app上
app.use(ElementPlus)
app.use(gloablComponent)
app.use(router)

// 将应用挂载到挂载点上
app.mount('#app')
