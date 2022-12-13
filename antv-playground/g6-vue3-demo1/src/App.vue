<template>
  <div id="container" style="width: 800px;height: 600px;"></div>
 
</template>
<script setup>
import { onMounted } from 'vue'
import {init} from './auto-layout/test3'
onMounted(() => {
  init()
})
</script>
<style scoped></style>
