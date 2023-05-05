import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vueRouter } from './router/index'

import App from './App.vue'
import './assets/base.css'

const router = vueRouter
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
