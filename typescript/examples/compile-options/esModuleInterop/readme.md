# esModuleInterop

`typescript 2.7` 添加了一个新的编译选项 `esModuleInterop` ，用于支持 `CommonJS / AMD / UMD` 模块导入与 ECMAScript 规范行为保持一致

## 起因

以前 `typescript` 对 `CommonJS / AMD / UMD` 模块的处理方式与 `ES6` 模块的处理方式一致，但是这样做就会导致一些问题：

- `ECMAScript` 规定命名空间记录对象必须是一个普通对象，不可以被调用

  但是以前 `TypeScript` 一直简单的将 `import * as a from 'a'` 编译为 `const a = require('a')`
  这样就 `a` 就可以是一个可以被调用函数而不是一个对象。 e.g: `module.exports = function(){ ...doSomething...}`

- 没有很好的支持 `default` 导出

`import express from 'express'` ， `TypeScript` 会编译成 `const express = require('express').default`
但是以前很多的 `CommonJS` 规范的模块都没有 `default` 导出

## 解决方案

`typescript` 引入了两个导入帮助函数 `__importStar` 和 `__importDefault` 用于正确支持 `import * as xx from 'xx'` 和 `import xx from 'xx'` 这两种导入方式

例如:

```typescript
import * as foo from 'foo';
import b from 'bar';
```

生成的代码:

```typescript
'use strict';
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var foo = __importStar(require('foo'));
var bar_1 = __importDefault(require('bar'));
```

> 更正(typescript 3.2.3 下似乎不再生成 \_\_importDefault 方法):
>
> ```typescript
> var __importStar =
>   (this && this.__importStar) ||
>   function(mod) {
>     if (mod && mod.__esModule) return mod;
>     var result = {};
>     if (mod != null)
>       for (var k in mod)
>         if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
>     result['default'] = mod;
>     return result;
>   };
> exports.__esModule = true;
> var foo = __importStar(require('foo'));
> var bar_1 = __importStar(require('bar')).default;
> ```
