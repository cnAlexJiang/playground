import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

// import './packages/decorate-learn/test1'

// import './packages/decorate-learn/test4'
// import './packages/esmodule-test/a'
import './packages/circular-dependence/index'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


// 注意这里的 `target` 是 `Dog.prototype`
function readonly(target, key, descriptor) {
  descriptor.writable = false
  return descriptor
}