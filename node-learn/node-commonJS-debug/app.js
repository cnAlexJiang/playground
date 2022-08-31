//index.js 浏览器debug
const http = require('http');


const log = () => {
  debugger
  var a = require('./a')
  console.log('入口模块引用a模块：',a)
}


const server = http.createServer((req, res) => {
  log('hello world')
  res.end('ok')
})
server.listen(9999, ()=>{
  console.log('hjahahahah  ')
})
