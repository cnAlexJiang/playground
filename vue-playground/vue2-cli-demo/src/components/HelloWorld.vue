<template>
  <div class="hello">
    <div
      style="transform: scale(1);width: 375px;height: 667px;display: inline-block;"
    >
      <div class="container">
        <!-- <RenderText /> -->
        <!-- <radioTest /> -->
        <!-- <splitTest/> -->
        <!-- <slotDefaultTest class="demo1" data_comp_id="1" :inheritAttrs="false">
          </slotDefaultTest> -->
        <!-- 
      <div style="display:flex;height:200px">
        <div style="background:red;width:100px;"></div>
        <div style="background:blue;width:100px;flex-grow:1; flex-basis:100px;"></div>
        <div style="background:green; flex-grow:1"></div>
      </div> -->
        <!-- <createdAsync /> -->
        <contenteditable/>
      </div>
    </div>
  </div>
</template>

<script>
// import RenderText from './RenderTest.vue'
// import radioTest from './radio-test.vue'
// import  splitTest from './split-test.vue'
// import  watchDeepTest from './watch-deep-test.vue'
// import  keepAliveTest from './keep-alive-test.vue'
// import   slotDefaultTest from './slot-default-test.vue'
// import createdAsync from './created-async.vue'
import contenteditable from './contenteditable.vue'
export default {
  name: 'HelloWorld',
  components: {
    // RenderText,
    // radioTest,
    // splitTest,
    // watchDeepTest,
    // keepAliveTest,
    // slotDefaultTest
    // createdAsync,
    contenteditable
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
