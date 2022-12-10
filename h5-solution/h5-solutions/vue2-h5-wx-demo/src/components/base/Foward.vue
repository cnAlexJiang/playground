<template>
  <div class="foward-button-container">
    <img src="../../assets/top/back-icon.svg" class="icon" />
  </div>
</template>

<script>
// 请求接口
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.foward-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  width: 24px;
  height: 24px;
  .icon {
    transform: rotate(180deg);
    width: 8px;
    height: 8px;
  }
}
</style>
