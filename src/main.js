import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
// Font Awesome
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import {
  faSearch,
  faCircleNotch,
  faPlay,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faSearch, faCircleNotch, faPlay, faBars, faClose);
import DocsExample from '@/components/DocsExample'
import './styles/global.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsExample', DocsExample)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')

