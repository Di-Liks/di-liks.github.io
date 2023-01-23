import { createApp } from 'vue'
import store from './store.js'
import App from './App.vue'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

createApp(App).use(store).mount('#app')
