import './assets/main.css'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/aura-dark-purple/theme.css'
const app = createApp(App)
app.use(PrimeVue, {})
app.use(router)

app.mount('#app')
