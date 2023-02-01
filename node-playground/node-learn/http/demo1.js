var http = require('http');
let url = require('url')


http.createServer(function (request, response) {


  let { pathname, query } = url.parse(request.url, true)
  console.log(pathname) // /index.html
  console.log(query) // {name: 123}
  console.log(request.url) // /index.html?name=123
  console.log(request.headers) //获取请求头
 

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    // response.writeHead(200, {'Content-Type': 'text/plain'});


    response.writeHead(200, { // writeHead: 一旦调用会立刻向客户端发送
      'Content-Type': 'text/html;charset=utf8'
    })
    // 发送响应数据 "Hello World"

    response.statusCode = 400
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');