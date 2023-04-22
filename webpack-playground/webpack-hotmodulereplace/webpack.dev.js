// webpack.dev.js

'use strict'

const path = require('path')
const webpack = require('webpack'); // 主要多了这一行

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出到哪个文件夹
    filename: 'output.js', // 输出的文件名
  },
  mode: 'development', // 开发模式
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist')  // contentBase是用来指定被访问html页面所在目录的；
    //但是我本地报错了，使用下面的语句
    static: path.resolve(__dirname, 'public'),
    hot: true, // 主要多了这一行
  },
  plugins: [
    //  主要多了这一行
    new webpack.HotModuleReplacementPlugin(),
  ],
}
