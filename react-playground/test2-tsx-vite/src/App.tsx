import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Card title="标题">
          <div>我将被放在card组件的body区域内容--1111</div>
          <div>我将被放在card组件的body区域内容---2222</div>
        </Card>
      </div>
    </div>
  )
}

export default App
