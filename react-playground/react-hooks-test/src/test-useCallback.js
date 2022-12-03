import React, { useEffect, useState, useCallback } from 'react';
// 子组件
function Son(props) {
  const  {callback}  = props;

  console.log(11,props)
  return (
        <a onClick={()=>callback("小红")}>点击切换姓名</a>
    )
}


// 父组件
export  function Parent() {

  const [name,setName] = useState("")

  useEffect(() => {
    console.log("获取数据并更新state")
    setName("小明")
  },[]);

  const callback = useCallback(name => {
    setName(name);
  }, []);


  return  (
    <div>
    <Son callback={callback} />;
      name:{name}
  </div>
  )
  
   
}