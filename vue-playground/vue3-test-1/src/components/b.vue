<script setup>
import { ref, onMounted } from 'vue'
import { useFetchList } from '../api/index'
let { list } = useFetchList()


</script>

<template>
    <h1>bb= {{ list }}</h1>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
