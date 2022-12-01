<script setup>
import { ref } from 'vue'
import aa from './a.vue'
import bb from './b.vue'
defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div>
    <aa></aa>
    <bb></bb>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
