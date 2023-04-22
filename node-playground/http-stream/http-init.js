const http = require('http');

/**
 * http.Server() 是基于事件的，主要事件有：request：最常用的事件，当客户端请求到来时，该事件被触发，提供req和res参数，表示请求和响应信息。connection：当Tcp连接建立时，该事件被触发，提供一个socket参数，是 net.Socket 的实例。close

 */
const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  })
  res.end("欢迎来到推啊！！！")
})

server.listen(3000, function () {
  console.log('listening port 3000')
})