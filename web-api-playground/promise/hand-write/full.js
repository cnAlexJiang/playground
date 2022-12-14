
    //定义三个常量
    const PENDING='pending', //等待
        FULFILLED='fulfilled', //成功
        REJECTED='rejected'; //失败

    class MyPromise{
        constructor(exector){
            // 立即执行函数，传入resolve方法和reject方法
            //同时捕获一下错误
            try{
                exector(this.resolve,this.reject)
            }catch(e){
                this.reject(e)
            } 
        };

        //定义一个初始状态
        status=PENDING;

        //保存成功后的值
        value=undefined;

        //保存失败后的值
        reason=undefined;

        //定义一个成功回调函数
        successCallback=[];
        //定义一个失败回调函数
        failCallback=[];

        //成功
        resolve=value=>{
            //判断当前状态是否为PENDING，如果不是就return
            if(this.status!==PENDING)return;
            //更改状态为fulfilled
            this.status=FULFILLED;
            //保存成功的返回值
            this.value=value;
            //判断成功回调是否存在，如果存在，直接调用
            while(this.successCallback.length)this.successCallback.shift()()
        };
        //失败
        reject=reason=>{
            //判断当前状态是否为PENDING，如果不是就return
            if(this.status!==PENDING)return;
            //更改状态为rejected
            this.status=REJECTED;
            //保存失败的返回值
            this.reason=reason;
            //判断成功回调是否存在，如果存在，直接调用
            while(this.failCallback.length)this.failCallback && this.failCallback.shift()()
        };

        //then方法会接收两个回调函数，分别为成功和失败的回调函数
        then(successCallback,failCallback){
            //处理then方法可选参数
            successCallback=successCallback?successCallback:value=>value;
            failCallback=failCallback?failCallback:reason=>{throw reason}
            
            let prmoise2=new MyPromise((resolve,reject)=>{
                //判断当前状态，然后调用相应的函数
                if(this.status===FULFILLED){  //成功状态
                    //传入返回值
                    /*因为new Promise需要执行完成之后才有promise2，同步代码中没有pormise2，
                    所以这部分代码需要异步执行 */
                    setTimeout(() => {
                        //捕获错误
                        try{
                            let n=successCallback(this.value)
                            resolvePromise(prmoise2,n,resolve,reject)
                        }catch(e){
                            reject(e)
                        }
                    }, 0);
                }else if(this.status===REJECTED){ //失败状态  
                    //传入返回值
                    setTimeout(() => {
                        //捕获错误
                        try{
                            let n= failCallback(this.reason)
                            resolvePromise(prmoise2,n,resolve,reject)
                        }catch(e){
                            reject(e)
                        }
                    }, 0);
                }else{ //等待状态
                    //保存回调函数(考虑到异步情况)
                    this.successCallback.push(()=>{
                        setTimeout(() => {
                            //捕获错误
                            try{
                                let n=successCallback(this.value)
                                resolvePromise(prmoise2,n,resolve,reject)
                            }catch(e){
                                reject(e)
                            }
                        }, 0);
                    });
                    this.failCallback.push(()=>{
                        setTimeout(() => {
                            //捕获错误
                            try{
                                let n= failCallback(this.reason)
                                resolvePromise(prmoise2,n,resolve,reject)
                            }catch(e){
                                reject(e)
                            }
                        }, 0);
                    }); 
                }
            });
            return prmoise2;
            
        };
        // 直接调用then方法，然后成功的地方传递undefined，错误的地方传递reason
        catch (failCallback) {
            return this.then(undefined, failCallback)
        }

        finally(callback){
            // 使用then方法拿到当前的promise的状态
            return this.then(value=>{
                /* 如果callback是一个异步的promise对象，我们还需要等待其执行完毕，所以需要用到静态方法resolve
                把callback调用之后返回的promise传递过去，并且执行promise，且在成功之后返回value
                */
                return MyPromise.resolve(callback()).then(()=>value)
            },reason=>{
                // 失败之后调用的then方法，然后把失败的原因返回出去
                return MyPromise.resolve(callback()).then(() => { throw reason })
            })
        }

        static all(array){
            // 要返回的数组
            let result=[];
            //记录执行次数
            let index=0;
            //all方法返回的也是一个promise
            return new MyPromise((resolve,reject)=>{

                //定义一个存到result数组中的方法
                function addItem(key,value){
                    result[key]=value;
                    index++;
                    if(index==array.length){
                        resolve(result)
                    }
                }

                //循环array
                for(let i=0;i<array.length;i++){
                    //当前的参数
                    let current=array[i];

                    //判断一下当前的返回值是普通值还是promise
                    if(current instanceof MyPromise){
                        current.then(value=>addItem(i,value),reason=>reject(reason));
                    }else{
                        addItem(i,current)
                    }
                
                }
            })
        };

        static resolve(value){
            //判断value 是否为MyPromise的实例，如果是，直接返回
        if( value instanceof MyPromise) return value;
        //如果不是，return一个prmoise
        return new MyPromise(resolve=>resolve(value))
        }
    }

    //判断x是不是其实例的对象
    function resolvePromise(prmoise2,n,resolve,reject){
        //如果n和prmoise2相等 则返回错误提示
        if(prmoise2===n){
            console.log('相等')
            return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
        }
        // 判断x是不是其实例对象
        if(n instanceof MyPromise){
            n.then(resolve,reject)
        }else{
            //普通值，直接调用resolve
            resolve(n)
        }
    }

    //导出MyPromise
    module.exports = MyPromise