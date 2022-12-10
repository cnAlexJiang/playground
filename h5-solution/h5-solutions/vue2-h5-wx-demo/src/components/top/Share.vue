<template>
  <div class="share-button-container">
    <img src="../../assets/top/share.svg" class="icon" />
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
.share-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  width: 24px;
  height: 24px;
  .icon {
    width: 8px;
    height: 8px;
  }
}
</style>
