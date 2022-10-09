

<template>
    <div>
        ref & reactive
        <div>computed result {{t3}}</div>
    </div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue'

const t1 = ref(0)
const t2 = reactive({ a: 1 })

console.log(11, t1, t1.value)
console.log(22, t2)
const t3 = computed(() => {
    return t1.value + t2.a
})
console.log(33, t3)

</script>
<style scoped>

</style>
  