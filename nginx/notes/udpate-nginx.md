# 更新 Nginx

有时候我们需要更新 `nginx` 配置文件或者升级到最新的 `nginx`

## 更新 Nginx 配置文件

可以使用 `nginx -s reload [-c newConfFile]`命令来平滑重启载入新的配置([控制Nginx](./control-nginx.md))

可以使用 `kill -s HUP <PID` 命令来平滑重启载入新的配置

## 升级  Nginx 版本

- 停止当前 `Nginx` 服务然后开启新的 `Nginx` 服务

  这样会导致用户一段时间内无法访问服务器

- 平滑升级


