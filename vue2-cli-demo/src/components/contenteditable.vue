<template>
  <div>
    <div
      class="container sad left"
      data-direction="left"
      contentEditable
      @propertychange="test"
      @keydown="keydownHandle"
      @blur="blurHandle"
    >
      123
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    test(e) {
      console.log(111, e)
    },
    keydownHandle(e) {
      console.log(22, e.target.innerHTML)
      if (e.keyCode === 13) {
        e.preventDefault()
        let target = e.target
        console.log('keydownHandler ',e, target.innerHTML, target)
      }
    },
    blurHandle(e) {
      console.log('blurHandle', e.target.innerHTML)
    },
  },
}
</script>

<style></style>
