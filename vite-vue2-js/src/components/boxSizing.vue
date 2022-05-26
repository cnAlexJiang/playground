<template>
  <div>
    <div class="border-box">
      <div>
        border-box    width 200 height 2000
      </div>
    </div>
    <div class="content-box">
     content-box   width 200 height 2000
    </div>

  </div>
</template>

<script>
export default {

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