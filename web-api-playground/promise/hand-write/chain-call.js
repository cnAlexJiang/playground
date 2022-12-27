   
    const PENDING='pending',
    FULFILLED='fulfilled', 
    REJECTED='rejected';

class MyPromise{
  constructor(exector){
      exector(this.resolve,this.reject)
  };

  status=PENDING;
  value=undefined;
  reason=undefined;

  successCallback=[];
  failCallback=[];

  resolve=value=>{
      if(this.status!==PENDING)return;

      this.status=FULFILLED;
    
      this.value=value;
    
      while(this.successCallback.length)this.successCallback.shift()(this.value)
  };

  reject=reason=>{
      if(this.status!==PENDING)return;

      this.status=REJECTED;
     
      this.reason=reason;
    
      while(this.failCallback.length)this.failCallback && this.failCallback.shift()(this.reason)
  };


  then(successCallback,failCallback){

      /* 步骤1 
      ------------------------
      1.then方法会返回一个Promise,所以这里需要创建一个Promise，然后return回去
      2. 我们先把 成功回调函数保存为n
      3.然后在MyPromise类的外部再写一个resolvePromise做处理
      */
      let prmoise2=new MyPromise((resolve,reject)=>{
         
          if(this.status===FULFILLED){
              //保存成功回调函数
              let n=successCallback(this.value)
              //传入resolvePromise函数中去做判断
              resolvePromise(n,resolve,reject)
          }else if(this.status===REJECTED){ 
              
              failCallback(this.reason)
          }else{ 
              this.successCallback.push(successCallback);
              this.failCallback.push(failCallback); 
          }
      });
      return prmoise2;
      
  }
}
/* 步骤2
---------------------------
//判断x是不是其实例的对象
*/
function resolvePromise(n,resolve,reject){
  // 判断x是不是其实例对象，如果是就直接调用then方法
  if(n instanceof MyPromise){
      n.then(resolve,reject)
  }else{
      //普通值，直接调用resolve
      resolve(n)
  }
}
module.exports = MyPromise