// class A { 
//   constructor() {
//     this.aa =123
//   }
//   say () { return 1 }
//  }
// class B { hi () { return 2 } }
// // class C extends A, B {}        // Error
// // class C extends A extends B {} // Error

// // 这样才是可以的
// class C {}
// for (let key of Object.getOwnPropertyNames(A.prototype)) {
//   if (key === 'constructor') continue
//   Object.defineProperty(C.prototype, key, Object.getOwnPropertyDescriptor(A.prototype, key))
// }
// for (let key of Object.getOwnPropertyNames(B.prototype)) {
//   if (key === 'constructor') continue
//   Object.defineProperty(C.prototype, key, Object.getOwnPropertyDescriptor(B.prototype, key))
// }

// let c = new C()
// console.log(A, B, c, c.say(), c.hi()) // 1, 2




