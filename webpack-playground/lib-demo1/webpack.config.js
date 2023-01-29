const path = require("path");

module.exports={
    mode:"production",
    entry:"./src/index.js",
    externals:["lodash"],// 配置不打包文件
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'[contenthash].bundle.js',
        library:"library",// 在全局变量中增加一个library变量
        libraryTarget:"umd"
    }
}