<template>
  <div>
    <div>
      i am parent
    </div>
    <child v-if="parentLoaded" />
  </div>
</template>
<script>
import child from './created-async-child.vue'
const delay = (time, msg) => {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('finished time=', time)
      resolve(msg)
    }, time)
  })
}
export default {
  data() {
    return {
      parentLoaded: false,
    }
  },
  components: {
    child,
  },
  // 测试一
  // async beforeCreate() {
  //   console.log('beforeCreate - delay')
  //   console.log(await delay(3000, 'BEFORE CREATE'))
  //   console.log('beforeCreate - loading')
  // },
  // async created() {
  //   console.log('CREATE - delay')
  //   console.log(await delay(2000, 'CREATE'))
  //   console.log('created - loading')
  // },
  // async mounted() {
  //   console.log('mounted - delay')
  //   console.log(await delay(1000, 'mounted'))
  //   console.log('mounted - loading')
  // },
  // 测试2
  async created() {
    console.log('CREATE - delay')
    this.parentLoaded =true;
    console.log(await delay(2000, 'CREATE'))
    console.log('created - loading')
  },
  methods: {},
}
</script>
