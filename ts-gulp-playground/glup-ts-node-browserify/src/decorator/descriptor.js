class Model1 {
  getData() {
    // 此处省略获取数据的逻辑
    return [{
      id: 1,
      name: 'Niko'
    }, {
      id: 2,
      name: 'Bellic'
    }]
  }
}

// console.log(new Model1().getData())     // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]
// console.log(Model1.prototype.getData()) // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]



// function wrap(Model, key) {
//   // 获取Class对应的原型
//   let target = Model.prototype

//   // 获取函数对应的描述符
//   let descriptor = Object.getOwnPropertyDescriptor(target, key)

//   // 生成新的函数，添加耗时统计逻辑
//   let log = function (...arg) {
//     let start = new Date().valueOf()
//     try {
//       return descriptor.value.apply(this, arg) // 调用之前的函数
//     } finally {
//       let end = new Date().valueOf()
//       console.log(`start: ${start} end: ${end} consume: ${end - start}`)
//     }
//   }

//   // 将修改后的函数重新定义到原型链上
//   Object.defineProperty(target, key, {
//     ...descriptor,
//     value: log      // 覆盖描述符重的value
//   })
// }

// wrap(Model1, 'getData')

// // start: XXX end: XXX consume: XXX
// console.log(new Model1().getData())     // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]
// // start: XXX end: XXX consume: XXX





// class 装饰器
function wrap(decorator) {
  return function (Model, key) {
    let target = Model.prototype
    let descriptor = Object.getOwnPropertyDescriptor(target, key) // 属性修饰符

    decorator(target, key, descriptor)
  }
}
// 重写 属性修饰符
let log = function (target, key, descriptor) {
  // 将修改后的函数重新定义到原型链上
  Object.defineProperty(target, key, {
    ...descriptor,
    value: function (...arg) {
      let start = new Date().valueOf()
      try {
        return descriptor.value.apply(this, arg) // 调用之前的函数
      } finally {
        let end = new Date().valueOf()
        console.log(`start: ${start} end: ${end} consume: ${end - start}`)
      }
    }
  })
}

// let seal = function (target, key, descriptor) {
//   Object.defineProperty(target, key, {
//     ...descriptor,
//     writable: false
//   })
// }

// // 参数的转换处理
log = wrap(log)
// seal = wrap(seal)

// // 添加耗时统计
log(Model1, 'getData')

// // 设置属性不可被修改
// seal(Model1, 'getData')
console.log(new Model1().getData())     // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]
