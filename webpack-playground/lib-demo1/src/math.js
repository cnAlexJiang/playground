// math.js

import _ from "lodash";

export function join(a,b){
    // return a+" "+b;
    return _.join([a,b]," ");
}


export function add(a,b){
    return a+b;
}

export function minus(a,b){
    return a-b;
}

export function multiply(a,b){
    return a*b;
}

export function division(a,b){
    return a/b;
}