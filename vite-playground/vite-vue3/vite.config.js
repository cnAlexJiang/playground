import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
let res = process.cwd()
console.log(11 ,process.cwd())
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
