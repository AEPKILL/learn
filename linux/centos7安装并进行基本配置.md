# CentOS7 Install & Base Configure

最小安装选择了所有的 `adds-on`，安装时不配置账户数据。

## 添加具有 Sudo 权限的 User

1. 以 root 身份登錄到你的伺服器。

   ```
   ssh root@server_ip_address
   ```



1. 使用 adduser 指令將新用戶添加到你的系統

   將 username 替換為你要創建的用戶

   ```
   adduser username
   ```

   - 使用 passwd 指令更新 user 密碼

     ```
     passwd username
     ```

   - 設置 user 的密碼的顯示訊息

     ```
     Set password prompts:
     Changing password for user username.
     New password:
     Retype new password:
     passwd: all authentication tokens updated successfully.
     ```

2. 使用 usermod 指令將用戶添加到 wheel 中。

   ```
   usermod -aG wheel username
   ```

   默認情況下，在 CentOS 上，wheel 的成員具有 sudo 權限。

   

https://yaoandy107.github.io/how-to-create-a-sudo-user-on-centos-quickstart/

## 配置远程连接

```shell
ssh-copy-id -i ~/.ssh/id_rsa.pub username@ip
```

## 设置 sudo 超时时间

要设置 sudo 密码超时值, 请使用 passwd_timeout 参数.

编辑 /etc/sudoers
首先使用超级用户打开 /etc/sudoers, 可使用vim /etc/sudoers 或者 visudo 命令打开 /etc/sudoers 文件, 如下所示 :

sudo visudo
1
设置 timeout 时间
请找到下面行

Defaults env_reset

改变此行为下面这样

Defaults env_reset, timestamp_timeout=x

x 就是代表时间, 单位为分钟, 你可以设置为 10 或 30 ，表示 10 分钟或半小时.
--------------------- 
https://blog.csdn.net/gatieme/article/details/71056020 



## 设置关闭盖子不休眠

`systemd` 处理某些电源相关的 ACPI事件，可以编辑 `/etc/systemd/logind.conf`文件修改相关事件的默认行为。

触发的行为可以有

> `ignore`、`power off`、`reboot`、`halt`、`suspend`、`hibernate`、`hybrid-sleep`、`lock` 或 `exec`。

```shell
HandleLidSwitch=lock
```

就可以让合上盖子只注销当前用户了。

注意：设置完成保存后运行下列命令才生效。

```
systemctl restart systemd-logind
```

