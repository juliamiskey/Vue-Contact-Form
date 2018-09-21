import Vue from 'vue'
import VeeValidate from 'vee-validate'; 
import App from './App.vue'
import Vuemq from 'vue-mq'

Vue.config.productionTip = false


Vue.use(VeeValidate);  

new Vue({
  render: h => h(App)
}).$mount('#app')


Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})

