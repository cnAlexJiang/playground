import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, minu , addByAmount} from '../features/counter/counterSlice'


export function Button2(){
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()


  function handleClick(){
    dispatch(add())
  }
  return <div>
     <button onClick={handleClick}>
    {count}
  </button>
  <button onClick={()=>{dispatch(minu())}}>
      minus
  </button>
  <button onClick={()=>{dispatch(addByAmount(3))}}>
    addByAmount
  </button>
  </div>
}
