<template>
  <div>
    <keep-alive>
      <testA v-if="flag == 'a'"/>
      <testB v-else/>
    </keep-alive>

    <button @click="change">keep-alive-test</button>

  </div>
</template>

<script>
import testA from './a.vue'
import testB from './b.vue'
export default {
  data() {
    return {
      flag: 'a'
    }
  },
  components:{
    testA,
    testB
  },
  methods:{
    change(){
      this.flag  = this.flag == 'a' ? 'b' : 'a'
    }
  }
}
</script>

<style>

</style>