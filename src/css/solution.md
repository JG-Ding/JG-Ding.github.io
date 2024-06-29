# css解决方案
在工程化项目中，css的规模非常大，并且css本身具有混乱debuff，管理起来非常痛苦。css的解决方案有很多，但是多也造成了技术选型的困难。

## 常见的技术
1. css预处理器。代表技术**Sass**。Sass赋予了css一定的高级语言特性，增强了css简陋的语言能力，其中包括：
   + css模块化。通过`@use`和`@forward`指令实现，在一定程度上解决了，css的样式模块管理和样式隔离；
   + 变量、数据容器。分别通过`$`符号和`#{}`插值语法，`list`和`map`等进行使用，增加了css语言的动态性和灵活性，减少了代码冗余；
   + 流程控制和函数。分别通过`@for`、`@while`、`@if`等流程控制语句进行使用，`@function`、`@return`和css函数调用，增加了代码逻辑的复用能力；
   + 继承和混入。通过`%`选择器和`@extend`，`@mixin`和`@include`进行使用，提高了css样式复用能力；
2. css后处理器，**PostCSS**技术。被广泛集成在打包工具中的技术，统一对css源代码进行额外的加工处理。PostCSS是一套css的处理流水线，上面的每一道工序都作为一个插件进行添加，开发者可以选择自己想要的对应技术进行灵活添加。常见的PostCSS插件有：
   + css module。在js中以JSON的形式导入css文件，返回开发时类名到混淆后的类名的映射，解决css命名冲突的问题。
   + autoprefixer。自动对css规则进行浏览器前缀添加。
   + nanocss。将css文件进行压缩和分包。
   + stylelint。对css文件进行lint检查。
   + preset env。对css较新的特性和语法进行polyfill和降级处理。
   + tailwindcss。css框架。预设类名工具集、预设主题设计系统。
   + ……
3. cij。css in js。在React框架的生态中广泛使用。主要的形式包括：
   + inline style，直接使用js object绑定到行内样式属性和行内css变量，js 联动 css首选方案。
   + style runtime，直接在js中写css文本、js object，返回混淆过的类名或者组件，通过style runtime自动在head里添加style标签或者link标签，如emotion、styled-component，基本满足需要普通开发需求，不能使用scss语法，不享受post css，不要进行响应式绑定(因为性能)。
   + styled-jsx，直接在jsx中写style元素，通过编译将style元素进行移除，从而生成style标签。
4. vue scoped。这是vue单文件编译能力的附加品，可以说是业界中非常全能的方案了，不过，在进行SSR渲染的时候，会导致html文件膨胀。

## tailwindcss
tailwind是css原子化框架，以css后处理器的形式实现，为css提供了一组开箱即用的原子类型、一套优雅规范的设计系统、一个简单易用的样式生成器，为开发者提供便利和约束。它显著提高开发效率的同时，提高了css的复用性和组合性。

### 主题系统
强大的预定义变体，可以灵活地定义原子级的样式，从而轻松更换，包含三个子系统
颜色系统colors、尺寸系统spacing、响应系统screens（responsive），三个子系统精确地抽象了平时开发中最常用的内容，并将其可操作化

### 指令
`@tailwind`指令可以让用户无须关心路径，对tailwind的内置资源进行导入。
`@apply`指令让用户在指定区域内展开一组tailwind类的内容。

### 内置资源
包括在三个layer中
1. 基础规则Base，在layer base层中，直接作用于普通元素的全局样式；
2. 工具集合Utilities，在layer utilities中，代表一个css样式的一系列预定义的原子值，表现为一个类名；
3. 组件Components，在layer components中，代表一个预定预定义的css class和样式，它可以被tailwind识别并加入tailwind的组合系统当中，表现为一组类名
+ 注：Utilities更加松散，为一些基础类，Components是成块的逻辑块，并且Component中的类一般依赖于已经定义好的Utilities，通过@apply衍生基础类

### 基本语法
```
Modifier:class
```
`Modifier`可以有多个，最后一个是class，这两个位置也可以是方括号中加上一个"任意值"，表示临时属性。

### 变体
变体Variant与修饰符Modifier，tailwind给定一个修饰符代表一个类别产生作用时需要的条件，它被抽象成一个Variant，同时具象为一个css选择器加上一个花括号，被修饰的component将被限定在其中，这使得tailwind可以简单抽象一种状态、一类元素、一个通用属性，并能够方便快捷地与其他类别进行组合。
这个操作相当于条件判断，只有满足了该条件再声明相应的样式。例如：`hover:`、`xl:`、`after:`等等。

### 任意值
任意值Arbitrary和声明式函数调用。
+ 类名位置处，`class1-[p1]`相当于调用动态Utilities "class1"或者动态Components "class1"函数，并传入参数"p1"，并产生动态样式，`[styleName:styleValue]`相当于退化为完全的行内样式，与style属性中填写的行内样式类似；
+ 修饰符位置处，`modi1-[p1]:`相当于调用动态Variant "modi1"，并出入参数"p1"，并产生动态条件，匹配动态的条件，`[atrr1=value1]`或者`[&:hover]`相当于退化为手动写选择器，需要有"&"站位,不占位则默认在最前面,"\["后面一个的位置处。