import './base.less';
require('@babel/polyfill')
import {setTimeoutTest} from './test-esm'

import {a,add} from './test-esm'

;(async function(){
  console.log('111')
  await setTimeoutTest()
  console.log('222')

}())


let module1 = require('./test-cmj');
console.log('module1', module1);
let module2= require('./test-cmj');


console.log('esm', a, add(1,2), a)
console.log('cmj111',module1, module1.a, module1.add(1,2), module1.a )
console.log('cm222',module2, module2.a, module2.add(1,2), module2.a )






let div= document.createElement( 'div' );
div.innerHTML ='测试 cmj  和 esm 区别'
document.body.appendChild(div)


