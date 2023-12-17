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
         - 安装 :`...`
         - 创建 stylelint.cjs 文件，添加规则
         - 新建 stylelintignore 文件，配置规则忽略文件
         - package.json新增运行脚本指令
      4. 配置husky——在代码提交到仓库前强制执行的代码
         - 安装 ：`pnpm i -D husky`
         - 执行`npx husky-init`命令后在根目录下生成`.husky`目录
         - `.husky`目录下的`pre-commit`文件中配置commit执行的命令
      5. 配置commitlint——统一规范commit信息
         - 安装 :`pnpm add @commit/config-conventional @commitlint/cli -D`
         - 创建 commitlint.config.cjs 文件，添加规则
         - package.json 新增运行脚本指令
      6. 配置统一的包管理器工具——
         - 在根目录创建文件配置包管理器限制代码
         - 在packpack.json配置命令


   3. 项目集成
      1. element-plus集成 —— UI组件库采用element-plus
         - 安装：`pnpm i element-plus`
         - 引入方式：完整引入，按需应入，详情见官网
      2. SVG图标配置 —— 使用svg图标，页面加载不再是图片，可以提高页面性能
         - 安装svg依赖：`pnpm i vite-plugin-svg-icons -D`
         - 在 vite.config.ts 中配置
         - 在 main.js 中引入
         - 下载svg图标
         - 使用： <svg style="设置图标大小"><use xlink:href="#icon-图标名字" fill="设置图标颜色" ></use></svg>
         - 封装svg图标组件
         - 自定义插件注册svg全局组件
      3. sass集成
         - 安装：`pnpm install -D sass`
         - 清除默认样式，npm搜reset.scss，复制到项目，引入index.scss
         - 为项目添加全局样式 index.scss
         - 为项目添加全局变量 variable.scss
         - 在 vite.config.ts 中配置 variable.scss
      4. mock数据——造假的接口数据插件
         - 安装：`pnpm i -D vite-plugin-mock mockjs`
         - 在 vite.config.ts 文件配置,详情见官网
      5. axios二次封装——实现发送网络请求
         - 安装：`pnpm i axios`
         - 二次封装axios , 在/src/utils 文件夹封装
      6. API接口统一管理
         - 在/src/api 文件夹配置
      7. 路由配置
         - 安装：`pnpm i vue-router`
         -  在/src/router 文件夹 配置
