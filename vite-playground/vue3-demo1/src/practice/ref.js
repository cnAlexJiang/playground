import { reactive } from "./reactive";
import { trackEffects, triggerEffects } from './effect'

export const isObject = (value) => {
    return typeof value === 'object' && value !== null
}

// 将对象转化为响应式的
function toReactive(value) {
    return isObject(value) ? reactive(value) : value
}

class RefImpl {
    _value;
    dep = new Set; // 依赖收集
    __v_isRef = true; // 是ref的标识
    // rawValue 传递进来的值
    constructor(rawValue, _shallow) {
        // 1、判断如果是对象 使用reactive将对象转为响应式的
        // 浅ref不需要再次代理
        this._value = _shallow ? rawValue : toReactive(rawValue);
    }
    get value() {
        // 取值的时候依赖收集
        trackEffects(this.dep)
        return this._value;
    }
    set value(newVal) {
        if (newVal !== this.rawValue) {
            // 2、set的值不等于初始值 判断新值是否是对象 进行赋值
            this._value = this._shallow ? newVal : toReactive(newVal);
            // 赋值完 将初始值变为本次的
            this.rawValue = newVal
            triggerEffects(this.dep)
        }
    }
}
