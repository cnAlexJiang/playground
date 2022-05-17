/**
 * 入口文件，引入 print 方法，并执行
 * 定义了一个 button 方法，为页面添加一个按钮，并为按钮设置了一个 onclick 事件，负责动态引入一个文件
 */
import { print } from './num.js'

print()
let c1=  require('./c1')
let c2=  require('./c2')
console.log('000',c1,c2)
c1.a= 789
c2 =789
function button() {
  const button = document.createElement('button')
  const text = document.createTextNode('click me')
  button.appendChild(text)
  button.onclick = (e) => {
   
    import('./info.js').then((res) => {
      console.log(111, res)
      res.log = 111
    })
    import('./info.js').then((res) => {
      console.log(111, res)
    })
    import('./info2.js').then((res) => {
      console.log(222, res)
      res.log = 111
    })
    import('./info2.js').then((res) => {
      console.log(222, res)
    })

    let c1=  require('./c1')
    let c2=  require('./c2')
    console.log('333',c1,c2)
  }



  return button
}

document.body.appendChild(button())
