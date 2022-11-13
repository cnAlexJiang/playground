
let a = 0;
let add = function(n,m){
  a++;
  return n+m 
}
export {a,add}

export async function setTimeoutTest(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      console.log('延迟1s')
      resolve();
    },1000)
  })
}