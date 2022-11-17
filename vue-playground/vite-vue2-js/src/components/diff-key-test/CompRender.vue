 

<script>
import CompC from './CompC.vue'
export default {
  name:'TestRender',
  data() {
    return {
    }
  },
  created() {
    console.log('comp render text cretaed')
  },
  render(h) {
    return h('div', [
      h('div','test-render'),
      h(CompC,{attrs:{a:1},props:{a:1}},234),
    ])
  }
}
</script>
 