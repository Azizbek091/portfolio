import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Глобальная регистрация компонента

import BtnMore from './components/UI/BtnMore.vue'
import Connect from './components/AP/ConnectUs.vue'
import Loader from './components/UI/Loader.vue'

app.component('BtnMore',BtnMore)
app.component('Connect',Connect)
app.component('Loader',Loader)

app.mount('#app')
