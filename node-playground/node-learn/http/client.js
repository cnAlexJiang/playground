

// https://juejin.cn/post/6844903573709389837#heading-1

const http = require('http')

function fetch1 () {
  const options = {
    host: 'localhost',
    port: 8081,
    method: 'get',
    path: '/post'
  }
  
  let req = http.request(options)
  // 当服务器把请求体发回来的时候，或者说客户端接受到响应的时候
  req.on('response', (res) => {
    let result = []
    res.on('data', (data) => {
      result.push(data)
    })
    res.on('end', () => {
      let str = Buffer.concat(result)
      console.log(str.toString())
    })
  })
  //只有调用end()才会真正向服务器发请求
  req.end()
}

function fetch2(){
  let options = {
    host: 'localhost',
    port: 8081,
    method: 'POST',
    path: '/post',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  let req = http.request(options) //请求并没发出
  
  // 当服务器把请求体发回来的时候，或者说客户端接受到响应的时候
  req.on('response', (res) => {
    let result = []
    res.on('data', (data) => {
      result.push(data)
    })
    res.on('end', (data) => {
      let str = Buffer.concat(result)
      console.log(str.toString())
    })
  })
  
  // 向请求体写数据
  req.write('{"name": "zfpx"}')
  // 是结束写入请求体，只有调用end()才会真正向服务器发请求
  req.end()
  
}

fetch2()