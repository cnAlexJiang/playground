<template>
  <div class="container">
    i am parent
    <div>
      below is router view
    </div>
    <div>
      <button @click="jump(1)">go 1</button>
      <button @click="jump(2)">go 2</button>
    </div>
    <div class="route-container" key="parent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('parent Created')
  },
  methods: {
    jump(i) {
      this.$router.push({ name: 'c' + i })
    },
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.route-container {
  width: 600px;
  height: 600px;
  border: 1px solid red;
}
</style>
