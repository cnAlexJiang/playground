<template>
  <div class="hello">
    <div
      style="transform: scale(1);width: 375px;height: 667px;display: inline-block;"
    >
      <div class="container">
        <div @click="handler">
          <label>
            <span>
              <!-- <input type="text" /> -->
              <select></select>
              <div>123123</div>
              <span></span>
            </span>
            <span>
              sadsad
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
  },
  props: {
    msg: String,
  },
  methods: {
    handler(e) {
      // e.preventDefault()
      console.log(222, e, e.target)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid red;
}
</style>
