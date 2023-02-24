<template>
  <div class="title">
    <h1 class="title">web component</h1>
    <h1>{{ msg }}</h1>
    <button @click="print">console</button>
  </div>
</template>

<script>
import { state } from '../util/global'
export default {
  props: ['msg'],
  methods: {
    print() {
      console.log(state.value)
    },
  },
}
</script>

<style>
.title {
  color: red;
}
@media (max-width: 800px) {
  .title {
    color: green;
  }
}
</style>
