import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'
import { initSocket } from './socket'

import './assets/main.css'

initSocket('ws://127.0.0.1:3000')

const app = createApp(App)
app.use(router)
app.use(createPinia())

app.mount('#app')
