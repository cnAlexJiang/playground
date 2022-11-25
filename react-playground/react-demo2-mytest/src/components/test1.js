import {useState} from 'react'

export function Button1(){
  const [count, setCount] = useState(0)
  function handleClick(){
    console.log('handleClick', arguments)
    // setCount(count+1)
    // setCount(function(count){
    //   console.log('setCount', count)
    //   return count + 1
    // })
    setCount((count)=>{
      console.log('setCount', count)  // 输出2次
      return count+1
    })
  }
  return <button onClick={handleClick}>
    {count}
  </button>
}
