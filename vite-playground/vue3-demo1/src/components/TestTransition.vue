
<!-- slot test-->
<template>
    <button @click="show = !show">Toggle</button>
    <Transition>
        <p v-if="show">hello</p>
    </Transition>

</template>
<script setup>
import { ref } from 'vue'
let show = ref(false)

</script>
<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
  