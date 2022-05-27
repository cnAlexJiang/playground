(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.test = factory());
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var Model1 = /*#__PURE__*/function () {
    function Model1() {
      _classCallCheck(this, Model1);
    }

    _createClass(Model1, [{
      key: "getData",
      value: function getData() {
        // 此处省略获取数据的逻辑
        return [{
          id: 1,
          name: 'Niko'
        }, {
          id: 2,
          name: 'Bellic'
        }];
      }
    }]);

    return Model1;
  }();

  function wrap(Model, key) {
    // 获取Class对应的原型
    var target = Model.prototype; // 获取函数对应的描述符

    var descriptor = Object.getOwnPropertyDescriptor(target, key); // 生成新的函数，添加耗时统计逻辑

    var log = function log() {
      var start = new Date().valueOf();

      try {
        for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
          arg[_key] = arguments[_key];
        }

        return descriptor.value.apply(this, arg); // 调用之前的函数
      } finally {
        var end = new Date().valueOf();
        console.log("start: ".concat(start, " end: ").concat(end, " consume: ").concat(end - start));
      }
    }; // 将修改后的函数重新定义到原型链上


    Object.defineProperty(target, key, _objectSpread2(_objectSpread2({}, descriptor), {}, {
      value: log // 覆盖描述符重的value

    }));
  }

  wrap(Model1, 'getData'); // start: XXX end: XXX consume: XXX

  console.log(new Model1().getData()); // [ { id: 1, name: 'Niko'}, { id: 2, name: 'Bellic' } ]
  // start: XXX end: XXX consume: XXX

  var a = 1;
  console.log(a);

  var Test = /*#__PURE__*/_createClass(function Test(a, b) {
    _classCallCheck(this, Test);

    this.a = a;
    this.b = b;
  });

  var ins = new Test(1, 2);

  return ins;

}));
//# sourceMappingURL=index.js.map
