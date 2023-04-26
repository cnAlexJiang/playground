require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('trust proxy', '127.0.0.1:7890') // 指定

const port = 3000
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});



app.get('/events', function (req, res) {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')
  let count = 0
  const intervalId = setInterval(function () {
    const data = '当前时间：' + new Date().toLocaleTimeString()
    res.write('data: ' + data + '\n\n')
    count++
    if (count > 5) {
      clearInterval(intervalId)
    }
  }, 1000)

  res.on('close', function () {
    clearInterval(intervalId)
    console.log('Response closed');
  })
})

app.post('/api/gpt', (req, res) => {
  const { text } = req.body
  console.log(111, req.body, typeof req.body)
  const options = {
    url: 'https://api.openai.com/v1/chat/completions',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_SECRET_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: req.body,
    }),
  }

  request.post(options, (error, response, body) => {
    if (error) {
      res.status(500).send('Something went wrong')
    } else {
      const { choices } = JSON.parse(body)

      const { message } = choices[0]
      res.json({ message })
    }
  })
})

 
// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
  res.send(req.params.id);
});






app.listen(port, () => {
  console.log(`Server running at <http://localhost>:${port}`)
})
