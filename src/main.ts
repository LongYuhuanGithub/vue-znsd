import './assets/lib/font-awesome/css/font-awesome.min.css'
import './assets/css/normalize.css'
import './assets/css/base.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
