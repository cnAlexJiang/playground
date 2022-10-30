

<template>
    <button @click="store.count++">
        {{ store.count }}
    </button>
</template>
<script setup>

import { store } from '../store/app'


</script>
<style scoped>

</style>
  