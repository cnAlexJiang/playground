<template>
  <div @click="clickHandler">
    <RadioGroup v-model="button4" type="button" size="large">
      <Radio label="北京"></Radio>
      <Radio label="上海"></Radio>
      <Radio label="深圳"></Radio>
      <Radio label="杭州"></Radio>
    </RadioGroup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      button4: '北京',
      button5: '北京',
      button6: '北京',
    }
  },
  methods: {
    clickHandler(e) {
      console.log(1111, e, e.target)
    },
  },
}
</script>
