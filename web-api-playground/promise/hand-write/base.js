
// 基础版  不支持异步


//定义三个常量
const PENDING = 'pending', //等待
  FULFILLED = 'fulfilled', //成功
  REJECTED = 'rejected'; //失败

class MyPromise {
  constructor(exector) {
    // 立即执行函数，传入resolve方法和reject方法
    exector(this.resolve, this.reject)
  };

  //定义一个初始状态
  status = PENDING;

  //保存成功后的值
  value = undefined;

  //保存失败后的值
  reason = undefined;

  //成功
  resolve = value => {
    //判断当前状态是否为PENDING，如果不是就return
    if (this.status !== PENDING) return;
    //更改状态为fulfilled
    this.status = FULFILLED;
    //保存成功的返回值
    this.value = value;

  };
  //失败
  reject = reason => {
    //判断当前状态是否为PENDING，如果不是就return
    if (this.status !== PENDING) return;
    //更改状态为rejected
    this.status = REJECTED;
    //保存失败的返回值
    this.reason = reason;
  };

  //then方法会接收两个回调函数，分别为成功和失败的回调函数
  then (successCallback, failCallback) {
    //判断当前状态，然后调用相应的函数
    if (this.status === FULFILLED) {
      //传入返回值
      successCallback(this.value)
    } else if (this.status === REJECTED) {
      //传入返回值
      failCallback(this.reason)
    }
  }
}
//导出MyPromise
module.exports = MyPromise