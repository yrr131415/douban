// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import $ from 'jquery';

import axios from 'axios';
Vue.prototype.axios=axios;
import {store} from './store/store'
Vue.use(ElementUI)
require("./mock");//引用mock
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store:store,
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
