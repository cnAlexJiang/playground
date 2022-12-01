
import { ref, onMounted, onUnmounted } from 'vue'


class Test {
    constructor() {
        this.a = undefined
    }
    async fetch() {
        return new Promise(reslove => {
            setTimeout(() => {
                reslove([1, 2, 3])
            }, 1000)
        })
    }
    getData() {
        if (!this.a) {
            this.a = this.fetch()
            console.log('do-cache')
            return this.a
        }
        console.log('catch-cache')

        return this.a
    }
}

const ins = new Test();

// 按照惯例，组合式函数名以“use”开头
export function useFetchList() {
    // 被组合式函数封装和管理的状态
    const list = ref([])
    // 一个组合式函数也可以挂靠在所属组件的生命周期上
    // 来启动和卸载副作用
    onMounted(async () => { list.value = await App.getData(); console.log(list) })
    // 通过返回值暴露所管理的状态
    return { list }
}



export const App = ins;



