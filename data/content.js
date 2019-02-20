export default [
  {
    "excerpt": " ## 要求  1. 两边固定宽度,当中宽度自适应 2. 当中列要完整(显示 body 给个最小宽度) 3. 当中列要优先加载(中间列在 HTML 前面)  ```html <div id=\"middle\">middle</div> <div id=\"left\">left</div> <div id=\"right\">right</div> ```  ## 方法  ### 定位  ```css * ......",
    "tags": [
      "css"
    ],
    "id": 0,
    "title": "三列布局方法汇总",
    "lastUpdated": "2019-02-19 10:54:22",
    "path": "/posts/%E4%B8%89%E5%88%97%E5%B8%83%E5%B1%80%E6%96%B9%E6%B3%95%E6%B1%87%E6%80%BB.html"
  },
  {
    "excerpt": " 看到一个很简洁的工具函数,记录一下,  如果想将一个多维数组彻底的降维，可以这样实现:  ```js const flattenDeep = arr =>   Array.isArray(arr)     ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])     : [arr]; ``` ......",
    "tags": [
      "JavaScript"
    ],
    "id": 1,
    "title": "将一个多维数组彻底的降维",
    "lastUpdated": "2019-02-06 20:44:19",
    "path": "/posts/%E5%B0%86%E4%B8%80%E4%B8%AA%E5%A4%9A%E7%BB%B4%E6%95%B0%E7%BB%84%E5%BD%BB%E5%BA%95%E7%9A%84%E9%99%8D%E7%BB%B4.html"
  },
  {
    "excerpt": " ## JSONP  ### 实现背景  浏览器通常允许跨域资源嵌入,例如:  - < script >< /script > 标签嵌入跨域脚本。语法错误信息只能在同源脚本中捕捉到。 - < link rel=\"stylesheet\" > 标签嵌入 CSS。由于 CSS 的松散的语法规则，CSS 的跨域需要一个设置正确的 Content-Type 消息头。不同浏览器有不同的限制 - < img >......",
    "tags": [
      "HTTP",
      "浏览器"
    ],
    "id": 2,
    "title": "网络跨域解决方法合集",
    "lastUpdated": "2019-01-18 01:20:46",
    "path": "/posts/%E7%BD%91%E7%BB%9C%E8%B7%A8%E5%9F%9F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95%E5%90%88%E9%9B%86.html"
  },
  {
    "excerpt": " 借助 IE 本身提供的 hack  ```js var isIE = function(ver) {   var b = document.createElement('b');   b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';   return b.getElementsByTagName('i').length ==......",
    "tags": [
      "JavaScript",
      "浏览器"
    ],
    "id": 3,
    "title": "巧妙检测低版本ie",
    "lastUpdated": "2019-01-06 00:56:36",
    "path": "/posts/%E5%B7%A7%E5%A6%99%E6%A3%80%E6%B5%8B%E4%BD%8E%E7%89%88%E6%9C%ACie.html"
  },
  {
    "excerpt": "## 继承性 有一些属性，当给自己设置的时候，自己的后代都继承上了，这个就是继承性。  哪些属性能继承？ color、 text-开头的、line-开头的、font-开头的。 这些关于文字样式的，都能够继承； 所有关于盒子的、定位的、布局的属性都不能继承。 ## 层叠性 ### 含义 层叠性：就是css处理冲突的能力。 所有的权重计算，没有任何兼容问题！ ### 权重计算 优先级: - !impo......",
    "tags": [
      "css"
    ],
    "id": 4,
    "title": "CSS的继承性和层叠性",
    "lastUpdated": "2019-01-06 00:51:52",
    "path": "/posts/CSS%E7%9A%84%E7%BB%A7%E6%89%BF%E6%80%A7%E5%92%8C%E5%B1%82%E5%8F%A0%E6%80%A7.html"
  },
  {
    "excerpt": " ## 要求  参考饿了么的商店详情,文字少时,footer 在详情底下,多时在页面底部,文字超出页面时,文字隐藏在 footer 底下,往下拉文字 footer 不变,文字往上升  ## 实现方法  1. html,body{height: 100%;} 2. #wrap{min-height: 100%;overflow: hidden;} 3. #footer{height: 50px;ma......",
    "tags": [
      "css"
    ],
    "id": 5,
    "title": "footer布局，粘连布局",
    "lastUpdated": "2019-01-06 00:49:10",
    "path": "/posts/footer%E5%B8%83%E5%B1%80%EF%BC%8C%E7%B2%98%E8%BF%9E%E5%B8%83%E5%B1%80.html"
  },
  {
    "excerpt": " ## 子元素宽高固定  ```css /* 公共代码 */ .wp {   border: 1px solid red;   width: 300px;   height: 300px; }  .box {   background: green; }  .box.size {   width: 100px;   height: 100px; } /* 公共代码 */ ```  ### abso......",
    "tags": [
      "css"
    ],
    "id": 6,
    "title": "CSS实现水平垂直居中的方法总结",
    "lastUpdated": "2019-01-06 00:48:38",
    "path": "/posts/CSS%E5%AE%9E%E7%8E%B0%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95%E6%80%BB%E7%BB%93.html"
  },
  {
    "excerpt": " ## 对于行内元素  ```css text-align: center; ```  ## 对于确定宽度的块级元素  ### margin: 0 auto  ```css .center {   width: 960px;   margin-left: auto;   margin-right: auto; } ```  ### 绝对定位和 margin-left: -(宽度值/2)  ```c......",
    "tags": [
      "css"
    ],
    "id": 7,
    "title": "css实现元素水平居中的方法总结",
    "lastUpdated": "2019-01-06 00:48:11",
    "path": "/posts/css%E5%AE%9E%E7%8E%B0%E5%85%83%E7%B4%A0%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95%E6%80%BB%E7%BB%93.html"
  },
  {
    "excerpt": "![image](https://s2.ax1x.com/2019/01/06/FHC7gU.png)......",
    "tags": [
      "css"
    ],
    "id": 8,
    "title": "padding相关问题",
    "lastUpdated": "2019-01-06 00:47:43",
    "path": "/posts/padding%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98.html"
  },
  {
    "excerpt": " ## 单行文本以省略号结尾  ```css display: block; (隐藏属性)white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ```  ## 多行文本以省略号结尾  ### WebKit 浏览器或移动端的页面  ```css overflow: hidden; text-overflow: ellipsis......",
    "tags": [
      "css"
    ],
    "id": 9,
    "title": "溢出隐藏显示省略号",
    "lastUpdated": "2019-01-05 02:51:09",
    "path": "/posts/%E6%BA%A2%E5%87%BA%E9%9A%90%E8%97%8F%E6%98%BE%E7%A4%BA%E7%9C%81%E7%95%A5%E5%8F%B7.html"
  },
  {
    "excerpt": "![image](https://s2.ax1x.com/2019/01/05/FTj8j1.png)......",
    "tags": [
      "css"
    ],
    "id": 10,
    "title": "css样式相关属性",
    "lastUpdated": "2019-01-05 02:46:59",
    "path": "/posts/css%E6%A0%B7%E5%BC%8F%E7%9B%B8%E5%85%B3%E5%B1%9E%E6%80%A7.html"
  },
  {
    "excerpt": " ## 要求  左边宽度固定，右边自适应  定位,margin 负值等等方法不讲,因为 BFC 和 flex 都已经很完美解决两列布局  ## BFC  BFC 的区域不会与 float box 重叠。   步骤:  1. body{min-width: 600px;} 2. div{height: 200px;} 3. #left{width: 200px;float: left;} 4. #r......",
    "tags": [
      "css"
    ],
    "id": 11,
    "title": "两列布局方法汇总",
    "lastUpdated": "2019-01-05 01:35:46",
    "path": "/posts/%E4%B8%A4%E5%88%97%E5%B8%83%E5%B1%80%E6%96%B9%E6%B3%95%E6%B1%87%E6%80%BB.html"
  },
  {
    "excerpt": " ## 基本选择器  ### 通配符\\*  \\*就表示所有元素。效率不高，如果页面上的标签越多，效率越低，所以页面上不能出现这个选择器。  ### 标签选择器  所有的标签，都可以是选择器。无论这个标签藏的多深，一定能够被选择上。  ### 类选择器  类选择器的选择符是“.”。任何的标签都可以携带 class 属性，class 属性可以重复。同一个标签，可能同时属于多个类，用空格隔开。  - 不......",
    "tags": [
      "css"
    ],
    "id": 12,
    "title": "CSS选择器总结",
    "lastUpdated": "2019-01-05 01:19:39",
    "path": "/posts/CSS%E9%80%89%E6%8B%A9%E5%99%A8%E6%80%BB%E7%BB%93.html"
  },
  {
    "excerpt": " ## 兼容性  ![image](https://s2.ax1x.com/2019/01/03/FIhUJS.png) IE11 及以下不行(万恶的 IE)  ## Fetch polyfill  引入下面这些 polyfill 后可以完美支持 IE8+ ：  1. 由于 IE8 是 ES3，需要引入 ES5 的 polyfill: es5-shim, es5-sham 2. 引入 Promis......",
    "tags": [
      "HTTP",
      "浏览器"
    ],
    "id": 13,
    "title": "学习Fetch",
    "lastUpdated": "2019-01-04 00:28:10",
    "path": "/posts/%E5%AD%A6%E4%B9%A0Fetch.html"
  },
  {
    "excerpt": " 学习自[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html),自用!  ## 简介  CORS 是一个 W3C 标准，全称是\"跨域资源共享\"（Cross-origin resource sharing）。  CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE 浏览器不能低于 IE10。  浏览器将......",
    "tags": [
      "HTTP",
      "浏览器"
    ],
    "id": 14,
    "title": "CORS详解笔记",
    "lastUpdated": "2019-01-04 00:27:04",
    "path": "/posts/CORS%E8%AF%A6%E8%A7%A3%E7%AC%94%E8%AE%B0.html"
  },
  {
    "excerpt": " [学习参考文章:再也不学 AJAX 了！（二）使用 AJAX](https://segmentfault.com/a/1190000012237477),自用!  ## Ajax 简介  > Ajax 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML）。  > Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。  ......",
    "tags": [
      "HTTP",
      "浏览器"
    ],
    "id": 15,
    "title": "AJAX详解笔记",
    "lastUpdated": "2019-01-03 03:27:51",
    "path": "/posts/AJAX%E8%AF%A6%E8%A7%A3%E7%AC%94%E8%AE%B0.html"
  },
  {
    "excerpt": " 学习来自阮一峰的文章,本文只作为自己的总结和复习用.  ## 概述  1995 年，同源政策由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个政策。  同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。  它的含义是指，A 网页设置的 Cookie，B 网页不能打开，除非这两个网页\"同源\"。所谓\"同源\"指的是\"三个相同\"。  - 协议相同 - 域名相同 - 端口相同......",
    "tags": [
      "HTTP",
      "浏览器"
    ],
    "id": 16,
    "title": "浏览器同源政策总结",
    "lastUpdated": "2019-01-03 00:28:44",
    "path": "/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96%E6%80%BB%E7%BB%93.html"
  },
  {
    "excerpt": " ## 设置头  中间代理在 http 协议下, 很轻松就可以修改 header 头, 比如常见的手机中国移动等运营商的广告.  ```js server {   listen      80;   server_name test.com;    location / {     proxy_pass http://127.0.0.1:8888;     # 如果不设置就是 http://127......",
    "tags": [
      "Nginx",
      "HTTP"
    ],
    "id": 17,
    "title": "Nginx和HTTP",
    "lastUpdated": "2019-01-02 00:03:40",
    "path": "/posts/Nginx%E5%92%8CHTTP.html"
  },
  {
    "excerpt": " HTTP 的知识新手也许感觉没什么重要的,但是随着学习的加深,它就会变得越来越重要,限制人的技术的高度和深度,例如一个 HTTP 请求失败的分析,和后端讨论方案等等,都会让你畏手畏脚,底气不足.  ## 五层网络模型  ![五层网络模型](https://s1.ax1x.com/2018/12/31/F4UWo6.md.png)  我们一般在讲解网络信息传输的时候,都会套用一个五层模型来诠释.在......",
    "tags": [
      "HTTP"
    ],
    "id": 18,
    "title": "HTTP协议学习",
    "lastUpdated": "2019-01-01 01:48:44",
    "path": "/posts/HTTP%E5%8D%8F%E8%AE%AE%E5%AD%A6%E4%B9%A0.html"
  },
  {
    "excerpt": " ## 简介  CSS3 弹性盒子(Flexible Box 或 Flexbox)，是一种用于在页面上布置元素的布局模式，使得当页面布局必须适应不同的屏幕尺寸和不同的显示设备时，元素可预测地运行/列。对于许多应用程序，弹性盒子模型提供了对块模型的改进，因为它不使用浮动，flex 容器的边缘也不会与其内容的边缘折叠。  ### 注意点  弹性盒模型,分老版与新版,老版本的我们通常称之为 box,新版......",
    "tags": [
      "css"
    ],
    "id": 19,
    "title": "从用途出发总结flex布局",
    "lastUpdated": "2018-12-19 00:11:46",
    "path": "/posts/%E4%BB%8E%E7%94%A8%E9%80%94%E5%87%BA%E5%8F%91%E6%80%BB%E7%BB%93flex%E5%B8%83%E5%B1%80.html"
  },
  {
    "excerpt": " ## 概念  - 数据绑定(model==>View):一旦更新了 data 中的某个属性数据,所有界面上直接使用或间接使用了此属性的节点都会更新 - 数据劫持:数据劫持是 vue 中用来实现数据绑定的一种技术   - 基本思想: 通过 defineProperty()来监视 data 中所有属性(任意层次)数据的变化, 一旦变化就去更新界面  ## 数据劫持:Observer()  - 在 n......",
    "tags": [
      "源码",
      "JavaScript",
      "Vue.js"
    ],
    "id": 20,
    "title": "mvvm源码初体验(3):数据绑定",
    "lastUpdated": "2018-12-18 02:41:38",
    "path": "/posts/mvvm%E6%BA%90%E7%A0%81%E5%88%9D%E4%BD%93%E9%AA%8C-3-%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.html"
  },
  {
    "excerpt": " mvvm 实现模板解析的关键对象是 compile 对象,它在 compile.js 中,它是一个构造函数,在 mvvm.js 中的构造方法中运行,本文的模板解析只发生在 new MVVM 时运行一次:  ```js // 创建一个用来编译模板的compile对象 this.$compile = new Compile(options.el || document.body, this); ``......",
    "tags": [
      "源码",
      "JavaScript",
      "Vue.js"
    ],
    "id": 21,
    "title": "mvvm源码初体验(2):模板解析",
    "lastUpdated": "2018-12-17 02:51:45",
    "path": "/posts/mvvm%E6%BA%90%E7%A0%81%E5%88%9D%E4%BD%93%E9%AA%8C-2-%E6%A8%A1%E6%9D%BF%E8%A7%A3%E6%9E%90.html"
  },
  {
    "excerpt": " 参考 Vue.js,作为一个 MVVM 框架的基本实现原理要包括:  - 数据代理 - 模板解析 - 数据绑定  本文不直接阅读 Vue 的源码,而是剖析 github 上仿 vue 实现的[mvvm](https://github.com/DMQ/mvvm)库,为以后阅读 Vue 源码打基础.  ## 知识准备  ### DocumentFragment  引用[MDN](https://de......",
    "tags": [
      "源码",
      "JavaScript",
      "Vue.js"
    ],
    "id": 22,
    "title": "mvvm源码初体验(1):数据代理",
    "lastUpdated": "2018-12-16 23:17:34",
    "path": "/posts/mvvm%E6%BA%90%E7%A0%81%E5%88%9D%E4%BD%93%E9%AA%8C-1-%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86.html"
  },
  {
    "excerpt": " ## 第一种:单独文件  第一种是分开单独文件,需要用到 bus 的每个文件单独 import 一次.  ### Bus.js  添加一个 Bus.js 文件,里面代码如下:  ```js import Vue from 'vue'; export default new Vue(); ```  ### 组件 1  ```js import Bus from './Bus'  export de......",
    "tags": [
      "Vue.js"
    ],
    "id": 23,
    "title": "vue2利用Bus.js进行兄弟(非父子)间组件通信",
    "lastUpdated": "2018-12-13 01:21:11",
    "path": "/posts/vue2%E5%88%A9%E7%94%A8Bus-js%E8%BF%9B%E8%A1%8C%E5%85%84%E5%BC%9F-%E9%9D%9E%E7%88%B6%E5%AD%90-%E9%97%B4%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    "excerpt": " ## 参数和返回值设计  - ...paths < string > 路径或路径片段的序列。 - 返回: < string >  接受任意个字符串类型的参数,返回一个字符串值.   生成的路径是规范化后的，且末尾的斜杠会被删除，除非路径是根目录。  ```js console.log(path.resolve('a/')); //c:\\Users\\19624\\Desktop\\demo\\a ```......",
    "tags": [
      "Node.js",
      "API"
    ],
    "id": 24,
    "title": "Node.js的path.resolve返回值快速总结",
    "lastUpdated": "2018-11-27 02:03:09",
    "path": "/posts/Node-js%E7%9A%84path-resolve%E8%BF%94%E5%9B%9E%E5%80%BC%E5%BF%AB%E9%80%9F%E6%80%BB%E7%BB%93.html"
  },
  {
    "excerpt": " ## 模块简述  模块（Modules）是使用不同方式加载的 JS 文件（与 JS 原先的脚本加载方式相对）。这种不同模式很有必要，因为它与脚本（script）有大大不同的语义：  - 模块代码自动运行在严格模式下，并且没有任何办法跳出严格模式； - 在模块的顶级作用域创建的变量，不会被自动添加到共享的全局作用域，它们只会在模块顶级作用域的内部存在； - 模块顶级作用域的 this 值为 und......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 25,
    "title": "【读书笔记】ES6之模块",
    "lastUpdated": "2018-11-25 03:53:47",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8B%E6%A8%A1%E5%9D%97.html"
  },
  {
    "excerpt": " ## 类的修饰  基本上，修饰器的行为就是下面这样。修饰器是一个对类进行处理的函数。修饰器函数的第一个参数，就是所要修饰的目标类。  ```js @decorator class A {}  // 等同于 class A {} A = decorator(A) || A; ```  如果觉得一个参数不够用，可以在修饰器外面再封装一层函数。  ```js function testable(isT......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 26,
    "title": "【读书笔记】ES6之修饰器(Decorator)",
    "lastUpdated": "2018-11-24 04:00:35",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8B%E4%BF%AE%E9%A5%B0%E5%99%A8-Decorator.html"
  },
  {
    "excerpt": " ## 语法  ### ES5 中的仿类结构  ```js function Point(x, y) {   this.x = x;   this.y = y; } Point.prototype.toString = function() {   return '(' + this.x + ', ' + this.y + ')'; }; var p = new Point(1, 2); ``` ......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 27,
    "title": "【读书笔记】ES6之JS的类和类继承",
    "lastUpdated": "2018-11-23 23:25:55",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8BJS%E7%9A%84%E7%B1%BB%E5%92%8C%E7%B1%BB%E7%BB%A7%E6%89%BF.html"
  },
  {
    "excerpt": " ## 含义  async 函数是什么？一句话，它就是 Generator 函数的语法糖。  ```js const asyncReadFile = async function() {   const f1 = await readFile('/etc/fstab');   const f2 = await readFile('/etc/shells');   console.log(f1.to......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 28,
    "title": "【读书笔记】ES6之async函数",
    "lastUpdated": "2018-11-23 05:53:40",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8Basync%E5%87%BD%E6%95%B0.html"
  },
  {
    "excerpt": " ## 传统异步方法  ES6 诞生以前，异步编程的方法，大概有下面四种。  - 回调函数 - 事件监听 - 发布/订阅 - Promise 对象  Generator 函数将 JavaScript 异步编程带入了一个全新的阶段。  ## 基本概念  ### 异步  所谓\"异步\"，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 29,
    "title": "【读书笔记】ES6之Generator 函数的异步应用",
    "lastUpdated": "2018-11-23 04:30:25",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8BGenerator-%E5%87%BD%E6%95%B0%E7%9A%84%E5%BC%82%E6%AD%A5%E5%BA%94%E7%94%A8.html"
  },
  {
    "excerpt": " ## 简介  Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。   执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。   调用 Generator 函数后，该函数并不执......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 30,
    "title": "【读书笔记】ES6之生成器（generator）",
    "lastUpdated": "2018-11-23 02:04:18",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8B%E7%94%9F%E6%88%90%E5%99%A8%EF%BC%88generator%EF%BC%89.html"
  },
  {
    "excerpt": " ## 何为 Iterator（遍历器）  JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了 Map 和 Set。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是 Map，Map 的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。   遍历器（Iterator）就是这样一种机......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 31,
    "title": "【读书笔记】ES6之Iterator 和 for...of 循环",
    "lastUpdated": "2018-11-22 15:21:43",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8BIterator-%E5%92%8C-for-of-%E5%BE%AA%E7%8E%AF.html"
  },
  {
    "excerpt": " ## Promise 基础  ### Promise 简介  Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 Promise 对象。   从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 32,
    "title": "【读书笔记】ES6之Promise对象",
    "lastUpdated": "2018-11-22 04:00:39",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8BPromise%E5%AF%B9%E8%B1%A1.html"
  },
  {
    "excerpt": " ## 对象字面量语法的扩展  ### 属性初始化器的速记法  ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值。  ```js const foo = 'bar'; const baz = { foo }; baz; // {foo: \"bar\"}  // 等同于 const baz = { f......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 33,
    "title": "【读书笔记】ES6之对象的扩展",
    "lastUpdated": "2018-11-19 04:58:16",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8B%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95.html"
  },
  {
    "excerpt": " ## 扩展运算符  扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。该运算符主要用于函数调用。  ```js console.log(...[1, 2, 3]) // 1 2 3 console.log(1, ...[2, 3, 4], 5) // 1 2 3 4 5 [...document.querySelectorAll('......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 34,
    "title": "【读书笔记】ES6之数组的扩展",
    "lastUpdated": "2018-11-18 03:23:00",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8B%E6%95%B0%E7%BB%84%E7%9A%84%E6%89%A9%E5%B1%95.html"
  },
  {
    "excerpt": " ## 函数参数的默认值  ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。   ES6 之前：  ```js function makeRequest(url, timeout, callback) {   timeout = typeof timeout !== 'undefined' ? timeout : 2000;   callback = typeof callback ......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 35,
    "title": "【读书笔记】ES6之函数的扩展",
    "lastUpdated": "2018-11-17 04:14:01",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8B%E5%87%BD%E6%95%B0%E7%9A%84%E6%89%A9%E5%B1%95.html"
  },
  {
    "excerpt": " ## 更好的 Unicode 表示法  在 ES6 之前，JS 的字符串以 16 位字符编码（UCS-2）为基础。每个 16 位序列都是一个码元（code unit），用于表示一个字符。字符串所有的属性与方法（像是 length 属性与 charAt()方法）都是基于 16 位的码元。当然，16 位曾经足以容纳任何字符，然而由于 Unicode 引入了扩展字符集，这就不再够用了。这种表示法只限于......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 36,
    "title": "【读书笔记】ES6之字符串的扩展",
    "lastUpdated": "2018-11-16 18:34:15",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8B%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%89%A9%E5%B1%95.html"
  },
  {
    "excerpt": " ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。  ## 谁可以解构  数组可以用数组解构，对于 Set 结构，也可以使用数组的解构赋值。   解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。  ```js let [x, y, z] = new Set(['a', 'b', 'c']); x; // \"a\" ```......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 37,
    "title": "【读书笔记】ES6之解构赋值",
    "lastUpdated": "2018-11-16 03:29:33",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8B%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC.html"
  },
  {
    "excerpt": " ## var(掌握)  ### 不区分变量和常量  用 var 声明的变量都是变量，都是可变的，我们可以随便对它进行运算操作。这样当多个人进行同一个项目时，区分变量和常量会越来越难，一不小心就会把设计为常量的数据更改了。  ### 允许重新声明  在相同作用域下用 var 声明的一个变量，当再次声明时，程序不会报错，并且会把该变量重新赋值。  ### 存在变量提升  变量在声明它们的脚本或函数中......",
    "tags": [
      "ECMAScript 6",
      "读书笔记"
    ],
    "id": 38,
    "title": "【读书笔记】ES6之用let,const和用var来声明变量的区别",
    "lastUpdated": "2018-11-15 16:29:26",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91ES6%E4%B9%8B%E7%94%A8let-const%E5%92%8C%E7%94%A8var%E6%9D%A5%E5%A3%B0%E6%98%8E%E5%8F%98%E9%87%8F%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    "excerpt": " ## 函数定义（掌握）  &emsp;&emsp;函数使用 function 关键字来定义，它可以用在函数定义表达式或者函数声明语句里。在两种形式中，函数定义都从 function 关键字开始，其后跟随这些组成部分：  - 函数名称标识符。函数名称是函数声明语句必需的部分。它的用途就像变量的名字，新定义的函数对象会赋值给这个变量。对函数定义表达式来说，这个名字是可选的：如果存在，该名字只存在于函......",
    "tags": [
      "读书笔记",
      "《JavaScript权威指南》"
    ],
    "id": 39,
    "title": "【读书笔记】《JavaScript权威指南》第8章函数",
    "lastUpdated": "2018-11-13 04:34:41",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91%E3%80%8AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%E3%80%8B%E7%AC%AC8%E7%AB%A0%E5%87%BD%E6%95%B0.html"
  },
  {
    "excerpt": " ## 数组简介（了解）  &emsp;&emsp;数组是值的有序集合。每个值叫做一个元素，而每个元素在数组中有一个位置，以数字表示，称为索引。   &emsp;&emsp;JavaScript 数组是无类型的：数组元素可以是任意类型，并且同一个数组中的不同元素也可能有不同的类型。数组的元素甚至也可能是对象或其他数组，这允许创建复杂的数据结构，如对象的数组和数组的数组。   &emsp;&emsp......",
    "tags": [
      "读书笔记",
      "《JavaScript权威指南》"
    ],
    "id": 40,
    "title": "【读书笔记】《JavaScript权威指南》第7章数组",
    "lastUpdated": "2018-11-08 04:10:03",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91%E3%80%8AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%E3%80%8B%E7%AC%AC7%E7%AB%A0%E6%95%B0%E7%BB%84.html"
  },
  {
    "excerpt": " ## 对象简述（了解）  &emsp;&emsp;对象是 JavaScript 的基本数据类型。对象是一种复合值：它将很多值（原始值或者其他对象）聚合在一起，可通过名字访问这些值。对象也可看做是属性的无序集合，每个属性都是一个名/值对。属性名是字符串，因此我们可以把对象看成是从字符串到值的映射。这种基本数据结构还有很多种叫法，有些我们已然非常熟悉，比如“散列”（hash）、 “散列表”（hash......",
    "tags": [
      "读书笔记",
      "《JavaScript权威指南》"
    ],
    "id": 41,
    "title": "【读书笔记】《JavaScript权威指南》第6章对象",
    "lastUpdated": "2018-11-03 02:44:04",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91%E3%80%8AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%E3%80%8B%E7%AC%AC6%E7%AB%A0%E5%AF%B9%E8%B1%A1.html"
  },
  {
    "excerpt": " ## 前言  &emsp;&emsp;表达式在 JavaScript 中是短语，那么语句（statement）就是 JavaScript 整句或命令。表达式计算出一个值，但语句用来执行以**使某件事发生**。   &emsp;&emsp;“使某件事发生”的一个方法是计算带有副作用的表达式。诸如赋值和函数调用这些有副作用的表达式，是可以作为单独的语句的，这种把表达式当做语句的用法也称做表达式语句（......",
    "tags": [
      "读书笔记",
      "《JavaScript权威指南》"
    ],
    "id": 42,
    "title": "【读书笔记】《JavaScript权威指南》第5章语句",
    "lastUpdated": "2018-11-02 00:58:06",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91%E3%80%8AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%E3%80%8B%E7%AC%AC5%E7%AB%A0%E8%AF%AD%E5%8F%A5.html"
  },
  {
    "excerpt": " &emsp;&emsp;为什么要理解表达式，运算符和语句呢？抛开可以加深你对计算机语言语法的理解这种有一些虚幻缥缈的原因，最直接的原因是我们在面试题上会遇到，它们经常会把语句写的长长的，错综复杂，不加分号和空格，然后问你运行结果，这时候就考你什么是语句，表达式，什么会触发计算，怎么把它断句，组成正确的运行顺序。  ## 概念（掌握）  ### 表达式  &emsp;&emsp;表达式（expre......",
    "tags": [
      "读书笔记",
      "《JavaScript权威指南》"
    ],
    "id": 43,
    "title": "【读书笔记】《JavaScript权威指南》第4章表达式和运算符",
    "lastUpdated": "2018-10-29 04:27:00",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91%E3%80%8AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%E3%80%8B%E7%AC%AC4%E7%AB%A0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%92%8C%E8%BF%90%E7%AE%97%E7%AC%A6.html"
  },
  {
    "excerpt": " ## 概念（了解）  &emsp;&emsp;计算机程序的运行需要对值（value）进行操作。   &emsp;&emsp;在编程语言中，能够表示并操作的值的类型称做数据类型（type），编程语言最基本的特性就是能够支持多种数据类型。   &emsp;&emsp;当程序需要将值保存起来以备将来使用时，便将其赋值给（将值“保存”到）一个变量（variable）。变量是一个值的符号名称，可以通过名称......",
    "tags": [
      "读书笔记",
      "《JavaScript权威指南》"
    ],
    "id": 44,
    "title": "【读书笔记】《JavaScript权威指南》第3章类型、值和变量",
    "lastUpdated": "2018-10-26 01:46:07",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91%E3%80%8AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%E3%80%8B%E7%AC%AC3%E7%AB%A0%E7%B1%BB%E5%9E%8B%E3%80%81%E5%80%BC%E5%92%8C%E5%8F%98%E9%87%8F.html"
  },
  {
    "excerpt": " ## 词法结构的概念  &emsp;&emsp;编程语言的词法结构是一套基础性规则，用来描述如何使用这门语言来编写程序。   &emsp;&emsp;作为语法的基础，它规定了诸如变量名是什么样的、怎么写注释，以及程序语句之间如何分隔等规则。  ## 字符集  ### 范围（掌握）  &emsp;&emsp;JavaScript 程序是用 Unicode 字符集编写的。Unicode 是 ASCI......",
    "tags": [
      "读书笔记",
      "《JavaScript权威指南》"
    ],
    "id": 45,
    "title": "【读书笔记】《JavaScript权威指南》第2章词法结构",
    "lastUpdated": "2018-10-25 20:57:26",
    "path": "/posts/%E3%80%90%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E3%80%91%E3%80%8AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%E3%80%8B%E7%AC%AC2%E7%AB%A0%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84.html"
  },
  {
    "excerpt": " &nbsp;&nbsp;&nbsp;&nbsp;随着互联网的发展，单个网页要呈现的内容越来越多，例如淘宝，京东类的电商网页，csdn,segmentfault 类的博客文章网页，还有许多网页都需要回到顶部功能，今天我们就来探索一下，看看怎么写回到顶部功能才能更好适应业务需求。   &nbsp;&nbsp;&nbsp;&nbsp;本文打算面向的是网页初学者或者一些平时工作没有注意到这方面的朋友，希......",
    "tags": [
      "css",
      "JavaScript",
      "css demo",
      "JavaScript demo"
    ],
    "id": 46,
    "title": "回到顶部功能的探究",
    "lastUpdated": "2018-09-10 11:10:22",
    "path": "/posts/%E5%9B%9E%E5%88%B0%E9%A1%B6%E9%83%A8%E5%8A%9F%E8%83%BD%E7%9A%84%E6%8E%A2%E7%A9%B6.html"
  },
  {
    "excerpt": " &nbsp;&nbsp;&nbsp;&nbsp;很多程序员知道 vertical-align 的作用,但是对于 vertical-align 到底怎么对齐的和它的适用对象却一知半解，因此经常遇到 vertical-align 不起作用的问题，今天我们就来说说 vertical-align。   &nbsp;&nbsp;&nbsp;&nbsp;不过 vertical-align 属性牵扯到的知识实......",
    "tags": [
      "css"
    ],
    "id": 47,
    "title": "深入掌握vertical-align",
    "lastUpdated": "2018-09-03 00:06:34",
    "path": "/posts/%E6%B7%B1%E5%85%A5%E6%8E%8C%E6%8F%A1vertical-align.html"
  },
  {
    "excerpt": " &nbsp;&nbsp;&nbsp;&nbsp;在前端工作中经常会出现好多三角形，比如下拉图标、tooltip 提示框、多级菜单等，如果将三角形变成图片，通过 img 标签的 src 或者 background 中的 url 来访问，会增加 http 请求的个数，从前端性能方面来看这并不好，所以对于普通的三角形，我们要用 css 来画三角形.   &nbsp;&nbsp;&nbsp;&nbsp;......",
    "tags": [
      "css",
      "css demo"
    ],
    "id": 48,
    "title": "用css来实现实心三角形，空心三角形和三角指示箭头，兼容到ie6",
    "lastUpdated": "2018-08-30 22:59:48",
    "path": "/posts/%E7%94%A8css%E6%9D%A5%E5%AE%9E%E7%8E%B0%E5%AE%9E%E5%BF%83%E4%B8%89%E8%A7%92%E5%BD%A2%EF%BC%8C%E7%A9%BA%E5%BF%83%E4%B8%89%E8%A7%92%E5%BD%A2%E5%92%8C%E4%B8%89%E8%A7%92%E6%8C%87%E7%A4%BA%E7%AE%AD%E5%A4%B4%EF%BC%8C%E5%85%BC%E5%AE%B9%E5%88%B0ie6.html"
  },
  {
    "excerpt": " ## 版本控制简介  ### 版本控制  工程设计领域中使用版本控制管理工程蓝图的设计过程。在 IT 开发过程中也可以使用版本控制思想管理代码的版本迭代。  ### 版本控制工具  集中式版本控制工具：CVS、**SVN**、VSS…… 分布式版本控制工具：**Git**、Mercurial、Bazaar、Darcs……  ### 版本控制工具应该具备的功能  1. 协同修改      多人并行......",
    "tags": [
      "git",
      "GitHub"
    ],
    "id": 49,
    "title": "git学习总结",
    "lastUpdated": "2018-08-29 17:16:00",
    "path": "/posts/git%E5%AD%A6%E4%B9%A0%E6%80%BB%E7%BB%93.html"
  },
  {
    "excerpt": " ## Markdown 与 HTML 的关联  - Markdown 兼容 HTML，可以用 HTML 的许多样式标签来设计修饰 Markdown 的文本。  - HTML 的区段标签如 span、cite、del 可以在 Markdown 的段落、列表或是标题里随意使用。甚至可以不用 Markdown 格式，而直接采用 HTML 标签来格式化。  - HTML 区块内不兼容 Markdown ......",
    "tags": [
      "Markdown"
    ],
    "id": 50,
    "title": "Markdown语法要点",
    "lastUpdated": "2018-08-20 00:00:00",
    "path": "/posts/Markdown%E8%AF%AD%E6%B3%95%E8%A6%81%E7%82%B9.html"
  }
];