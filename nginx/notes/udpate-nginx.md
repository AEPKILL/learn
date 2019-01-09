# 更新 Nginx

有时候我们需要更新 `nginx` 配置文件或者升级到最新的 `nginx`

## 更新 Nginx 配置文件

可以使用 `nginx -s reload [-c newConfFile]`命令来平滑重启载入新的配置([控制Nginx](./control-nginx.md))

可以使用 `kill -s HUP <PID>` 命令来平滑重启载入新的配置

## 升级  Nginx 版本

- 停止当前 `Nginx` 服务然后更新的 `Nginx` 文件

  这样会导致用户一段时间内无法访问服务器

- 平滑升级

  1. 用新的 `nginx` 二进制文件替换老的二进制文件
  2. 使用 `kill -s USR2 <nginx pid>` 向 `nginx master`  进程发送 USR2 信号， `nginx` 会用新的 `nginx` 文件启动 `nginx` 服务，



