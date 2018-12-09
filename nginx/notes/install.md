# Nginx 安装

## Windows

直接官网下载压缩包解压就好了，然后把 `nginx` 解压后的存放路径加入 `path` 环境变量

## Linux

- 编译安装

  编译 `Nginx` 之前，确保计算机中包含以下编译工具及第三方库:

  ```text
  gcc gcc-c++ automake pcre pcre-devel zlib zlib-devel open openssl-devel
  ```

  ```shell
   # 获取 nginx 的源码包
   wget https://nginx.org/download/nginx-1.14.2.tar.gz
   # 解压 nginx 源码到当前目录
   tar xf nginx-1.14.2.tar.gz
   # 进入 nginx-1.14.2 目录执行 './configure <options>' 执行编译检查并生成 `makefile` 文件
   # 具体的 `configure` 参数可以查阅 [Installation and Compile-Time Options](https://www.nginx.com/resources/wiki/start/topics/tutorials/installoptions/)
   ./configure
   # 执行编译
   make
   # 安装
   make install
  ```
