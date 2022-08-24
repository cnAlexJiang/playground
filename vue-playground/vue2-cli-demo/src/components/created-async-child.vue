<template>
  <div >
      <div>
        i am child
      </div>
  </div>
</template>
<script>
export default {
  async created() {
    console.log('child - loading')
    await this.delay(3000);
    console.log('child - created')
  },
  mounted() {
    console.log('child - mounted')
  },
  data() {
    return {
    }
  },
  methods: {
       delay(time) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('finished time=', time);
          resolve(1);
        }, time);
      })
    },
  },
}
</script>
