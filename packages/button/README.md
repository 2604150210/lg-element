# JalButton

### 十二、Rollup打包

#### 1. Rollup

+ Rollup是一个模块打包器
+ Rollup支持Tree-Shaking
+ 打包的结果比Webpack要小
+ 开发框架/组件库的时候使用Rollup更合适

#### 2. 安装依赖

+ rollup
+ rollup-plugin-terser
+ rollup-plugin-vue@5.1.9
+ Vue-template-compiler

```sh
yarn add rollup rollup-plugin-terser rollup-plugin-vue@5.1.9 vue-template-compiler -D -W
```

rollup.config.js

```js
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
module.exports = [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'es'
      }
    ],
    plugins: [
      vue({
        css: true,
        compileTemplate: true
      }),
      terser()
    ]
  }
]
```