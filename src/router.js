//Imports
import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home';

Vue.use(Router);

const router = new Router({  //Define como o router vai se comportar
    mode: 'history',
    routes:[{
        path: '/',
        name: 'app',
        component: Home
    }]
});

export default router; //Exporta o router