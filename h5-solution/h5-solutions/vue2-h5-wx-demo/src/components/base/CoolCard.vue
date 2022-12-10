<template>
  <div class="cool-card">
    <div class="card-words">{{ content.contentTitle }}</div>
    <div class="card-icon">
      <Foward />
    </div>
  </div>
</template>

<script>
// 请求接口
export default {
  props: {
    content: {
      default: () => { return {} }
    },
    bottomContent: {},
    value: {}
  },
  methods: {}
}
</script>

<style lang="scss">
.cool-card {
  box-sizing: border-box;
  width: 100%;
  height: 52px;
  background-image: linear-gradient(-45deg, #b1daff 0%, #0078ff 100%);
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;

  .card-words {
    display: flex;
    font-size: 12px;
    color: #ffffff;
    line-height: 22px;
    font-weight: 500;
    max-width: 200px;
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
  }

  .card-icon {}
}
</style>
