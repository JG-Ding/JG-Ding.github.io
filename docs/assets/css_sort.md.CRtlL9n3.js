import{_ as i,c as t,o as e,a1 as l}from"./chunks/framework.CuxCtyIg.js";const m=JSON.parse('{"title":"css属性的分类","description":"","frontmatter":{},"headers":[],"relativePath":"css/sort.md","filePath":"css/sort.md"}'),a={name:"css/sort.md"},o=l('<h1 id="css属性的分类" tabindex="-1">css属性的分类 <a class="header-anchor" href="#css属性的分类" aria-label="Permalink to &quot;css属性的分类&quot;">​</a></h1><p>尽管css属性的数量繁多，但是常用的属性就那么几个。结合笔者在实际开发中的经验，css的属性可以被分为两种，一种是<strong>结构属性</strong>，一种是<strong>外观属性</strong>。在项目中，结构样式影响到界面结构的展示，不正确的结构样式对界面排版的影响很大，而外观样式对界面排版的影响有限，并且是用户最需要订制的内容。所以，</p><blockquote><p><strong>有必要分离定义这两种属性的样式，在全局基础类定义外观样式，在组件局部定义结构样式。</strong></p></blockquote><p>因为，结构样式的固定性较大，一般只影响局部，而全局样式需要在全局范围内进行更换和定制，并形成统一，二者的使用差异决定了其定义的方式应当不同。</p><h2 id="细分结构样式和外观样式" tabindex="-1">细分结构样式和外观样式 <a class="header-anchor" href="#细分结构样式和外观样式" aria-label="Permalink to &quot;细分结构样式和外观样式&quot;">​</a></h2><ol><li>布局参数：display、标准流相关、float浮动相关、position定位和z-index相关、flex弹性布局相关</li><li>尺寸参数：width、height、max-width系列、margin、padding、border-width、font-size、line-height</li><li>文字样式：text-align、vertical-align、font-family、font-weight、text-decoration、text-style</li><li>颜色参数：color、background-color、background-image、border-color、outline-color</li><li>增效样式：border-radius、outline、box-shadow、opacity、filter、backdrop-filter</li><li>动画效果：transform、transition、animation</li><li>其他</li></ol><p>其中，1、2是结构样式，其他为外观样式。书写css规则的时候建议按照如上所给出的顺序，先书写结构样式，然后再书写外观样式。</p><h2 id="树状标签声明" tabindex="-1">树状标签声明 <a class="header-anchor" href="#树状标签声明" aria-label="Permalink to &quot;树状标签声明&quot;">​</a></h2><p>记住常见的语义化标签，使用标签名来进行树状声明，减少类名的定义负担，但是会带来dom的结构的强依赖性。</p><ol><li>万用分块：div、span、ul、ol、li、b、i、s、u、em、dl、dt、dd</li><li>文本分块：article、section、h1、h2、h3、h4、h5、h6、p</li><li>内容分块：header、menu、nav、aside、main、footer</li><li>特殊用途： <ul><li>t0级：input、img、a、button、br、hr；（input特殊类型：color拾色器、list combobox，搭配datalist、option，注意与select区分）</li><li>四大系列：form、svg、canvas、math；</li><li>t1级：table（tr+th+td+thead+tbody+tfoot+caption+colgroup+col）、textarea、video+object、details+summary、dialog、audio、select+option、map+area；</li><li>元数据：slot、meta、html、body、head、link、script、style、noscript、title、template、iframe、base；</li></ul></li></ol><ul><li>次级语义元素：em、del、ins、kbd、abbr、code、data、var、cite、wbr、pre；address、blockquote、strong、mark、search……</li></ul><h2 id="vue组件注意事项" tabindex="-1">vue组件注意事项 <a class="header-anchor" href="#vue组件注意事项" aria-label="Permalink to &quot;vue组件注意事项&quot;">​</a></h2><p>使用vue的scoped特性和scss的树状声明（嵌套不超过两层），提高结构样式的优先级，防止全局选择器污染结构样式。 在全局定义CSS变量，使需要更变的部分内容依赖于该CSS变量，通过改变CSS全局变量或者更换引用的全局基础类名，来达到更换皮肤的目的。这些需要更变的内容可以在全局基础类中，也可以在局部ID中。</p><h2 id="css开发常见技巧" tabindex="-1">css开发常见技巧 <a class="header-anchor" href="#css开发常见技巧" aria-label="Permalink to &quot;css开发常见技巧&quot;">​</a></h2><ul><li>使用单独的一张表定义所有z-index为CSS变量，集中进行管理；</li><li>使用全局基础类定义所有通用样式，如：“文本框”，“滚动框”，“浮动框”，“深色框”，“浅色框”等，注意，这些通用样式也需要基于全局原子样式。</li><li>border-width会影响content的显示，减少使用border，改用outline；</li><li>inline-block默认宽度就是它本身内容的宽度，不独占一行，但是之间会有空白缝隙，设置它上一级的 font-size 为 0，才会消除间隙；行内块元素的垂直对齐需要由vertical-align来控制，只有行内块元素才可以设置该属性并且生效，是设置在行内块元素上，并且影响他们之间的排布。</li><li>行内居中：水平：text-align:center，垂直：display:flex+align-items:center或者添加一个伪元素content:&#39;&#39;+display:inline-block+vertical-align:middle+height:100%或者line-height+CSS变量</li><li>width属性用于设置元素的宽度。width 默认设置的是该元素的内容区域的宽度，但如果box-sizing属性被设置为border-box，就转而设置边框区域的宽度。在使用百分比数值时，使用外层元素的内容宽度的百分比定义其宽度，但是如果该元素为绝对定位，则使用外层元素的width来定义起宽度。</li><li>行内块元素有时会在上下元素间产生间隙，这是由于vertical-align属性导致的。</li></ul>',15),r=[o];function s(n,c,d,h,p,u){return e(),t("div",null,r)}const g=i(a,[["render",s]]);export{m as __pageData,g as default};
