# 使用 TypeScript 来编写 webpack config 文件

## 安装依赖

```shell
npm install ts-node typescript webpack webpack-cli @types/webpack -D
```

## 编写配置文件

```TypeScript
// webpack.config.ts

import { Configuration } from 'webpack';
import { resolve } from 'path';

const config: Configuration = {
  entry: './src/main.js',
  mode: 'development',
  output: {
    path: resolve(__dirname, 'dist')
  }
};

export default config;
```

## `package.json` 中添加一个构建脚本

```json

...

"scripts": {
    "build": "webpack --config webpack.config.ts"
  }

...

```

## 执行构建

```shell
npm run build
```

## 原理

`Node.js` 根据文件后缀名来解析模块，并在 `module` 模块的 `_extensions` 和 `require.extensions` 上存放了所有的文件后缀和对应的模块加载器，二者完全一致。

所以只要你再 `require.extensions` 属性上放置对应后缀正确的模块加载器， `Node.js` 就可以加载该后缀的模块。

比如 `.ts` 结尾的的 `TypeScript` 文件， `ts-node` 这个模块提供了相应的模块加载器，只要使用下面的代码:

```TypeScript
import registerTypescript from 'ts-node/register';

registerTypescript();
```

`ts-node` 就会在 `require.extensions` 添加 `.ts` 文件模块加载器， 然后 `NodeJS` 就可以正确解析 `.ts` 文件了。

根据上面的原理 `Gulp` 开源了一个项目叫 `gulpjs/interpret` ， 这个项目收集了各种其他语言的模块加载器，比如 `ES6` 的 `babel/register` , `CoffeeScript` 的 `coffeescript/register`

`webpack-cli` 检测到配置文件是 `.ts` 结尾的话，就会注册对应的模块加载器，然后就可以正常解析用 `TypeScript` 编写的配置文件了。

```JavaScript
// webpack-cli@3.2.3
// ./bin/convert-argv.js line#122

...

// 根据文件后缀使用 `interpret` 注册相应的模块加载器
configFiles.forEach(function(file) {
  registerCompiler(interpret.extensions[file.ext]);
  options.push(requireConfig(file.path));
});

...

```
