

// 创建一个继承自Person的匿名类
// 直接返回并替换原有的构造函数
function name(constructor) {
  console.log(11, constructor)
  return class extends constructor {
    name = 'Niko'
  }
}
// 修改原有属性的描述符
function seal(constructor) {
  let descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, 'sayHi')
  Object.defineProperty(constructor.prototype, 'sayHi', {
    ...descriptor,
    writable: false
  })
}


@seal
class Person {
  name = 123
  sayHi() {
    console.log(`My name is: ${this.name}`)
  }
}
new Person().sayHi()

Person.prototype.sayHi = 1 // 无效

console.log(Person)