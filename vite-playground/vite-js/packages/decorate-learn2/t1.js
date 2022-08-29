class BaseModel {
  /**
  * 将后端数据直接映射到当前的示例上
  */
  __map (json) {
      let alias = this.constructor.__aliasNames__;
      let units = this.constructor.__unitOriginals__;
      let checkers = this.constructor.__checkers__;
      for (let i in this) {
          if (!this.hasOwnProperty(i)) return;
          // 如果有多层装饰器，需要经过多个逻辑处理最终产生一个最终值 realValue
          let realValue = json[i];
          // 接下来一步一步处理数据
          // 首先检查别名数据，并做映射
          if (alias && typeof(alias[i]) !== 'undefined') {
              // ......
          }
          // 然后针对数据检查类型
          if (checkers && checkers[i]) {
              // ......
          }
          // 最终，对数据做单位转换
          if (units && units[i]) {
              // ......
          }
          // 赋值
          this[i] = realValue;
      }
  }
  /**
  * 复写 JSON.stringify 时自动调用的函数
  */
  toJSON () {
      let result = {};
      let units = this.constructor.__unitOriginals__;
      for (let i in this) {
          if (!this.hasOwnProperty(i)) return;
          if (units && units[i]) {
              // 序列化时，有需要加单位的加上单位
              result[i] = this[i] + '_$' + units[i];
          } else {
              result[i] = this[i];
          }
      }
      return result;
  }
}

function Check (type) {
  return function (target, name, descriptor) {
      let v = descriptor.initializer && descriptor.initializer.call(this);
      /**
       * 将属性名字以及需要的类型的对应关系记录到类的原型上
       */
      if (!target.constructor.__checkers__) {
          // 将这个隐藏属性定义成 not enumerable，遍历的时候是取不到的。
          Object.defineProperty(target.constructor, "__checkers__", {
              value: {},
              enumerable: false,
              writeable: true,
              configurable: true
          });
      }
      target.constructor.__checkers__[name] = {
          type: type
      };
      return descriptor
  }
}