
<!-- defineProps -->
<template>
    <div>
        define props
        <div>{{aa}}</div>
        <div>{{bb}}</div>
    </div>
</template>
<script setup>
import { reactive, ref, computed, defineProps } from 'vue'

const props = defineProps([
    'aa', 'bb'
])
console.log('testC', props)
</script>
<style scoped>

</style>
  