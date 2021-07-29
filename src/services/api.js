import axios from 'axios';
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const api = axios.create({  //cria const api com a baseURL
    baseURL: 'http://127.0.0.1:8000/api/v1/produto'
})

export default api; //Exporta api