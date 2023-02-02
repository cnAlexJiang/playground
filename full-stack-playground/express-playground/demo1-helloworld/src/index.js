const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

