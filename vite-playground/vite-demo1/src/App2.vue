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
  </div>
</template>
<script setup>
import TestBVue from './components/TestB.vue';
import TestD from './components/TestD.vue';
import TestF from './components/TestF.vue';
</script>
<style scoped>

</style>
