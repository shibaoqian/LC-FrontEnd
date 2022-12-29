import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style.css'
import App from '@/App.vue'
import stores from "@/stores/index.js";

const mainApp = createApp(App)

mainApp.use(stores).use(ElementPlus)

mainApp.mount('#app')
