<template>
  <div>
    container1
    <TestA></TestA>
    <TestC aa="11" bb="22"> </TestC>
    <TestE @submit="test1" @test2="test2" />
    <TestDirect></TestDirect>
    <h1>{{ $translate('greetings.hello') }}</h1>
    TestRouter
    <br>
    <TestStore />
    <div>
      <button @click="globalCount++">globalCount-{{ globalCount }}</button>
    </div>
    <div>
      <button @click="localCount++">localCount-{{ localCount }}</button>
    </div>
  </div>
</template>
<script setup>
import TestA from './components/TestA.vue'
import TestC from './components/TestC.vue'
import TestE from './components/TestE.vue'
import TestDirect from './components/TestDirect.vue'
import TestStore from './components/TestStore.vue'
import { useCount } from './store/testHook'




import { provide, onMounted } from 'vue'
console.log('app on setup')

provide(/* 注入名 */ 'message', /* 值 */ 'hello!')

function test1() {
  console.log(111, ...arguments)
}
function test2() {
  console.log(222, ...arguments)
}
onMounted(() => {
  console.log('app on mounted')
})


const { globalCount, localCount } = useCount()

</script>
<style scoped>

</style>
