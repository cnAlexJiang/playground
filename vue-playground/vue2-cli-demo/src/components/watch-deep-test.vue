<template>
  <div>
    测试watch-deep
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>
    <button @click="h1" type="button">11</button>
    <button @click="h2" type="button">22</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2],
      obj: {
        a: 2,
      },
    }
  },
  methods: {
    h1() {
      // this.arr[0]++
      this.arr.push({
        a: 2,
      })
    },
    h2() {
      this.obj.a++
      // this.obj['b'] = 1;
    },
  },
  watch: {
    arr: {
      handler: function(n, o) {
        console.log('arr', n, o, n == o)
      },
      deep: true,
    },
    obj: {
      handler: function(n, o) {
        console.log('obj', n, o, n == o)
      },
      deep: true,
    },
  },
}
</script>

<style></style>
