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
    <TestTeleport />
    <br>
    <TestRouter />
    <br>
    <TestStore />
    <br>
    <div>
      <button @click="globalCount++">globalCount-{{ globalCount }}</button>
    </div>
    <div>
      <button @click="localCount++">localCount-{{ localCount }}</button>
    </div>
  </div>
</template>
<script setup>
import TestBVue from './components/TestB.vue';
import TestD from './components/TestD.vue';
import TestF from './components/TestF.vue';
import TestHook from './components/TestHook.vue';
import TestTransition from './components/TestTransition.vue'
import TestTeleport from './components/TestTeleport.vue'
import TestRouter from './components/TestRouter.vue'
import TestStore from './components/TestStore.vue'

import { useCount } from './store/testHook'

const { globalCount, localCount } = useCount()


</script>
<style scoped>

</style>
