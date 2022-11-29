

import React, { useState, useEffect } from 'react';

import {Counter} from './test-useReducer'

import {Parent} from './test-useCallback'
import {Test} from './test-reduce-cotext'



function Example() {
  const [count, setCount] = useState(0);
  console.log('argument', arguments);
  // 只有count改变时才会执行
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log('useEffect');
    return  ()=>{
      console.log('卸载 -1111');
      }
  },[count]);
  useEffect(() => {
    console.log('useEffect222');
    return ()=>{
    console.log('卸载3333');
    }
  },[ ]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}



function App(){
  const [isShow,setIsShow] = useState(true);
  return (
    <div>
        {isShow && <Test aa={1}/>}
      <div>
          <button onClick={()=>{setIsShow(!isShow)}}>setIsShow</button>
      </div> 
    </div>
  )
}
export default App  