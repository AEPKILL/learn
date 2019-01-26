# CentOS7 Install NodeJS

### How to install Node.js via binary archive on Linux?

1. Unzip the binary archive to any directory you wanna install Node, I use `/usr/local/lib/nodejs`

```
 VERSION=v8.11.4
 DISTRO=linux-x64
 sudo mkdir /usr/local/lib/nodejs
 sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs 
 sudo mv /usr/local/lib/nodejs/node-$VERSION-$DISTRO /usr/local/lib/nodejs/node-$VERSION
```

1. Set the environment variable `~/.bash_profile`, add below to the end

```
# Nodejs
export NODEJS_HOME=/usr/local/lib/nodejs/node-$VERSION/bin
export PATH=$NODEJS_HOME:$PATH
```

1. Refresh profile 

```
. ~/.bash_profile
```

1. Test installation using

```
$ node -v
$ npm version
$ npx -v
```

https://github.com/nodejs/help/wiki/Installation

## 安装全局模块

1. 设置全局模块目录权限

   https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

2. sudo -i 

   需要在 /etc/profile 中设置 PATH

