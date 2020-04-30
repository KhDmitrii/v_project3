import Vue from 'vue'
import App from './App.vue'
// import MyWorker from './components/myworker.vue'

Vue.config.productionTip = false

// Vue.component('app-worker', MyWorker);

new Vue({
  render: h => h(App),
}).$mount('#app')
