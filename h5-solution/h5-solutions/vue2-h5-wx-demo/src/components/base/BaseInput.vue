<template>
  <div class="base-input">
    <img src="../../assets/base/search.svg" class="icon" />
    <input @input="debounceHandleInput" @blur="blurHandler" @focus="focusHandler" type="text" placeholder="Search"
      class="input" :style="inputStyle" v-model="inputValue" />
  </div>
</template>

<script>
import _ from 'lodash'
// 请求接口
export default {
  props: {
    value: {}
  },
  data() {
    return {
      inputStyle: {
        color: 'inherit'
      },
      debounceHandleInput: 1,
      inputValue: '',
    }
  },
  watch: {
    value(n) {
      this.inputValue = n
    }
  },
  created() {
    this.debounceHandleInput = _.debounce(this.handleInput, 300)
  },
  methods: {
    handleInput(event) {
      let value = event.target.value
      this.$emit('input', value)
      this.$emit('on-change', event)
    },
    blurHandler() {
      console.log('blur')
      this.inputStyle.color = 'inherit'
      this.$emit('on-blur')
    },
    focusHandler() {
      console.log('focus')
      this.$emit('on-focus')
      this.inputStyle.color = '#fff'
    }
  }
}
</script>

<style lang="scss">
.base-input {
  position: relative;
  width: 164px;
  height: 36px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;

  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0;
  line-height: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;

  .icon {
    margin-left: 10px;
    margin-right: 10px;
    width: 14px;
    height: 14px;
  }

  .input {
    display: inline-block;
    background: none;
    border: none;
    box-shadow: none;
    width: 120px;
  }
}
</style>
