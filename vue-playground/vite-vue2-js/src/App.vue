<template>
  <div id="app">
    <!-- <div @click="back">
      back
    </div>
    <router-view></router-view> -->
    213
    <test-web-comp msg=123 />
  </div>
</template>

<script>
import wrap from '@vue/web-component-wrapper'
import Vue from 'vue'
import testWebComp from './components/testWebComp.vue'
const CustomElement = wrap(Vue, testWebComp)
window.customElements.define('test-web-comp', CustomElement)


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