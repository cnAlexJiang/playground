import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [test, setTest] = useState(0)
  const clickHandler = () => {
    setCount((count) => count + 1)
    setTest((test) => test + 2)
  }
  return (
    <div className="App">

      <div className="card">
        <button onClick={() => clickHandler()}>
          count is {count}
        </button>
        <div>
          test is {test}

        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div >
  )
}

export default App
