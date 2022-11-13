
console.log('test.js')
import('./tmp.js').then((res)=>{
  console.log(res)
})

const a=  import('./tmp.js') 
console.log('a=',a)

const c = require('./c1.js')
console.log('c=',c)