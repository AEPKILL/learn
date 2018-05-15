## 非 Root 权限使用 `Docker`

1. sudo groupadd docker
2. sudo gpasswd -a ${USER} docker
3. sudo service docker restart

> 注销当前用户重新登陆才生效

## 守护容器

1. 交互式容器中用 `Ctrl + P , Ctrl + Q` 退出
2. docker run -d

## 容器日志

```shell
docker logs -t -f --tail [number] [container id]
```

## 容器端口映射

```shell
docker -P # 映射容器暴露的所有端口进行映射
docker -p [containerPort] [hostPort:containerPort] [ip:containerPort] [ip:hostPort:containerPort]
```

