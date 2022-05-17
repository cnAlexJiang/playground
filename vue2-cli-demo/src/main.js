import Vue from 'vue'
import App from './App.vue'

import iview from '@idg/iview'
import '@idg/iview/dist/styles/custom.css'


import {router} from './router' 

Vue.config.productionTip = false
Vue.use(iview)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app') 