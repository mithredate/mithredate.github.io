import { createApp } from 'vue'
import App from './App.vue'
import './assets/fonts.css'
import './assets/main.css'
import { loadMetaTags } from './contentLoader.js'

// Load meta tags on app initialization
loadMetaTags()

createApp(App).mount('#app')