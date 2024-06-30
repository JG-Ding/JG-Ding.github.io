# 图片格式
浏览器原生支持主流的图片格式
+ svg（Scalable Vector Graphics）。svg图片是基于xml语法的纯文本文件，因此它在Web上获得一等公民的兼容能力和支持度，能够直接内联到html当中，svg本身存储的是图形绘制的指令，记录了简单图形的绘制指令，本身能够使用滤镜、动画、渐变，并获得dom元素的身份与css进行联合控制，svg是web平台上相较于纯css更高一级的图形表达方式。适合存储简单的图片。支持透明色。
+ webp（Web Picture）。谷歌为了提高图片在网络上传输所开发的图片格式，提供了一种在Web上，保持非常高的图片质量的同时拥有大幅度压缩能力的图片格式，为了Web图片而生。支持透明色。
+ png（Portable Network Graphics）。PNG使用无损压缩技术和透明度支持，PNG支持透明背景和部分透明（alpha通道），在处理图标、徽标和需要透明背景的图像时非常有用。颜色深度高达48位的颜色深度，能够表现出非常丰富和细腻的颜色。
+ jpg（Joint Photographic Experts Group）。普通的无透明图片，支持很高的图片压缩能力。
+ ico（Icon File）。ICO 文件是一种用于存储计算机图标的图像文件格式，具有灵活的多尺寸支持和透明功能，非常适合Web网页的图标。在windows系统上使用较多。
+ gif（Graphics Interchange Format）。适合简单的动图，支持有限的色彩（256色编码）。支持透明色编码。

## vs code图片插件
+ [Draw.io Integration](https://github.com/hediet/vscode-drawio)。开源项目[draw.io](https://github.com/jgraph/drawio)的vs code集成，该项目是使用Web技术编写的流程图编辑器，内置了丰富的基本图形，包括表格等，其数据文件`.drawio`或者`.dio`是基于xml语法的纯文本文件，可以输入为svg、html和png文件，具有非常的高通用性。该插件，额外支持了`.drawio.svg`、`.drawio.png`、`.dio.svg`和`.dio.png`文件，在vs code中，该插件将覆盖默认文件行为。
+ [Luna Paint - Image Editor](https://github.com/lunapaint/vscode-luna-paint)。该插件覆盖了vs code的图片预览器，可以直接在vs code当中编辑图片，支持裁剪、绘制、基本图形、颜色填充等。
+ [Paste Image](https://github.com/mushanshitiancai/vscode-paste-image)。该插件主要用以将剪贴板中的图片直接粘贴到工作区目录当中，自动命名，并且在文件中粘贴该图片文件的名字，在`.md`文件中，将直接把引用链接粘贴进去。  