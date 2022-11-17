<template>
  <div>
      <button @click="test= !test">chagne test </button>
  
    <div v-if="test">  dom change </div>
    <div> 
        <CompB/>
        <CompC/>
    </div>
  </div>
</template>

<script>
import CompB from './CompB.vue'
import CompC from './CompC.vue'
export default {
  data() {
    return {
      test: false,
    }
  },
  created() {
    console.log('comp A cretaed')
  },
  components:{
    CompB,
    CompC
  }
}
</script>
 
<style scoped>
.border-box {
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  border: 20px solid red
}

.content-box {
  box-sizing: content-box;
  width: 200px;
  height: 200px;
  border: 20px solid red
}
</style>