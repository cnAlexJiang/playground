<template>
  <div id="container" style="width: 800px;height: 600px;"></div>
 
</template>
<script setup>
import { onMounted } from 'vue'
import {init} from './shortcut/test1'
onMounted(() => {
  init()
})
</script>
<style scoped></style>
