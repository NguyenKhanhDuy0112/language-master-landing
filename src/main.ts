import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import BootstrapVue3 from 'bootstrap-vue-3'

import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { far } from '@fortawesome/free-regular-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, far, fab)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(BootstrapVue3)
    .use(store)
    
    .use(router)
    .mount('#app')
