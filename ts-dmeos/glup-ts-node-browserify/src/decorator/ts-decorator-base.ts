// function tag(constructor: any) {
//   console.log(11,arguments, constructor === A) // true
//   return function test(){}
// }

// function method(target: any) {
//   console.log(22, arguments,target.constructor === A, target === A.prototype) // true, true
// }


// @tag
// class A { 
//   @method
//   hi () {}
// }
// console.log(A)