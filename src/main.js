import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const app = createApp(App)
library.add(faTrash)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
