// const fs = require('fs')
// fs.readFile('/Users/alex/code/playground/node-demo/1.txt', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data.toString())
// })

const fs = require('fs')
const readFileWithPromise = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

async function readFile() {
  try {    
    console.log('000')
    var f1 = await readFileWithPromise('/Users/alex/code/playground/node-demo/1.txt')
    console.log(f1.toString())
    var f2 = await readFileWithPromise('/Users/alex/code/playground/node-demo/2.txt')
    console.log(f2.toString())
  } catch (err) {
    console.log(err)
  }
}
// readFile()


function* gen(x) {
  console.log('start')
  const y = yield x * 2
  return y
}

const g = gen(1)
console.log(g.next())
console.log(g.next(4))
