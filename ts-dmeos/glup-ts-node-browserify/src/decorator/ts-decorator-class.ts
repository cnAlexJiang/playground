 
// @Decorator 在 Class 成员中的使用
  //   类成员上的 @Decorator 应该是应用最为广泛的一处了，函数，属性，get、set访问器，这几处都可以认为是类成员。
  //   在TS文档中被分为了Method Decorator、Accessor Decorator和Property Decorator，实际上如出一辙。
  


function instance(target) {
  console.log(target.constructor === Model)
}

function static(target) {
  console.log(target === Model)
}


class Model {
  // 实例成员
  @instance
  method1 () {}

  @instance
  method2 = () => {}

  // 静态成员
  @static
  static method3 () {}

  @static
  static method4 = () => {}
}
