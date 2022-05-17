<template>
  <div>
    i am child 222
    <div>
      <div>
        <button @click="jump(1)">go grand son 1</button>
        <button @click="jump(2)">go grand son 2</button>
      </div>
      <div class="route-container" key='child2'>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('child222  Created')
  },
  methods: {
    jump(i) {
      this.$router.push({ name: 'g' + i })
    },
  },
}
</script>

<style></style>
