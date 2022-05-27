<template>
  <div>


    <!-- <div @click="(e)=>{log(1,e)}" @click.capture="(e)=>{log(11,e)}">
      1
      <div @click="(e)=>{log(2,e)}" @click.capture="(e)=>{log(22,e)}">
        2
        <div @click="(e)=>{log(3,e)}" @click.capture="(e)=>{log(33,e)}">
          3
          <div @click="(e)=>{log(4,e)}" @click.capture="(e)=>{log(44,e)}">
            4
          </div>
        </div>
      </div>
      
    </div> -->


    <div  @click="(e)=>{log(1,e)}" >
      1
      <div >
        2
        <div @click="(e)=>{log(3,e)}">
          3
          <div  >
            4
          </div>
        </div>
      </div>
    </div>


    <!-- <div @click="(e)=>{log(1,e)}" >
      1
      <div @click="(e)=>{log(2,e)}" >
        2
        <div @click="(e)=>{log(3,e)}"  >
          3
          <div @click="(e)=>{log(4,e)}"  >
            4
          </div>
        </div>
      </div> -->
      

  </div>
</template>

<script>
export default {
  methods: {
    log (n,e) {
      e.stopPropagation();
      console.log(n,e)
    }
  }
}
</script>
 
<style scoped>
</style>