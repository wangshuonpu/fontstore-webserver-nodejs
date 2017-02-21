#百度字体平台字体同步工具

----

[![fontstore](http://fontstore.baidu.com/static/fontplatform/asset/219035528b4cf73f237ed6b8f7de0a77.svg)](http://fontstore.baidu.com)

**百度字体平台[FontStore](http://fontstore.baidu.com)**为线上矢量图标库，提供常用矢量图标，支持项目多人协作，支持同步本地。与FontEditor结合，提供强大的图标在线编辑能力，项目管理和项目同步功能 大大减少了字体图标使用成本。


### 使用

在图标项目中设置`推送地址`之后，启动推送工具，可以在编辑图标完毕之后点击`同步`按钮一键推送生成的字体文件到指定位置。

例如推送地址为：`http://127.0.0.1:8861/src/css/bdfont.font`

则`同步工具保存`bdfont.ttf`,`bdfont.woff`,`bdfont.svg`等文件到当前项目的`src/css`目录。

详情请查看[百度字体平台帮助文档](http://fontstore.baidu.com/static/help/index.html#saveto)

### 下载

```shell
$ [sudo] npm install fontstore -g
```

### 启动


```shell
# 默认端口号8861
$ fontstore
# 指定端口号
$ fontstore -p <port>

```
