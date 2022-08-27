//webpack 是node写出来的 要用node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer:{ //开发服务器配置
		port:3000,//设置端口号
		progress:true,//打包的时候显示进度条
		contentBase:'./dist',//指定目录作为打包后的静态服务的目录
		/*
			这个'./dist'目录一般是没有的，是需要自动生成的，那么这个时候就需要使用一个插件
			这个插件就是：'html-webpack-plugin'
				使用方法:
					1. npm i html-webpack-plugin -D
					2. 在webpack.config.js中require这个插件
					3. 配置plugins数组,如下文
				作用：将打包后的js文件插入的html中(DOM中)，然后结果输出到dist文件夹中

		*/
		open:true,//自动打开浏览器
		compress:true,//对所有的服务器资源采用gzip压缩,
		/*
		    采用gzip压缩的优点和缺点：
				优点：对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能
				缺点：服务端要对文件进行压缩，而客户端要进行解压，增加了两边的负载
		*/

	},
	mode:'development',//模式，默认有两种： production development
	entry:'./src/index.js',  //入口
	output:{
		filename:'bundle.[hash:8].js', //打包后的文件名,:8代表只显示8位的hash
		path:path.resolve(__dirname,'./dist'),//打包后的文件所存放的绝对路径。注意：路径必须是一个绝对路径
	},
	plugins:[//数组 放着所有的webpack插件
		new HtmlWebpackPlugin({
			template:'./src/index.html',//将打包后的文件插入到该html中
			filename:'index.html',//插入后并且打包后的html文件
			minify:{
				removeAttributeQuotes:true,//删除属性的双引号
				collapseWhitespace:true,//删除折叠空行，也就是编译成一行
			},
			hash:true,//给生成的js文件，添加hash戳，解决缓存问题,即在打包生成的js后加?asdfbhde这类字符戳（注意，如果打包生成的js有hash，那就有两个hash，一个是打包生成的，一个是这个配置生成的，比如：bundle.ab24e2bd.js?ab24e2bd1cf2c8ab6a33）
		})
	]

}