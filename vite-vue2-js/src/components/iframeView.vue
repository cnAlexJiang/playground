<template>
  <div style="height:100%;overflow: auto;" >
  <div>parentstate : {{state.a}}</div>
    <iframe ref="iframe" :src="src" width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script>
import {Global} from '../core/index'
import Vue from 'vue'

export default {
  data() {
    return {
      src: '../#/iframe1',
      loading: true,
      state:Global.state
    };
  },
  created() {
    console.log('parent is created', this, Global)
  },
  mounted() {
    const { iframe } = this.$refs;
    window.testiFrame = iframe;
    window.Vue = Vue;
    // IE和非IE浏览器，监听iframe加载事件不一样，需要兼容
    const that = this;
    if (iframe.attachEvent) {
      // IE
      iframe.attachEvent('onload', () => {
        that.stateChange();
      });
    } else {
      // 非IE
      iframe.onload = function () {
        that.stateChange();
      };
    }
  },
  methods: {
    stateChange() {
      this.loading = false;
    },
  },
};
</script>
<style scoped></style>
