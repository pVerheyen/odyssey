import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'

import { router } from './routes'
import './css/main.css'

import lightbox from 'vlightbox';
Vue.use(lightbox);
Vue.use(BootstrapVue);
Vue.use(VueRouter)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})