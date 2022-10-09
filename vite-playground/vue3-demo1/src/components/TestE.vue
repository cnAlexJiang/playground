<!-- defineEmits -->
<template>
  <div>
    defineEmits
    <button @click="buttonClick">test1</button>

    <button @click="buttonClick2">test2</button>
  </div>
</template>
<script setup>
import { inject, defineEmits, onMounted } from 'vue'
console.log('testE on setup')

const message = inject('message')

console.log('inject', message)
const emit = defineEmits(['test2', 'submit'])

function buttonClick() {
  emit('submit', { a: 111 })
}
function buttonClick2() {
  emit('test2', { b: 111 })
}
onMounted(() => {
  console.log('testE on mounted')
})
</script>
<style scoped></style>
