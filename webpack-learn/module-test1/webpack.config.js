// webpack.config.js
const path = require("path");

module.exports = {
    entry: "./src/commonjs/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js",
    },
    devServer: {
        static: path.resolve(__dirname, "./dist"),
    },
    devtool: false,
};