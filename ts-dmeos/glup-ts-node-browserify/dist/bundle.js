(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
// import './descriptor'
require("./mixin");
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    elt.innerText = (0, greet_1.sayHello)(name);
}
showHello("greeting", "test");

},{"./greet":1,"./mixin":3}],3:[function(require,module,exports){
class A { 
  constructor() {
    this.aa =123
  }
  say () { return 1 }
 }
class B { hi () { return 2 } }
// class C extends A, B {}        // Error
// class C extends A extends B {} // Error

// 这样才是可以的
class C {}
for (let key of Object.getOwnPropertyNames(A.prototype)) {
  if (key === 'constructor') continue
  Object.defineProperty(C.prototype, key, Object.getOwnPropertyDescriptor(A.prototype, key))
}
for (let key of Object.getOwnPropertyNames(B.prototype)) {
  if (key === 'constructor') continue
  Object.defineProperty(C.prototype, key, Object.getOwnPropertyDescriptor(B.prototype, key))
}

let c = new C()
console.log(A, B, c, c.say(), c.hi()) // 1, 2

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyIsInNyYy9taXhpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLFNBQWdCLFFBQVEsQ0FBRSxJQUFZO0lBQ3BDLE9BQU8sY0FBYyxJQUFJLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRkQsNEJBRUM7QUFDRCxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQixXQUFXO0FBQ1gsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QixTQUFTO0FBQ1QsTUFBTTtBQUNOLElBQUk7QUFFSixtR0FBbUc7QUFDbkcsbUdBQW1HO0FBR25HLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsdUNBQXVDO0FBQ3ZDLFlBQVk7QUFDWix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQix5QkFBeUI7QUFDekIsV0FBVztBQUNYLGtCQUFrQjtBQUNsQix1Q0FBdUM7QUFDdkMsMkVBQTJFO0FBQzNFLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSTtBQUVKLHNDQUFzQztBQUN0QyxtR0FBbUc7QUFDbkcsc0NBQXNDO0FBQ3RDLG1HQUFtRzs7Ozs7QUMxQ25HLG1DQUFtQztBQUNuQyx3QkFBd0I7QUFDeEIsbUJBQWdCO0FBRWhCLFNBQVMsU0FBUyxDQUFDLE9BQWUsRUFBRSxJQUFZO0lBQzVDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELFNBQVMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7OztBQ1Q5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8gKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gYEhlbGxvIGZyb20gJHtuYW1lfWA7XG59XG4vLyBjbGFzcyBNb2RlbDEge1xuLy8gICBnZXREYXRhKCkge1xuLy8gICAgIC8vIOatpOWkhOecgeeVpeiOt+WPluaVsOaNrueahOmAu+i+kVxuLy8gICAgIHJldHVybiBbe1xuLy8gICAgICAgaWQ6IDEsXG4vLyAgICAgICBuYW1lOiAnTmlrbydcbi8vICAgICB9LCB7XG4vLyAgICAgICBpZDogMixcbi8vICAgICAgIG5hbWU6ICdCZWxsaWMnXG4vLyAgICAgfV1cbi8vICAgfVxuLy8gfVxuXG4vLyBjb25zb2xlLmxvZyhuZXcgTW9kZWwxKCkuZ2V0RGF0YSgpKSAgICAgLy8gWyB7IGlkOiAxLCBuYW1lOiAnTmlrbyd9LCB7IGlkOiAyLCBuYW1lOiAnQmVsbGljJyB9IF1cbi8vIGNvbnNvbGUubG9nKE1vZGVsMS5wcm90b3R5cGUuZ2V0RGF0YSgpKSAvLyBbIHsgaWQ6IDEsIG5hbWU6ICdOaWtvJ30sIHsgaWQ6IDIsIG5hbWU6ICdCZWxsaWMnIH0gXVxuXG5cbi8vIGNsYXNzIE1vZGVsMSB7XG4vLyAgIGdldERhdGEgKCkge1xuLy8gICAgIGxldCBzdGFydCA9IG5ldyBEYXRlKCkudmFsdWVPZigpXG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIC8vIOatpOWkhOecgeeVpeiOt+WPluaVsOaNrueahOmAu+i+kVxuLy8gICAgICAgcmV0dXJuIFt7XG4vLyAgICAgICAgIGlkOiAxLFxuLy8gICAgICAgICBuYW1lOiAnTmlrbydcbi8vICAgICAgIH0sIHtcbi8vICAgICAgICAgaWQ6IDIsXG4vLyAgICAgICAgIG5hbWU6ICdCZWxsaWMnXG4vLyAgICAgICB9XVxuLy8gICAgIH0gZmluYWxseSB7XG4vLyAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoKS52YWx1ZU9mKClcbi8vICAgICAgIGNvbnNvbGUubG9nKGBzdGFydDogJHtzdGFydH0gZW5kOiAke2VuZH0gY29uc3VtZTogJHtlbmQgLSBzdGFydH1gKVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAvLyBzdGFydDogWFhYIGVuZDogWFhYIGNvbnN1bWU6IFhYWFxuLy8gY29uc29sZS5sb2cobmV3IE1vZGVsMSgpLmdldERhdGEoKSkgICAgIC8vIFsgeyBpZDogMSwgbmFtZTogJ05pa28nfSwgeyBpZDogMiwgbmFtZTogJ0JlbGxpYycgfSBdXG4vLyAvLyBzdGFydDogWFhYIGVuZDogWFhYIGNvbnN1bWU6IFhYWFxuLy8gY29uc29sZS5sb2coTW9kZWwxLnByb3RvdHlwZS5nZXREYXRhKCkpIC8vIFsgeyBpZDogMSwgbmFtZTogJ05pa28nfSwgeyBpZDogMiwgbmFtZTogJ0JlbGxpYycgfSBdXG5cblxuICIsImltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSBcIi4vZ3JlZXRcIjtcbi8vIGltcG9ydCAnLi9kZXNjcmlwdG9yJ1xuaW1wb3J0ICcuL21peGluJ1xuXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKTtcbiAgICBlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8obmFtZSk7XG59XG5cbnNob3dIZWxsbyhcImdyZWV0aW5nXCIsIFwidGVzdFwiKTsiLCJjbGFzcyBBIHsgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWEgPTEyM1xuICB9XG4gIHNheSAoKSB7IHJldHVybiAxIH1cbiB9XG5jbGFzcyBCIHsgaGkgKCkgeyByZXR1cm4gMiB9IH1cbi8vIGNsYXNzIEMgZXh0ZW5kcyBBLCBCIHt9ICAgICAgICAvLyBFcnJvclxuLy8gY2xhc3MgQyBleHRlbmRzIEEgZXh0ZW5kcyBCIHt9IC8vIEVycm9yXG5cbi8vIOi/meagt+aJjeaYr+WPr+S7peeahFxuY2xhc3MgQyB7fVxuZm9yIChsZXQga2V5IG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEEucHJvdG90eXBlKSkge1xuICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InKSBjb250aW51ZVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQy5wcm90b3R5cGUsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihBLnByb3RvdHlwZSwga2V5KSlcbn1cbmZvciAobGV0IGtleSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhCLnByb3RvdHlwZSkpIHtcbiAgaWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJykgY29udGludWVcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEMucHJvdG90eXBlLCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoQi5wcm90b3R5cGUsIGtleSkpXG59XG5cbmxldCBjID0gbmV3IEMoKVxuY29uc29sZS5sb2coQSwgQiwgYywgYy5zYXkoKSwgYy5oaSgpKSAvLyAxLCAyXG4iXX0=
