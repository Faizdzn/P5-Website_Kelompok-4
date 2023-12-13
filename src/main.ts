//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style1.css'
import './assets/font-awesome.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
