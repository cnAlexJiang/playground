- [] 最基本的搭建 webpack.config.js 
- [] webpack-dev-server的使用 体验热跟新
- [] 学习 css-loader styles-loader + less+ less-loader 的配置和使用 
    - css-loader: 负责解析类似@import等语法的
    - style-loader：负责把css插入到head标签中
- [] loader 的两种写法了解
- [] 抽离CSS样式 学习  mini-css-extract-plugin
- [] 自动添加浏览器前缀
  - 为了让样式兼容各类浏览器，需要实现自动添加浏览器前缀。那么可以使用如下配置：
     npm i postcss-loader autoprefixer -D
- [] 对分离的css进行压缩
  -  需要使用optimize-css-assets-webpack-plugin插件，但是使用这个插件必须要使用压缩js的插件uglifyjs-webpack-plugin
   -  以上配置在生产环境下会报错，因为还没对js进行处理，使用babel配置就可以解决
    - webpack 5 不在需要这2个插件  变成了 内置的一些功能
- [] 重头戏 babel 来了
  - 第一步 
     add  babel-loader @babel/core   @babel/preset-env -D
  - 转化babel不能转化的语法 类似generator、promise不能被转化  
      add  @babel/plugin-transform-runtime  @babel/runtime -D
  - 除了上面的plugin之外，还有两个插件对es7的相关语法转化也有很大的帮助
    1. @babel/plugin-proposal-decorators  这是es7中对class的装饰器的转化（先）
    2. @babel/plugin-proposal-class-properties  这是es7中对class新增语法的转化 (后)