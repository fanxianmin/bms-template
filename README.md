# 后台管理系统模板
## 一、后台管理系统模板介绍
   1. 使用vite前端构建工具构建一个vue3版本的后台管理系统
   2. 使用eslint+stylelint+prettier对代码质量做检测和修复
   3. 使用husky做commit拦截
   4. 使用commitlint统一提交规范
   5. 使用preinstall统一包管理工具 `pnpm`
## 一、搭建后台管理系统模板
   1. 项目初始化
      新建文件夹 =》`pnpm create vite`创建项目 =》`pnpm i`安装依赖 =》`pnpm run dev`运行项目

   2. 项目配置
      1. 配置Eslint——插件化的JS代码检测工具，保证代码质量
         - 安装Eslint插件 ：`pnpm i eslint -D`
         - 生成Eslint的配置文件 eslint.cjs：`npx eslint --init`
         - 新建 eslintignore 文件，配置eslint规则忽略文件
         - package.json新增两个运行脚本指令：lint（校验指令），fix（修复指令）
      2. 配置prettier——JS代码格式化工具，保证代码美观
         - 安装依赖包：`pnpm i -D eslint-plugin-prettier prettier eslint-config-prettier eslint-config-prettier`
         - 创建 prettierrc.json 文件添加规则
         - 创建 prettierignore 配置规则忽略文件
         - `pnpm run lint`（校验），`pnpm run fix`（修复）
      3. 配置stylelint——CSS的校验工具，可以格式化代码，检测语法错误，指定书写顺序
         - 安装 :``
         - 创建 stylelint.cjs 文件，添加规则
         - 新建 stylelintignore 文件，配置规则忽略文件
         - package.json新增运行脚本指令
      4. 配置husky——在代码提交到仓库前强制格式化代码
         - 安装 ：`pnpm i -D husky`
         - 创建 stylelint.cjs 文件，添加规则
         - 新建 stylelintignore 文件，配置规则忽略文件
         - package.json新增运行脚本指令
      5. 配置commitlint——统一规范commit信息
         - 安装 
         - 创建 commitlint.config.cjs 文件，添加规则
         - 新建 stylelintignore 文件，配置规则忽略文件
         - package.json新增运行脚本指令
      6. 配置统一的包管理器工具——


   3. 项目集成
      1. element-plus集成 —— UI组件库采用element-plus
         - 安装：`npm i element-plus --save`
         - 引入：
      2. src路径别名的配置 —— 方便文件访问
         - 在 vite.config.ts 文件配置
         - 在 typescript.json 文件配置
      3. 环境变量的配置 —— 方便在不同阶段切换不同的请求状态
         - 配置开发环境配置文件(.env.development)
         - 配置测试环境配置文件(.env.test)
         - 配置生产环境配置文件(.env.production)
         - 在package.json配置命令:build:pro/build:test
         - 通过 import.meta.env 获取环境变量
      4. SVG图标配置 —— 使用svg图标，页面加载不再是图片，可以提高页面性能
         - 安装svg依赖：`npm i vite-plugin-svg-icons -D`
         - 在 vite.config.ts 中配置
         - 在 main.js 中引入
         - 下载svg图标
         - 使用： <svg style="设置图标大小"><use xlink:href="#icon-图标名字" fill="设置图标颜色" ></use></svg>
         - 封装svg图标组件
         - 自定义插件注册svg全局组件
      5. sass集成
         - 安装：`npm install -D sass`
         - 清除默认样式，npm搜reset.scss，复制到项目，引入index.scss
         - 为项目添加全局样式 index.scss
         - 为项目添加全局变量 variable.scss
      6. mock数据——造假的接口数据插件
         - 安装：`npm i -D vite-plugin-mock mockjs`
         - 在 vite.config.ts 文件配置
      7. axios二次封装——实现发送网络请求
      8. 路由配置
      9. 
