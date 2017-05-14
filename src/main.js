// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import './filters';
import _ from 'lodash';
import App from './App';
import store from './vuex/store';

Vue.use(Vuex)
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    'app': App
  },
  store
});
