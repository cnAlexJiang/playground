import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import App2 from './App2.vue'
import i18nPlugin from './plugins/i18n'


const app1 = createApp(App)
const app2 = createApp(App2)



app1.use(i18nPlugin, {
    greetings: {
        hello: 'Bonjour!'
    }
})

app1.mount('#app1')

app2.mount('#app2')