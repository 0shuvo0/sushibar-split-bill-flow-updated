import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast, { POSITION } from "vue-toastification"
// import "vue-toastification/dist/index.css"

import '@/assets/global.scss'

const app = createApp(App)

app.use(store)
    .use(router)
    .use(Toast, { position: POSITION.BOTTOM_RIGHT })
    .mount('#app')
