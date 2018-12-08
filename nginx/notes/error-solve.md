# 错误及解决方案

- `./configure` 执行编译检查时说缺少 `PCRE` 库

  ```shell
  # error message
  ./configure: error: the HTTP rewrite module requires the PCRE library.
  You can either disable the module by using --without-http_rewrite_module
  option, or install the PCRE library into the system, or build the PCRE library
  statically from the source with nginx by using --with-pcre=<path> option.
  ```

  尝试 `yum install pcre` 安装 `pcre` 库，然后 `centos` 告诉我 `Package pcre-8.32-17.el7.x86_64 already installed and latest version`。

  其实是缺少 `pcre-devel` 模块，`sudo yun install pcre-devel` 就好了。