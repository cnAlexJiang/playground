
// const createLoginLayer = (function(){
//   let div;
//   return function(){
//     if ( !div ){
//       console.log("首次创建")
//       div = document.createElement( 'div' );
//       div.innerHTML = '我是登录浮窗';
//       document.body.appendChild( div );
//     }
//     console.log("返回单例")
//     return div;
//   }
// })();
// document.getElementById( 'loginBtn' ).onclick = function(){
//   let loginLayer = new createLoginLayer();
// };


const getSingle = function( fn ){
  let result;
  return function(){
    return result || ( result = fn.apply(this, arguments ) );
  }
};

const createLoginLayer = function(){
  let div = document.createElement( 'div' );
  div.innerHTML = '我是登录浮窗';
  document.body.appendChild( div );
  return div;
};

let createSingleLoginLayer = getSingle( createLoginLayer );

document.getElementById( 'loginBtn' ).onclick = function(){
  let loginLayer = createSingleLoginLayer();
};