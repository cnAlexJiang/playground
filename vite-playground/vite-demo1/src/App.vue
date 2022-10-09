

<template>
  <div>
    container1
    <TestA></TestA>
    <TestC aa="11" bb="22"> </TestC>
    <TestE @submit="test1" @test2="test2" />
  </div>
</template>
<script setup>
import TestA from './components/TestA.vue';
import TestC from './components/TestC.vue';
import TestE from './components/TestE.vue';
import { provide } from 'vue'

provide(/* 注入名 */ 'message', /* 值 */ 'hello!')

function test1() {
  console.log(111, ...arguments)
}
function test2() {
  console.log(222, ...arguments)
}

</script>
<style scoped>

</style>
