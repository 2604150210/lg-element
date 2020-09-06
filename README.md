使用单元测试工具对组件的状态和行为进行测试，确保组件发布之后，在项目中使用组件过程中不会出现错误。
### 十、Vue组件的单元测试

#### 1. 组件单元测试的好处

+ 提供描述组件行为的文档
+ 节省手动测试的时间
+ 减少研发新特性时产生的bug
+ 改进设计
+ 促进重构

#### 2. 安装依赖

+ Vue Test Utils
+ Jest
+ vue-jest
+ babel-jest
+ 安装
  + `yarn add jest @vue/test-utils vue-jest babel-jest -D -W`

#### 3. 配置测试脚本

+ packge.json

  ```json
  "scripts": {
    "test": "jest"
  }
  ```

#### 4. Jest配置文件

+ jest.config.js

  ```js
  module.exports = {
    "testMatch": ["**/__tests__/**/*.[jt]s?(x)"],
    "moduleFileExtensions": [
      "js",
      "json",
      // 告诉Jest处理`*.vue`文件
      "vue"
    ],
    "transform": {
      // 用`vue-jest`处理`*.vue`文件
      ".*\\.(vue)$": "vue-jest",
      // 用`babel-jest`处理js
      ".*\\.(js)$": "babel-jest"
    }
  }
  ```

#### 5. Babel配置文件

+ babel.config.js

  ```js
  module.exports = {
    presets: [
      [
        '@babel/prest-env'
      ]
    ]
  }
  ```

  Babel桥接

  `yarn add babel-core@bridge -D -W`


Rollup打包

```sh
yarn add @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W
```

rollup.config.js

```js
import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const isDev = process.env.NODE_ENV !== 'production'

// 公共插件配置
const plugins = [
  vue({
    
    css: true,
    
    compileTemplate: true
  }),
  json(),
  nodeResolve(),
  postcss({
    // 把css插入到style中
    // inject: true,
    // 把css放到和js同一级目录
    extract: true
  })
]

// 如果不是开发环境，开启压缩
isDev || plugins.push(terser())

// pacakges 文件夹路径
const root = path.resolve(__dirname, 'packages')

module.exports = fs.readdirSync(root)
  // 过滤，只保留文件夹
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
  // 为每一个文件夹创建对应额配置
  .map(item => {
    const pkg = require(path.resolve(root, item, 'package.json'))
    return {
      input: path.resolve(root, item, 'index.js'),
      output: [
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.main),// 读取package.json中的main属性
          format: 'cjs'
        },
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.module), // 读取package.json中的module属性
          format: 'es'
        }
      ],
      plugins: plugins
    }
  })
```