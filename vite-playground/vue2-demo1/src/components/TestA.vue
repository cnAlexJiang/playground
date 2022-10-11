<template>
  <div>
    <div class="testa" @contextmenu="handler">TestA</div>
    <div v-if="a == 'aa'">
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 'aa',
    }
  },
  created() {
    console.log('TestA created')
  },
  methods: {
    handler(e) {
      e.preventDefault()
      return false
    },
  },
}
</script>
<style scoped>
.testa {
  width: 400px;
  height: 400px;
  border: 1px solid red;
}
</style>
