    //index.js
    const MyPromise=require('./base');

    let n=new MyPromise((resolve,reject)=>{
      console.log('lonjin');
      resolve(200)
        setTimeout(()=>{
   
        }, 1000)
        // reject('erro')
    })

    n.then((val)=>{
        console.log('------', val) 
    },(erro)=>{
        console.log(erro)
    })
    //lonjin
    //200