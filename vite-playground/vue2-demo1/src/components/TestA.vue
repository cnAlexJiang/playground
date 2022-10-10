<template>
  <div class="testa" @contextmenu="handler">TestA</div>
</template>
<script>
export default {
  created() {
    console.log('TestA created')
  },
  methods: {
    handler (e) {
      e.preventDefault();
      return false
    }
  }
}
</script>
<style scoped>
.testa{
  width: 400px;
  height: 400px;
  border: 1px solid red;
}
</style>
