var express = require('express') // 引入express模块

var query = require('./pool') // 引入数据库连接池文件
var sql = require('./sql') // sql语句文件

var app = express() // 创建express的实例

// get请求
app.get('/get-task-list', (req, res) => {
  query(sql.SELECT_TODOLIST_TABLE, (err, result, fields) => {
    if (err) {
      console.log('[SELECT ERROR]:', err.message)
    }
    res.send(result) // 服务器响应请求
  })
})

// post请求
app.post('/update-task-list', (req, res) => {
  query(sql.UPDATE_TODOLIST_TABLE, (err, result, fields) => {
    if (err) {
      console.log('[SELECT ERROR]:', err.message)
    }
    res.send(result)
  })
})

// 监听端口
app.listen(3000, () => {
  console.log('Server running at 3000 port')
})