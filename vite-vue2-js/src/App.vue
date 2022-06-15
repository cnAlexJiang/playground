<template>
  <div id="app">
    <div @click="back">
      back
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    },
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>