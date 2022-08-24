<template>
  <div class="nav">
  
    <ul style="width:600px;" @click="jump">
      <li>observer</li>
      <li>cssVariable</li>
      <li>routerQuyery</li>
      <li>tagTemplate</li>
      <li>boxSizing</li>
      <li>capture</li>
      <li>svgTest</li>
      <li>iframeView</li>
      
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
 
    jump(e) {
      const innerHTML = e.target.innerHTML;
      console.log("jump",innerHTML, this.$router.currentRoute.name)
      if(this.$router.currentRoute.name !== innerHTML) {
        this.$router.push(
          {name: innerHTML}
        )
      }
    }
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
.nav{
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100vh;
  width: 100%;
  overflow: auto;
}
</style>