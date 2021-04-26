import Vue from 'vue'
import App from './App.vue'
import VTrack from 'v-track';
import trackEvents from './tracks'

Vue.config.productionTip = false

Vue.use(VTrack, {
  trackEvents,
  trackEnable: {
    UVPV: true,
    TONP: true
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
