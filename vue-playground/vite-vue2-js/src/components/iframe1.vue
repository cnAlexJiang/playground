 
<script>
import {Global} from '../core/index'
import Vue from 'vue'

export default {
  data() {
    return {
      state : Global.state
    };
  },
  created() {
    console.log('iframe is created', this, Global)
    window.Vue = Vue;

  },
  mounted() {
  },
  render(h) {
    return h('div', [
      h('div', {}, 'iframe111'),
      h('div', {}, this.state.a),
    ])
  }
};
</script>
<style scoped></style>
