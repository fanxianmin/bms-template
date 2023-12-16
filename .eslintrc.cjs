module.exports = {
    // 运行环境
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    // 规则继承
    "extends": [
        // "eslint:recommended",/* 开启eslint推荐规则 */
        "plugin:@typescript-eslint/recommended",/* ts语法规则 */
        "plugin:vue/vue3-essential"/* vue3语法规则 */
    ],
    // 为特定类型文件指定处理器
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    // 指定解析语法
    "parser": "vue-eslint-parser",
    // 优先级低于parser的语法解析配置
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",/* 指定解析器 */
        "sourceType": "module",
    },
    // eslint安装的插件
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    // eslint规则的配置
    "rules": {
        /*
        *'off'或0  =》关闭规则
        *'warn'或1 =》打开的规则作为警告，不影响代码执行
        * 'error'或2 =》规则作为一个错误，代码不能执行，界面报错
         */

    }
}
