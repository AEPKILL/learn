# search

从Docker Hub查找镜像

## 语法

```shell
docker search [OPTIONS] TERM
```

### Options

| Name, shorthand | Default | Description                                                  |
| --------------- | ------- | ------------------------------------------------------------ |
| `--automated`   |         | [**!!弃用!!**](https://docs.docker.com/engine/deprecated/) 只显示 automated build类型的镜像 |
| `--filter , -f` |         | 根据提供的条件过滤输出                                       |
| `--format`      |         | 使用 `Go` 模版友好打印搜索结果                               |
| `--limit`       | `25`    | Max number of search results                                 |
| `--no-trunc`    |         | Don’t truncate output                                        |
| `--stars , -s`  |         | [**!!弃用!!**](https://docs.docker.com/engine/deprecated/) Only displays with at least x stars |
|                 |         |                                                              |
当前支持的过滤器:

- `stars` (int - number 镜像至少包含多少颗星)
- `is-automated` (boolean - true or false) - 镜像是否是自动构建
- `is-official` (boolean - true or false) - 镜像是否是官方提供

### Format the output

The formatting option (`--format`) pretty-prints search output using a Go template.

Valid placeholders for the Go template are:

| Placeholder    | Description                       |
| :------------- | :-------------------------------- |
| `.Name`        | Image Name                        |
| `.Description` | Image description                 |
| `.StarCount`   | Number of stars for the image     |
| `.IsOfficial`  | “OK” if image is official         |
| `.IsAutomated` | “OK” if image build was automated |

## 示例

- 查找镜像名包含 `centos` 的镜像
  
  ```shell
  docker search centos
  ```
  
- 查找官方支持至少包含 5 颗星的 `centos` 镜像

  ```shell
  docker search --filter stars=5 --filter is-official=true centos
  ```


>参考资料:
>
>[docker search](https://docs.docker.com/engine/reference/commandline/search/)