<template>
  <div class="act-card">
    <!-- <div class="card-top">
      <div class="top-title">{{ topWords }}</div>
    </div>
    <div class="card-divide"></div> -->
    <div class="card-content">
      {{ bottomContent }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topWords: {
      default: '待文案填充'
    },

    bottomContent: {
      default: `一等奖：xxxxxxxxxxx
      二等奖：xxxxxxxx
      三等奖：xxxxxxxxxxxxxxxxxxxxx
      开奖方式：xxxxxxxxxxxxxxxxxxxxxxxxx`
    },
    value: {}
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
.act-card {
  width: 100%;
  height: auto;
  padding: 0 15px;
  background-image: linear-gradient(-45deg, #b1daff 0%, #0078ff 100%);
  border-radius: 26px;

  .card-top {
    height: 40px;
    opacity: 0.93;
    display: flex;
    align-items: flex-end;

    .top-title {
      font-size: 12px;
      color: #ffffff;
      line-height: 22px;
      font-weight: 500;
      margin-bottom: 4px;
    }
  }

  .card-divide {
    opacity: 0.1;
    border-bottom: 1px solid #ffffff;
    margin-bottom: 8px;
  }

  .card-content {
    font-size: 10px;
    color: #ffffff;
    text-align: justify;
    line-height: 22px;
    font-weight: 400;
    white-space: pre-line;
    padding: 24px 0;
  }
}
</style>
