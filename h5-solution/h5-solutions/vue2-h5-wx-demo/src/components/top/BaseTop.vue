<template>
  <div class="base-top">
    <BackButton v-if="showBack" class="back-icon" @click.native="clickEmit" />
    <Logo class="logo-icon" />
  </div>
</template>

<script>
// 请求接口
import BackButton from './Back.vue'
import Logo from './Logo.vue'
export default {
  props: {
    showBack: {
      default: true
    }
  },
  components: {
    BackButton,
    Logo
  },
  methods: {
    clickEmit(e) {
      this.$emit('on-click', e)
    }
  }
}
</script>

<style lang="scss">
.base-top {
  position: relative;
  height: 64px;

  .back-icon {
    position: absolute;
    top: 20px;
    left: 15px;
  }

  .logo-icon {
    position: absolute;
    bottom: 20px;
    right: 15px;
  }
}
</style>
