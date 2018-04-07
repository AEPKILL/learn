当你使用下面的语句加载一个模块的时候：

```javascript
const xxx = require("yyyy")
```

如果 yyyy 是一个全局模块而并没有安装到当前目录的 node_modules 的话那么是找不到 `yyyy` 这个模块的。

虽然`require`一个全局的模块是一个很奇怪的操作，但是基于一些特殊的原因我必须去 `require` 一个全局的模块。

然后在 `npm ` 试了一下几个获取全局安装目录的库都很有局限：

* global-modules 
* global-dirs
* ...

这些库的一个通病都是硬编码，而没有考虑 `.npmrc`配置文件，如果你修改了这个文件，那么它返回的就是错误的结果。

 好在 `npm` 官方提供了一个命令用于获取全局安装目录，一行代码就搞定了:

```javascript
execSync('npm root -g').toString().trim()
```

> https://stackoverflow.com/questions/5926672/where-does-npm-install-packages?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
>
> https://www.npmjs.com/package/global-dirs
>
> https://www.npmjs.com/package/global-modules