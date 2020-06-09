import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(firestorePlugin)

import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

firebase.initializeApp({
  apiKey: "AIzaSyBDcrFz8STQvnxZ1sQ9nCYwEG9DJAYxtls",
  authDomain: "ptit-a-ptit.firebaseapp.com",
  databaseURL: "https://ptit-a-ptit.firebaseio.com",
  projectId: "ptit-a-ptit",
  storageBucket: "ptit-a-ptit.appspot.com",
  messagingSenderId: "1057050321505",
  appId: "1:1057050321505:web:dc20f60c880cbad31d8020",
  measurementId: "G-E2VXCW9KWL"
})

firebase.analytics();

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  Hooper,
  Slide,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
