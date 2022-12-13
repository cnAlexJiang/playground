(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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





},{}],2:[function(require,module,exports){
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 创建一个继承自Person的匿名类
// 直接返回并替换原有的构造函数
function name(constructor) {
    console.log(11, constructor);
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.name = 'Niko';
        }
    };
}
// 修改原有属性的描述符
function seal(constructor) {
    let descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, 'sayHi');
    Object.defineProperty(constructor.prototype, 'sayHi', Object.assign(Object.assign({}, descriptor), { writable: false }));
}
let Person = class Person {
    constructor() {
        this.name = 123;
    }
    sayHi() {
        console.log(`My name is: ${this.name}`);
    }
};
Person = __decorate([
    seal
], Person);
new Person().sayHi();
Person.prototype.sayHi = 1; // 无效
console.log(Person);

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
// @Decorator 在 Class 成员中的使用
//   类成员上的 @Decorator 应该是应用最为广泛的一处了，函数，属性，get、set访问器，这几处都可以认为是类成员。
//   在TS文档中被分为了Method Decorator、Accessor Decorator和Property Decorator，实际上如出一辙。
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function instance(target) {
    console.log(target.constructor === Model);
}
function static(target) {
    console.log(target === Model);
}
class Model {
    constructor() {
        this.method2 = () => { };
    }
    // 实例成员
    method1() { }
    // 静态成员
    static method3() { }
}
Model.method4 = () => { };
__decorate([
    instance
], Model.prototype, "method1", null);
__decorate([
    instance
], Model.prototype, "method2", void 0);
__decorate([
    static
], Model, "method3", null);
__decorate([
    static
], Model, "method4", void 0);

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./other/greet");
// import './descriptor'
require("./decorator/mixin");
require("./decorator/ts-decorator-base");
require("./decorator/ts-decorator-advanced");
require("./decorator/ts-decorator-class");
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    elt.innerText = (0, greet_1.sayHello)(name);
}
showHello("greeting", "test");

},{"./decorator/mixin":1,"./decorator/ts-decorator-advanced":2,"./decorator/ts-decorator-base":3,"./decorator/ts-decorator-class":4,"./other/greet":6}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
function sayHello(name) {
    return `Hello from ${name}`;
}
exports.sayHello = sayHello;
// class Model1 {
//   getData() {
//     // 此处省略获取数据的逻辑
//     return [{
//       id: 1,
//       name: 'Niko'
//     }, {
//       id: 2,
//       name: 'Bellic'
//     }]
//   }
// }
// console.log(new Model1().getData())     // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]
// console.log(Model1.prototype.getData()) // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]
// class Model1 {
//   getData () {
//     let start = new Date().valueOf()
//     try {
//       // 此处省略获取数据的逻辑
//       return [{
//         id: 1,
//         name: 'Niko'
//       }, {
//         id: 2,
//         name: 'Bellic'
//       }]
//     } finally {
//       let end = new Date().valueOf()
//       console.log(`start: ${start} end: ${end} consume: ${end - start}`)
//     }
//   }
// }
// // start: XXX end: XXX consume: XXX
// console.log(new Model1().getData())     // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]
// // start: XXX end: XXX consume: XXX
// console.log(Model1.prototype.getData()) // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGVjb3JhdG9yL21peGluLmpzIiwic3JjL2RlY29yYXRvci90cy1kZWNvcmF0b3ItYWR2YW5jZWQudHMiLCJzcmMvZGVjb3JhdG9yL3RzLWRlY29yYXRvci1iYXNlLnRzIiwic3JjL2RlY29yYXRvci90cy1kZWNvcmF0b3ItY2xhc3MudHMiLCJzcmMvbWFpbi50cyIsInNyYy9vdGhlci9ncmVldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pCQSxvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLFNBQVMsSUFBSSxDQUFDLFdBQVc7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDNUIsT0FBTyxLQUFNLFNBQVEsV0FBVztRQUF6Qjs7WUFDTCxTQUFJLEdBQUcsTUFBTSxDQUFBO1FBQ2YsQ0FBQztLQUFBLENBQUE7QUFDSCxDQUFDO0FBQ0QsYUFBYTtBQUNiLFNBQVMsSUFBSSxDQUFDLFdBQVc7SUFDdkIsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDaEYsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sa0NBQy9DLFVBQVUsS0FDYixRQUFRLEVBQUUsS0FBSyxJQUNmLENBQUE7QUFDSixDQUFDO0FBSUQsSUFBTSxNQUFNLEdBQVosTUFBTSxNQUFNO0lBQVo7UUFDRSxTQUFJLEdBQUcsR0FBRyxDQUFBO0lBSVosQ0FBQztJQUhDLEtBQUs7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDekMsQ0FBQztDQUNGLENBQUE7QUFMSyxNQUFNO0lBRFgsSUFBSTtHQUNDLE1BQU0sQ0FLWDtBQUNELElBQUksTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7QUFFcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBLENBQUMsS0FBSztBQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBOzs7QUMvQm5CLG1DQUFtQztBQUNuQyx5REFBeUQ7QUFDekQsNkJBQTZCO0FBQzdCLElBQUk7QUFFSixpQ0FBaUM7QUFDakMsOEZBQThGO0FBQzlGLElBQUk7QUFHSixPQUFPO0FBQ1AsYUFBYTtBQUNiLFlBQVk7QUFDWixhQUFhO0FBQ2IsSUFBSTtBQUNKLGlCQUFpQjs7O0FDZGpCLDRCQUE0QjtBQUMxQixrRUFBa0U7QUFDbEUsOEVBQThFOzs7Ozs7O0FBSWhGLFNBQVMsUUFBUSxDQUFDLE1BQU07SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxDQUFBO0FBQzNDLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxNQUFNO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFBO0FBQy9CLENBQUM7QUFHRCxNQUFNLEtBQUs7SUFBWDtRQU1FLFlBQU8sR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUE7SUFRcEIsQ0FBQztJQWJDLE9BQU87SUFFUCxPQUFPLEtBQUssQ0FBQztJQUtiLE9BQU87SUFFUCxNQUFNLENBQUMsT0FBTyxLQUFLLENBQUM7O0FBR2IsYUFBTyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQTtBQVZ6QjtJQURDLFFBQVE7b0NBQ0k7QUFHYjtJQURDLFFBQVE7c0NBQ1M7QUFJbEI7SUFEQyxNQUFNOzBCQUNhO0FBR3BCO0lBREMsTUFBTTs0QkFDa0I7Ozs7O0FDN0IzQix5Q0FBeUM7QUFDekMsd0JBQXdCO0FBQ3hCLDZCQUEwQjtBQUMxQix5Q0FBc0M7QUFDdEMsNkNBQTBDO0FBQzFDLDBDQUF1QztBQUV2QyxTQUFTLFNBQVMsQ0FBQyxPQUFlLEVBQUUsSUFBWTtJQUM1QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBQSxnQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7QUNaOUIsU0FBZ0IsUUFBUSxDQUFFLElBQVk7SUFDcEMsT0FBTyxjQUFjLElBQUksRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFGRCw0QkFFQztBQUNELGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YscUJBQXFCO0FBQ3JCLFdBQVc7QUFDWCxlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVCxNQUFNO0FBQ04sSUFBSTtBQUVKLG1HQUFtRztBQUNuRyxtR0FBbUc7QUFHbkcsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQix1Q0FBdUM7QUFDdkMsWUFBWTtBQUNaLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLHlCQUF5QjtBQUN6QixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLHVDQUF1QztBQUN2QywyRUFBMkU7QUFDM0UsUUFBUTtBQUNSLE1BQU07QUFDTixJQUFJO0FBRUosc0NBQXNDO0FBQ3RDLG1HQUFtRztBQUNuRyxzQ0FBc0M7QUFDdEMsbUdBQW1HIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gY2xhc3MgQSB7IFxuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICB0aGlzLmFhID0xMjNcbi8vICAgfVxuLy8gICBzYXkgKCkgeyByZXR1cm4gMSB9XG4vLyAgfVxuLy8gY2xhc3MgQiB7IGhpICgpIHsgcmV0dXJuIDIgfSB9XG4vLyAvLyBjbGFzcyBDIGV4dGVuZHMgQSwgQiB7fSAgICAgICAgLy8gRXJyb3Jcbi8vIC8vIGNsYXNzIEMgZXh0ZW5kcyBBIGV4dGVuZHMgQiB7fSAvLyBFcnJvclxuXG4vLyAvLyDov5nmoLfmiY3mmK/lj6/ku6XnmoRcbi8vIGNsYXNzIEMge31cbi8vIGZvciAobGV0IGtleSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBLnByb3RvdHlwZSkpIHtcbi8vICAgaWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJykgY29udGludWVcbi8vICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEMucHJvdG90eXBlLCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoQS5wcm90b3R5cGUsIGtleSkpXG4vLyB9XG4vLyBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQi5wcm90b3R5cGUpKSB7XG4vLyAgIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicpIGNvbnRpbnVlXG4vLyAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDLnByb3RvdHlwZSwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEIucHJvdG90eXBlLCBrZXkpKVxuLy8gfVxuXG4vLyBsZXQgYyA9IG5ldyBDKClcbi8vIGNvbnNvbGUubG9nKEEsIEIsIGMsIGMuc2F5KCksIGMuaGkoKSkgLy8gMSwgMlxuXG5cblxuXG4iLCJcblxuLy8g5Yib5bu65LiA5Liq57un5om/6IeqUGVyc29u55qE5Yy/5ZCN57G7XG4vLyDnm7TmjqXov5Tlm57lubbmm7/mjaLljp/mnInnmoTmnoTpgKDlh73mlbBcbmZ1bmN0aW9uIG5hbWUoY29uc3RydWN0b3IpIHtcbiAgY29uc29sZS5sb2coMTEsIGNvbnN0cnVjdG9yKVxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XG4gICAgbmFtZSA9ICdOaWtvJ1xuICB9XG59XG4vLyDkv67mlLnljp/mnInlsZ7mgKfnmoTmj4/ov7DnrKZcbmZ1bmN0aW9uIHNlYWwoY29uc3RydWN0b3IpIHtcbiAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ3NheUhpJylcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ3NheUhpJywge1xuICAgIC4uLmRlc2NyaXB0b3IsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pXG59XG5cblxuQHNlYWxcbmNsYXNzIFBlcnNvbiB7XG4gIG5hbWUgPSAxMjNcbiAgc2F5SGkoKSB7XG4gICAgY29uc29sZS5sb2coYE15IG5hbWUgaXM6ICR7dGhpcy5uYW1lfWApXG4gIH1cbn1cbm5ldyBQZXJzb24oKS5zYXlIaSgpXG5cblBlcnNvbi5wcm90b3R5cGUuc2F5SGkgPSAxIC8vIOaXoOaViFxuXG5jb25zb2xlLmxvZyhQZXJzb24pIiwiLy8gZnVuY3Rpb24gdGFnKGNvbnN0cnVjdG9yOiBhbnkpIHtcbi8vICAgY29uc29sZS5sb2coMTEsYXJndW1lbnRzLCBjb25zdHJ1Y3RvciA9PT0gQSkgLy8gdHJ1ZVxuLy8gICByZXR1cm4gZnVuY3Rpb24gdGVzdCgpe31cbi8vIH1cblxuLy8gZnVuY3Rpb24gbWV0aG9kKHRhcmdldDogYW55KSB7XG4vLyAgIGNvbnNvbGUubG9nKDIyLCBhcmd1bWVudHMsdGFyZ2V0LmNvbnN0cnVjdG9yID09PSBBLCB0YXJnZXQgPT09IEEucHJvdG90eXBlKSAvLyB0cnVlLCB0cnVlXG4vLyB9XG5cblxuLy8gQHRhZ1xuLy8gY2xhc3MgQSB7IFxuLy8gICBAbWV0aG9kXG4vLyAgIGhpICgpIHt9XG4vLyB9XG4vLyBjb25zb2xlLmxvZyhBKSIsIiBcbi8vIEBEZWNvcmF0b3Ig5ZyoIENsYXNzIOaIkOWRmOS4reeahOS9v+eUqFxuICAvLyAgIOexu+aIkOWRmOS4iueahCBARGVjb3JhdG9yIOW6lOivpeaYr+W6lOeUqOacgOS4uuW5v+azm+eahOS4gOWkhOS6hu+8jOWHveaVsO+8jOWxnuaAp++8jGdldOOAgXNldOiuv+mXruWZqO+8jOi/meWHoOWkhOmDveWPr+S7peiupOS4uuaYr+exu+aIkOWRmOOAglxuICAvLyAgIOWcqFRT5paH5qGj5Lit6KKr5YiG5Li65LqGTWV0aG9kIERlY29yYXRvcuOAgUFjY2Vzc29yIERlY29yYXRvcuWSjFByb3BlcnR5IERlY29yYXRvcu+8jOWunumZheS4iuWmguWHuuS4gOi+meOAglxuICBcblxuXG5mdW5jdGlvbiBpbnN0YW5jZSh0YXJnZXQpIHtcbiAgY29uc29sZS5sb2codGFyZ2V0LmNvbnN0cnVjdG9yID09PSBNb2RlbClcbn1cblxuZnVuY3Rpb24gc3RhdGljKHRhcmdldCkge1xuICBjb25zb2xlLmxvZyh0YXJnZXQgPT09IE1vZGVsKVxufVxuXG5cbmNsYXNzIE1vZGVsIHtcbiAgLy8g5a6e5L6L5oiQ5ZGYXG4gIEBpbnN0YW5jZVxuICBtZXRob2QxICgpIHt9XG5cbiAgQGluc3RhbmNlXG4gIG1ldGhvZDIgPSAoKSA9PiB7fVxuXG4gIC8vIOmdmeaAgeaIkOWRmFxuICBAc3RhdGljXG4gIHN0YXRpYyBtZXRob2QzICgpIHt9XG5cbiAgQHN0YXRpY1xuICBzdGF0aWMgbWV0aG9kNCA9ICgpID0+IHt9XG59XG4iLCJpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL290aGVyL2dyZWV0XCI7XG4vLyBpbXBvcnQgJy4vZGVzY3JpcHRvcidcbmltcG9ydCAnLi9kZWNvcmF0b3IvbWl4aW4nXG5pbXBvcnQgJy4vZGVjb3JhdG9yL3RzLWRlY29yYXRvci1iYXNlJ1xuaW1wb3J0ICcuL2RlY29yYXRvci90cy1kZWNvcmF0b3ItYWR2YW5jZWQnXG5pbXBvcnQgJy4vZGVjb3JhdG9yL3RzLWRlY29yYXRvci1jbGFzcydcblxuZnVuY3Rpb24gc2hvd0hlbGxvKGRpdk5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7XG4gICAgZWx0LmlubmVyVGV4dCA9IHNheUhlbGxvKG5hbWUpO1xufVxuXG5zaG93SGVsbG8oXCJncmVldGluZ1wiLCBcInRlc3RcIik7XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvIChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBIZWxsbyBmcm9tICR7bmFtZX1gO1xufVxuLy8gY2xhc3MgTW9kZWwxIHtcbi8vICAgZ2V0RGF0YSgpIHtcbi8vICAgICAvLyDmraTlpITnnIHnlaXojrflj5bmlbDmja7nmoTpgLvovpFcbi8vICAgICByZXR1cm4gW3tcbi8vICAgICAgIGlkOiAxLFxuLy8gICAgICAgbmFtZTogJ05pa28nXG4vLyAgICAgfSwge1xuLy8gICAgICAgaWQ6IDIsXG4vLyAgICAgICBuYW1lOiAnQmVsbGljJ1xuLy8gICAgIH1dXG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc29sZS5sb2cobmV3IE1vZGVsMSgpLmdldERhdGEoKSkgICAgIC8vIFsgeyBpZDogMSwgbmFtZTogJ05pa28nfSwgeyBpZDogMiwgbmFtZTogJ0JlbGxpYycgfSBdXG4vLyBjb25zb2xlLmxvZyhNb2RlbDEucHJvdG90eXBlLmdldERhdGEoKSkgLy8gWyB7IGlkOiAxLCBuYW1lOiAnTmlrbyd9LCB7IGlkOiAyLCBuYW1lOiAnQmVsbGljJyB9IF1cblxuXG4vLyBjbGFzcyBNb2RlbDEge1xuLy8gICBnZXREYXRhICgpIHtcbi8vICAgICBsZXQgc3RhcnQgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKVxuLy8gICAgIHRyeSB7XG4vLyAgICAgICAvLyDmraTlpITnnIHnlaXojrflj5bmlbDmja7nmoTpgLvovpFcbi8vICAgICAgIHJldHVybiBbe1xuLy8gICAgICAgICBpZDogMSxcbi8vICAgICAgICAgbmFtZTogJ05pa28nXG4vLyAgICAgICB9LCB7XG4vLyAgICAgICAgIGlkOiAyLFxuLy8gICAgICAgICBuYW1lOiAnQmVsbGljJ1xuLy8gICAgICAgfV1cbi8vICAgICB9IGZpbmFsbHkge1xuLy8gICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKCkudmFsdWVPZigpXG4vLyAgICAgICBjb25zb2xlLmxvZyhgc3RhcnQ6ICR7c3RhcnR9IGVuZDogJHtlbmR9IGNvbnN1bWU6ICR7ZW5kIC0gc3RhcnR9YClcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gLy8gc3RhcnQ6IFhYWCBlbmQ6IFhYWCBjb25zdW1lOiBYWFhcbi8vIGNvbnNvbGUubG9nKG5ldyBNb2RlbDEoKS5nZXREYXRhKCkpICAgICAvLyBbIHsgaWQ6IDEsIG5hbWU6ICdOaWtvJ30sIHsgaWQ6IDIsIG5hbWU6ICdCZWxsaWMnIH0gXVxuLy8gLy8gc3RhcnQ6IFhYWCBlbmQ6IFhYWCBjb25zdW1lOiBYWFhcbi8vIGNvbnNvbGUubG9nKE1vZGVsMS5wcm90b3R5cGUuZ2V0RGF0YSgpKSAvLyBbIHsgaWQ6IDEsIG5hbWU6ICdOaWtvJ30sIHsgaWQ6IDIsIG5hbWU6ICdCZWxsaWMnIH0gXVxuXG5cbiAiXX0=
