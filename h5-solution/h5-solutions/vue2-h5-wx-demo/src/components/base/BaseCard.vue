<template>
  <div class="base-card">
    <div class="card-top" v-if="type === 'one'">
      <img v-if="!!content.categoryImg" class="card-top-img" style="" :src="content.categoryImg">
      <img v-else class="card-top-img" src="../../assets/base/img-fail.svg">
      <div class="img-bottom-divide"></div>
    </div>
    <div class="card-title" v-if="type === 'one'">
      <span class="span-title">{{ bottomContent }}</span>
    </div>

    <div class="card-top" style="justify-content: center;" v-if="type === 'two'">
      <span class="span-title">{{ bottomContent }}</span>
    </div>
    <div class="card-title" v-if="type === 'two'">
    </div>



  </div>
</template>

<script>
// 请求接口
export default {
  props: {
    type: {
      default: 'one',// one , two
    },
    content: {
      default: () => { return {} }
    },
    topWords: {
      default: () => []
    },
    bottomContent: {},
    value: {}
  },
  created() {
  },
  methods: {
    handleInput(event) {
      let value = event.target.value
      this.$emit('input', value)
      this.$emit('on-change', event)
    }
  }
}
</script>

<style lang="scss">
.base-card {
  width: 100px;
  height: 100px;
  border-radius: 6px;
  background: #ffffff;
  display: flex;
  flex-direction: column;

  .card-top {
    height: 75px;
    opacity: 0.93;
    background: #CBD9DC;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .top-words {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.85);
      letter-spacing: 0;
      text-align: center;
      font-weight: 500;
    }

    .card-top-img {
      margin-top: 12px;
      width: 100%;
      max-width: 40px;
      max-height: 40px;
      height: calc(100% - 14px);

    }

    .img-bottom-divide {
      display: block;
      width: 100%;
      height: 14px;
      background: #DCE7E8;
      border-radius: 4px;
    }
  }

  .card-title {
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .span-title {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }
}
</style>
