// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
//import VueFire from 'vuefire';

import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)
//Vue.use(VueFire);

Vue.config.productionTip = false



const config = {
  apiKey: "AIzaSyDG6RhXSRZ1xrE4jjT3KDZxoMmD1WDQglE",
  authDomain: "ironhack-admin.firebaseapp.com",
  databaseURL: "https://ironhack-admin.firebaseio.com",
  projectId: "ironhack-admin",
  storageBucket: "gs://ironhack-admin.appspot.com/",
  messagingSenderId: "69631709491"
};
firebase.initializeApp(config);

export const secondaryApp = firebase.initializeApp(config, "Secondary");

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next('/login');
    console.log(currentUser)
  } else if (requiresAuth && currentUser) {
    next();
    console.log(currentUser)
  } else {
    next();
    console.log(currentUser)
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
