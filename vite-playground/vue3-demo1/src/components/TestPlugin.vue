
<!-- slot test-->
<template>
    <div>
        test hook
        {{x}} -- {{y}}

    </div>
</template>
<script setup>
import { useMouse } from '../hooks/index'

const { x, y } = useMouse()


</script>
<style scoped>

</style>
  