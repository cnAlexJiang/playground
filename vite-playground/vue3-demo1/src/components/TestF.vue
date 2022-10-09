
<!-- slot test-->
<template>
    <div>
        slot test
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>

    </div>
</template>
<script setup>
import { reactive, ref, computed, defineProps, defineEmits } from 'vue'

const emit = defineEmits(['test2', 'submit'])

function buttonClick() {
    emit('submit', { a: 111 })
}



</script>
<style scoped>

</style>
  