import { ref } from 'vue'

export function useMouse() {
    let x = ref(0)
    let y = ref(0)
    window.addEventListener('mousemove', (e) => {
        x.value = e.clientX
        y.value = e.clientY
    })
    return {
        x, y
    }
}