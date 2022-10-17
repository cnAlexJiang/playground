
<!-- slot test-->
<template>
    <div>
        test direct
        <input v-focus:foo="asd" />
        <input v-demo="'asds'" />

    </div>
</template>
<script setup>
const asd = 123
// 在模板中启用 v-focus
const vFocus = {
    mounted: (el, binding, vnode, prevVnode) => {
        console.log('test-direct', el, binding)
        el.focus()
    }
}

const vDemo = {
    mounted: (el, binding, vnode, prevVnode) => {
        console.log('test-vDemo', binding)
    }
}
</script>
<style scoped>

</style>
  