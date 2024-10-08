import './assets/main.css'
import PrimeVue from 'primevue/config';
import Vue3Toastify, { toast } from 'vue3-toastify';
import config from '../formkit.config'
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-right',
});
app.provide('toast', toast)
app.use(router)
app.use(PrimeVue, {
    unstyled: true
});
app.use(plugin, defaultConfig(config))
app.mount('#app')
