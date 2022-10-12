
<!-- slot test-->
<template>
    <div>
        test direct
        <input v-focus />

    </div>
</template>
<script setup>
// 在模板中启用 v-focus
const vFocus = {
    mounted: (el) => {
        console.log('test-direct', el)
        el.focus()
    }
}
</script>
<style scoped>

</style>
  