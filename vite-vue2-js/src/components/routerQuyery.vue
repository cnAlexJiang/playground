<template>
  <div>
    router query
    <div>
      <button type="button" @click="jump">带参数跳转</button>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.push({
        name: 'routerQuyeryChild',
        query: {
          category_id: 13,
          sadasd: 'asdasd'
        },
      });
    }
  }
}
</script>

<style>
</style>