// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './../node_modules/materialize-css/dist/css/materialize.css'
import VueResource from 'vue-resource'
import Materials from "vue-materials"
Vue.use(Materials)
Vue.use(VueResource)
Vue.config.productionTip = false

Vue.http.options.root = process.env.SERVER

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
