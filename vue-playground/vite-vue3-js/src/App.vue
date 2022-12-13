<script setup>
import { ref, reactive } from 'vue'

import HelloWorld from './components/HelloWorld.vue'

const a = ref(10)

const b = reactive({ value: 10 })
console.log(11, a)
console.log(22, b)

</script>

<template>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
