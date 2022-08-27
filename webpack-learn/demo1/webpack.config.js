//webpack 是node写出来的 要用node的写法
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
//首先引入插件
let MiniCssExtractPlugin = require('mini-css-extract-plugin')

//第一步：引入optimize-css-assets-webpack-plugin 和 uglifyjs-webpack-plugin插件

let optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devServer: {
    //开发服务器配置
    // port:3000,//设置端口号
    // progress:true,//打包的时候显示进度条
    // contentBase:'./dist',//指定目录作为打包后的静态服务的目录
    /*
			这个'./dist'目录一般是没有的，是需要自动生成的，那么这个时候就需要使用一个插件
			这个插件就是：'html-webpack-plugin'
				使用方法:
					1. npm i html-webpack-plugin -D
					2. 在webpack.config.js中require这个插件
					3. 配置plugins数组,如下文
				作用：将打包后的js文件插入的html中(DOM中)，然后结果输出到dist文件夹中

		*/
    open: true, //自动打开浏览器
    compress: true, //对所有的服务器资源采用gzip压缩,
    /*
		    采用gzip压缩的优点和缺点：
				优点：对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能
				缺点：服务端要对文件进行压缩，而客户端要进行解压，增加了两边的负载
		*/
  },
  mode: 'development', //模式，默认有两种： production development
  entry: './packages/index.js', //入口
  output: {
    filename: 'bundle.[hash:8].js', //打包后的文件名,:8代表只显示8位的hash
    path: path.resolve(__dirname, './dist'), //打包后的文件所存放的绝对路径。注意：路径必须是一个绝对路径
  },
  // module:{//  样式模块引入，写在module对象中，并且配置规则rules数组
  // 	rules:[
  // 		{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
  // 	]

  // },
  // module: {
  //   rules: [
  //     {
  //       test: '/.less$/',
  //       use: [
  //         {
  //           loader: 'style-loader',
  //           options: {
  //             inertAt: 'top', //如果没有这个配置，那么css是插在head标签的底部的，如果自己再需要在head写一些样式来覆盖打包后的css，那么就需要让打包后的样式在head标签的上面，而不是下面，这样自己写的就能够在下面了。所以可以使用这个属性和值使得打包的样式在上面
  //           },
  //         },
  //         'css-loader',
  //         'less-loader',
  //       ],
  //     },
  //   ],
  // },
  //最后修改loader，把style-loader改成MiniCssExtractPlugin.loader
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            //用babel-loader 把ES6->ES5
            presets: [
              //预设
              '@babel/preset-env',
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators",{"legacy":true}],//es7中对class的装饰器的转化（先）
              ["@babel/plugin-proposal-class-properties",{"loose":true}],//es7中对class新增语法的转化 (后)
              '@babel/plugin-transform-runtime', //把类似promise、generator等语法转化,另外还需要使用@babel/polyfill去转化类似includes的语法（这两者是生产依赖，不是开发依赖）
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, //表示把编译完成的css用link的方式插到HTML中
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, //表示把编译完成的css用link的方式插到HTML中,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },

  plugins: [
    //数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './public/index.html', //将打包后的文件插入到该html中
      filename: 'index.html', //插入后并且打包后的html文件
      minify: {
        removeAttributeQuotes: true, //删除属性的双引号
        collapseWhitespace: true, //删除折叠空行，也就是编译成一行
      },
      hash: true, //给生成的js文件，添加hash戳，解决缓存问题,即在打包生成的js后加?asdfbhde这类字符戳（注意，如果打包生成的js有hash，那就有两个hash，一个是打包生成的，一个是这个配置生成的，比如：bundle.ab24e2bd.js?ab24e2bd1cf2c8ab6a33）
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css', //抽离出来的css的文件mingcheng
    }),
  ],
  optimization: {
    //优化项
    minimizer: [
      new UglifyJsPlugin({
        cache: true, //是否缓存
        parallel: true, //是否并行打包，就是同时压缩多个
        sourceMap: true, //源码映射
      }),
      new optimizeCssAssetsPlugin({}),
    ],
  },
}
