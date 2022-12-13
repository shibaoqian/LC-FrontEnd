import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import stores from "@/stores/index.js";

const mainApp = createApp(App)

mainApp.use(stores)

mainApp.mount('#app')
