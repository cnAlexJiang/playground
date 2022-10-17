<!-- porp test -->

<template>
  <div>
    container2
    <TestBVue />
    <TestD aa="11" bb="22" />
    <TestF>
      111
      <template #header>222</template>
    </TestF>
    <TestHook></TestHook>
    <TestTransition />
  </div>
</template>
<script setup>
import TestBVue from './components/TestB.vue';
import TestD from './components/TestD.vue';
import TestF from './components/TestF.vue';
import TestHook from './components/TestHook.vue';
import TestTransition from './components/TestTransition.vue'
</script>
<style scoped>

</style>
