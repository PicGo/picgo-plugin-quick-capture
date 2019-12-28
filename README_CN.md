## picgo-plugin-quick-capture

[![PicGo Convention](https://img.shields.io/badge/picgo-convention-blue.svg?style=flat-square)](https://github.com/PicGo/bump-version)
[![PicGo](https://img.shields.io/badge/picgo-%3E%3D2.2.0-blue?style=flat-square)](https://github.com/Molunerfinn/PicGo)
[![latest release](https://img.shields.io/github/package-json/v/PicGo/picgo-plugin-quick-capture.svg?style=flat-square)](https://github.com/PicGo/picgo-plugin-quick-capture/releases/latest)

一个能够通过快捷键截图并直接上传的PicGo插件。**仅支持PicGo v2.2.0+**

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/PicGo/quick-catp.gif)

## 特性

通过快捷键一键完成：`截图-上传-获取图片URL链接-URL链接保存到剪贴板` 的工作流。

## 配置

本插件的原理是通过调用命令行脚本来执行截图，在截图程序退出之时把剪贴板的图片通过PicGo提供的[上传接口](https://picgo.github.io/PicGo-Core-Doc/zh/dev-guide/gui.html#upload-file)进行上传。

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/PicGo/20191228193440.png)

插件默认配置了 **Windows** 和 **MacOS** 的截图脚本，Linux 户需要按系统的不同，配置自己的截图脚本。你也可以配置自己喜欢的截图脚本。

**注意：** 配置的截图脚本必须满足以下两点要求

1. 可以通过命令行直接进入截图界面
2. 然后关闭截图界面之后脚本程序会退出

否则本插件无法如期运行。

## 快捷键配置

默认快捷键 `CmdOrCtrl+Shift+0`

可以打开PicGo主窗口，在 `PicGo设置` -> `修改快捷键` 处修改快捷键。

## 安装

打开 [PicGo](https://github.com/Molunerfinn/PicGo) 在 `插件设置` 界面搜索 `quick-capture` 安装插件。

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019 - Molunerfinn