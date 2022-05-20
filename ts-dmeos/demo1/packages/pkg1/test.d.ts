/** 作为函数使用 */
declare function People(w: number): number
declare function People(w: string): number

declare class People {
    /** 构造函数 */
    constructor(name: string, age: number)
    constructor(id: number)

    // 实例属性和实例方法
    name: string
    age: number
    getName(): string
    getAge(): number

    /** 作为对象，调用对象上的方法或者变量 */
    static staticA(): number
    static aaa: string
}

/** 作为对象，调用对象上的方法或者变量 */
declare namespace People {
    export var abc: number
}
