const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const lodash = require('lodash')
const { Configuration, OpenAIApi } = require('openai')
const app = express()
const port = 3000
app.use(cors())
// var options = {
//     inflate: true,
//     limit: '100kb',
//     type: 'application/octet-stream'
//   };
app.use(express.raw())
app.use(function (req, res, next) {
  var data = ''
  req.setEncoding('utf8')
  req.on('data', function (chunk) {
    data += chunk
  })

  req.on('end', function () {
    req.body = data
    next()
  })
})

app.use(express.json())

const configuration = new Configuration({
  apiKey: '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',
})
const openai = new OpenAIApi(configuration)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// POST method route
app.post('/ask', function (req, res) {
  console.log('aaa', req.body, typeof req.body)

  let body = {}
  try {
    body = JSON.parse(req.body)
  } catch (e) {
    console.log(e)
  }

  const { content } = body
  if (!content) {
    res.send('error')
    return
  }
  openai
    .createCompletion({
      model: 'text-davinci-003',
      prompt: content + ' \nA',
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['\n'],
    })
    .then((response) => {
      console.log(222, response.data)
      const data = response.data
      const temp = lodash.get(data, 'choices[0].text')
      if (temp) {
        res.send({
          res: temp,
        })
      } else {
        res.send({
          res: 'unKnown',
        })
      }
    })
})

app.get('/user', function (req, res) {
  const data = {
    name: 'aa',
    age: 22,
  }
  res.send(data)

  // res.send(JSON.stringify(data))
})
app.get('/api1', function (req, res) {
  const data = {
    name: '11',
    age: 11,
  }
  res.send(data)

  // res.send(JSON.stringify(data))
})
// app.get('/ask', function (req, res) {
//     const data = {
//         name: '11',
//         age: 11,
//     }
//     res.send(data)

//     // res.send(JSON.stringify(data))
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
