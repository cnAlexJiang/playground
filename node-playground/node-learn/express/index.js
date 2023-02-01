const express = require('express')
const app = express()
const port = 8081
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // 处理json的请求体

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/post', (req, res, next) => {
  // console.log(req.body)
  console.log('get /post')
  res.send('111')
})
app.post('/post', (req, res, next) => {
  // console.log(req.body)
  console.log('post  /post')
  res.send('222')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})