import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import anime from 'animejs/lib/anime.es.js'

createApp(App).use(store).use(router).mount('#app')
