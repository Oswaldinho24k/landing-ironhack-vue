// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'


import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyDG6RhXSRZ1xrE4jjT3KDZxoMmD1WDQglE",
  authDomain: "ironhack-admin.firebaseapp.com",
  databaseURL: "https://ironhack-admin.firebaseio.com",
  projectId: "ironhack-admin",
  storageBucket: "",
  messagingSenderId: "69631709491"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
