import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import {router} from './routes'
import {store} from './store/store'

Vue.use(BootstrapVue)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
