## picgo-plugin-quick-capture

[![PicGo Convention](https://img.shields.io/badge/picgo-convention-blue.svg?style=flat-square)](https://github.com/PicGo/bump-version)
[![PicGo](https://img.shields.io/badge/picgo-%3E%3D2.2.0-blue?style=flat-square)](https://github.com/Molunerfinn/PicGo)
[![latest release](https://img.shields.io/github/package-json/v/PicGo/picgo-plugin-quick-capture.svg?style=flat-square)](https://github.com/PicGo/picgo-plugin-quick-capture/releases/latest)

[中文说明](https://github.com/PicGo/picgo-plugin-quick-capture/blob/dev/README_CN.md)

A quick capture screenshot plugin for PicGo. **Only supports PicGo v2.2.0+**

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/PicGo/quick-catp.gif)

## Feature

One-click to complete by shortcut: `Screenshot-Upload-Get Image URL Link-Save URL Link to Nano` workflow. 

## Configuration

The principle of this plugin is to execute a screenshot by calling a command line script, and upload the picture of the clipboard through the [upload api](https://picgo.github.io/PicGo-Core-Doc/zh/dev-guide/gui.html#upload-file) provided by PicGo when the screenshot program exits.

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/PicGo/20191228193440.png)

The plugin is configured with screenshot scripts for **Windows** and **MacOS** by default. You can also configure your favorite screenshot script.

**Linux** users need to configure your own screenshot scripts according to different systems.

**Notice** the configured screenshot script must meet the following two requirements:

1. Can directly enter the screenshot interface through the command line
2. After closing the screenshot interface, the script program will exit

Otherwise, this plugin cannot run as expected.

## Shortcut Configuration

Default shortcut key is: `CmdOrCtrl + Shift + 0`

You can open the main PicGo window, and modify the shortcuts at `PicGo 设置` -> `修改快捷键`.

## Installation

Open [PicGo](https://github.com/Molunerfinn/PicGo) and search for `quick-capture` in the `PicGo设置` interface to install the plugin.

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019 - Molunerfinn