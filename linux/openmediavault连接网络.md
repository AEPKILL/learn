# openmediavault连接网络

搞个家庭媒体中心，在 `openmediavault` 和 `FreeNas` 中选择了  `openmediavault` ，这个系统是基于 `Debian` 的 `nas` 系统，一路安装到我的笔记本上，发现这个系统有点傻傻的，它首先不识别我的本地网卡，所以我插上网线也没法访问网络。

解决方案:

```shell
# 1. 查看网卡设备
ls /sys/class/net
# 2. 手动添加本地网卡到 /etc/network/interfaces 文件中
vi /etc/network/interfaces
# 添加
auto enp2s0f2 # 刚才查询到的本地网卡设备
iface enp2s0f2 inet dhcp # dhcp
# 3. 重启网络服务
/etc/init.d/networking restart
```

至此，可以通过网线访问网络了。

然后安装 `network-manager` 就好了，参照: [centos7最小安装连接wifi](./centos7最小安装连接wifi.md)

> 这里有个坑，要先编辑 `/etc/NetworkManager/NetworkManager.conf` 文件，设置   *managed=true* ，不然 nmtui 不管理无线网卡

