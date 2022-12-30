

// 加强版  支持异步

const PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected';

class MyPromise {
  constructor(exector) {
    exector(this.resolve, this.reject)
  };

  status = PENDING;

  value = undefined;

  reason = undefined;

  //定义一个成功回调函数
  successCallback = undefined;
  //定义一个失败回调函数
  failCallback = undefined;

  resolve = value => {

    if (this.status !== PENDING) return;

    this.status = FULFILLED;

    this.value = value;
    /* 步骤2
    -------------------------------------------------
    判断成功回调是否存在，如果存在，直接调用
    */
    this.successCallback && this.successCallback(this.value)
  };

  reject = reason => {

    if (this.status !== PENDING) return;

    this.status = REJECTED;

    this.reason = reason;

    /* 步骤3
        -------------------------------------------------
        判断失败回调是否存在，如果存在，直接调用
    */
    this.failCallback && this.failCallback(this.reason)
  };


  then (successCallback, failCallback) {

    if (this.status === FULFILLED) {

      successCallback(this.value)

    } else if (this.status === REJECTED) {

      failCallback(this.reason)

    } else {
      /* 步骤1
      -------------------------------------------------
      等待状态，处理异步逻辑
      由于不知道状态，所以我们需要把成功和失败的回调函数先保存起来
      保存回调函数 */
      this.successCallback = successCallback;
      this.failCallback = failCallback;

    }
  }
}
//导出MyPromise
module.exports = MyPromise