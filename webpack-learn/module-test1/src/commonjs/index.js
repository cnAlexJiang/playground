console.log("commonjs开始执行");
const { add } = require("./add");
document.write("1+1=", add(1, 1));