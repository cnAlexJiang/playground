

<template>
    <div>
        <button @click="increment">
            {{ state.count }}
        </button>

        <div>
            <input ref="input1">
            <input :ref="(el) => {
                             /* 将 el 赋值给一个数据属性或 ref 变量 */ 
                             ref2= el
            }">

        </div>

    </div>
</template>
<script setup>
import { reactive, watch, ref, onMounted } from 'vue'
const state = reactive({ count: 0 })

function increment() {
    state.count++
}
// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input1 = ref(null)
const ref2 = ref(1)
onMounted(() => {
    console.log('ref=', input1)
    console.log('ref2=', ref2)
})
// 可以直接侦听一个 ref
watch(state, async (n, o) => {
    console.log('change-state', n, o)
})




</script>
<style scoped>

</style>
  