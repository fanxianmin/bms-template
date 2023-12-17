import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    // scss全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    },
    plugins: [vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],/* 指定 SVG图标 保存的文件夹路径 */
      symbolId: 'icon-[dir]-[name]',/* 指定 使用svg图标的格式 */
      // svgsDir: 'src/svgs',/* 指定要生成的组件名称 */
    }),
    viteMockServe({
      // default
      mockPath: 'mock',
      localEnabled: command === 'serve',/* 保证开发阶段可以使用mock接口 */
    }),],
    resolve: {
      alias: {
        "@": path.resolve("./src")/* 相对路径别名配置，用 @ 代替src */
      }
    }
  }
})
