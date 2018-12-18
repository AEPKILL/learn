# CentOS7 连接 wifi

把一台老电脑装上了 `CentOS7` 感觉流畅了不少。

首先是没网，我插了根网线，然后用 `NetworkManager` 提供的 `nmtui` 工具连上了网。

然后下了个 `NetworkManager-wifi` 激活 `wifi` 功能。

执行 `sudo systemctl enable NetworkManager.service` 开机启动网络服务。

但是这样设置了过后每次开机还是要执行 `nmcli r wifi on` 手动打开 `wifi`

于是我在 `/etc/rc.d/rc.local` 把这条命令添加为开机执行(先要给 `rc.local` 文件添加可执行权限)

然后用 `nmtui` 工具连接 `wifi` ，简单的字符画图形界面，操作起来挺容易的。