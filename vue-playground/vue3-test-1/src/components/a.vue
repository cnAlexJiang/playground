<script setup>
import { ref, onMounted } from 'vue'
import { useFetchList } from '../api/index'
let { list } = useFetchList()
</script>

<template>
    <h1>aa = {{ list }}</h1>
</template>

 