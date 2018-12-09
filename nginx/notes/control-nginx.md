# 控制 Nginx 运行状态



1. 启动 `nginx`

   ```shell
   /usr/local/nginx/sbin/nginx
   ```

2. 通过信号机制控制 `nginx`

   ```shell
   kill SIGNAL `PID`
   ```

   ```shell
   ./sbin/nigx -s SINGAL
   ```



   获取 `nginx` 的 `PID` 可以查看 `nginx` 目录下的 `nginx.pid`。

   `nginx` 可接受的信号( 详情请参阅 [control nginx](http://nginx.org/en/docs/control.html) ):

   | 信号        | 作用 |
   | :-- | :--- |
   | TERM ，INT | 快速停止 `nginx` 服务 |
   | QUIT | 平缓停止 `nginx` 服务 |
   | HUB | 使用新的配置文件启动进程，平缓停止原有进程，作用是平滑重启 |
   | HSR1 | 重新打开日志文件，常用于日志切割 |
   | HSR2 | 使用新版本的 `nginx` 文件启动服务，之后平缓停止原有 `nginx` 进程 |
   | WINCH | 平缓停止 `worker process` ，用于 `nginx` 服务器平滑升级 |
