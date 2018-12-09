# 控制 Nginx 运行状态



1. 启动 `nginx`

   ```shell
   /usr/local/nginx/sbin/nginx
   ```

2. 通过信号机制控制 `nginx`

   ```shell
   kill -s <SIGNAL> <PID>
   ```

   ```shell
   ./sbin/nigx -s <SINGAL>
   ```
   获取 `nginx` 的 `PID` 可以查看 `nginx` 目录下的 `nginx.pid`。
   使用 `kill -s <SIGNAL> <PID>`  控制 `nginx` 可接受的控制信号( 详情参阅 [control nginx](http://nginx.org/en/docs/control.html) ):
   | 信号        | 作用 |
   | :-- | :--- |
   | TERM ，INT | 快速停止 `nginx` 服务 |
   | QUIT | 平缓停止 `nginx` 服务 |
   | HUP | 使用新的配置文件启动进程，平缓停止原有进程，作用是平滑重启 |
   | HSR1 | 重新打开日志文件，常用于日志切割 |
   | HSR2 | 使用新版本的 `nginx` 文件启动服务，之后平缓停止原有 `nginx` 进程 |
   | WINCH | 平缓停止 `worker process` ，用于 `nginx` 服务器平滑升级 |

   使用 `./sbin/nginx -s <SINGAL>` 控制 `nginx` 可接受的控制信号( 详情参阅 [Controlling NGINX Processes at Runtime](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control))：

   - `quit` – 优雅停止 `nginx` 服务

   - `reload` – 重新载入配置文件(优雅停止原进程)

   - `reopen` – 重新打开日志文件

   - `stop` – 快速停止 `nginx` 服务

>术语解释
>
>- 平缓停止：`Nginx` 处理完正在处理的网络请求，但不再接受新的请求，之后停止工作
>- 快速停止：立即停止当前 `Nginx` 服务正在处理的所有网络请求，马上丢弃连接，停止工作