<template>
  <div>
    <template v-if="src">
      <iframe :src="src" frameborder="0" ref="gui-iframe-render"></iframe>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: '',
    }
  },
  created() {
    const resolved = this.$router.resolve({
      name: 'simulate',
      params: Object.assign({}, this.$route.params, {}),
    })
    console.log(111, resolved)
    console.log(22, this)
    this.src = resolved.href

    //回调函数
      function receiveMessageFromIframePage (event) {
          console.log('receiveMessageFromIframePage', event)
      }

      //监听message事件
      window.addEventListener("message", receiveMessageFromIframePage, false);

  },
}
</script>
