<template>
  <div class="p69145_comp0_class">
    <i-input
      ref="input4"
      :maxlength="200"
      v-model="variable_dataSyncOfInput"
      class="p69145_comp4_class"
    ></i-input>
    <Button
      type="primary"
      @click.native="method_onClickNativeOfButton2"
      class="p69145_comp2_class"
      >alert</Button
    >
  </div>
</template>

<script>
import Validator from 'Validator';
import { Message } from '@idg/iview';

const PAGE_UUID = 'sal200005a4dc54b2204131r9m0y09p1';

export default {
  depends: ['controller.GlobalMethodController'],

  data() {
    return { variable_dataSyncOfInput: '' };
  },

  props: [],

  watch: {
    '$route.query': {
      handler(val) {
        this._created();
      },
      deep: true,
    },
  },

  created() {
    this._created();
  },

  computed: {
    PAGE_UUID() {
      return PAGE_UUID;
    },
    isCN() {
      return this.$app.getLocale() === 'zh-CN';
    },
  },

  methods: {
    _created: function () {},
    method_onClickNativeOfButton2: function () {
      const _this = this;

      this.$Message.info({ content: this['variable_dataSyncOfInput'] });
    },
  },
};
</script>

<style scoped>
.p69145_comp4_class {
  height: auto !important;
  line-height: normal !important;
  vertical-align: middle !important;
  width: 200px !important;
}
.p69145_comp2_class {
  margin: 0px 0px 0px 40px !important;
  width: fit-content !important;
}
.p69145_comp0_class {
  height: 100% !important;
  width: 100% !important;
}
</style>
