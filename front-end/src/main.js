import './assets/main.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import config from '../formkit.config'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    unstyled: true
});
app.use(plugin, defaultConfig(config))
app.mount('#app')
