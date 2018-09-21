import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VeeValidate from 'vee-validate'; 
Vue.use(VeeValidate);  

new Vue({
  render: h => h(App)
}).$mount('#app')
