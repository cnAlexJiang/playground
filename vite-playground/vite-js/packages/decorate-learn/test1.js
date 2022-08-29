// 注意这里的 `target` 是 `Dog.prototype`
function readonly(target, key, descriptor) {

  console.log('readonly', target, key, descriptor)
  descriptor.writable = false
  // return descriptor
}

// 作用在类上的 decorator
// 作用在方法上的 decorator 接收的第一个参数（target）是类的 prototype；如果把一个 decorator 作用到类上，则它的第一个参数 target 是类本身：
// 这里的 `target` 是类本身
function doge (target) {
  console.log('doge',   arguments)
  target.isDoge = true
}



@doge
class Dog {
  @readonly
  bark () {
    return 'wang!wang!'
  }
}

let dog = new Dog();

console.log('Dog', Dog);
// dog.bark = 'bark!bark!'
console.log(111, dog)
// Cannot assign to read only property 'bark' of [object Object]