

import {getActiveEffect} from './effect'

let bucket = new Set()


export function reactive(target: object){
  const obj =new Proxy(target, {
    get(target, key){
      // 需要知道effect 干了什么
      bucket.add(getActiveEffect())
      return target[key];
    },
    set(target, key, value){
      target[key] = value;
      bucket.forEach(fn=>fn())
      return true
    }
  });
  return obj;
}