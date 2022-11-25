import { useSelector, useDispatch } from 'react-redux'
import { add, minu, addByAmount, incrementAsync } from './counterSlice'
import {useState} from 'react'

export function Counter () {
  const count = useSelector(state => state.counter.value) + 2
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  function handleClick () {
    dispatch(add())
  }
  return <div>
    <button onClick={handleClick}>
      {count}
    </button>
    <button onClick={() => { dispatch(minu()) }}>
      minus
    </button>
    <button onClick={() => { dispatch(addByAmount(3)) }}>
      addByAmount
    </button>
    <button onClick={() => { dispatch(incrementAsync(3)) }}>
      addAsync
    </button>
    <div>
      <input
        aria-label="Set increment amount"
        value={count}
        // onChange={e => setIncrementAmount(e.target.value)}
      />
      <button
        onClick={() => dispatch(addByAmount(Number(incrementAmount) || 0))}
      >
        Add Amount
      </button>
      <button
        onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
      >
        Add Async
      </button>
    </div>
  </div>
}
