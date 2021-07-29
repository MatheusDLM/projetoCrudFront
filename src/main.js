import Vue from 'vue'
import App from './App.vue'
import router from './router'; //importa router


Vue.config.productionTip = false

new Vue({
  router, //Chama o router para ser utilizado
  render: h => h(App),
}).$mount('#app')
