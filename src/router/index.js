import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from '../views/User.vue';
import Lesson from '../views/Lesson.vue';
import NotFound from '../views/NotFound.vue';
// import firebase from 'firebase'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/user/:uid',
    name: 'user',
    component: User
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  },
  {
    path: "/lesson/:lesson",
    name: "lesson",
    component: Lesson
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  }
];

// router.beforeResolve((to, from, next) => {
//   const funcLoginAuthentication = firebase.functions().httpsCallable('funcLoginAuthentication')

//   funcLoginAuthentication()
//     .then(res => {
//       const user = res.data
//       // Googleログインしている場合
//       if (user.isLogin) {
//         // xxxxx.comドメインの場合
//         if (to.name === 'auth/login') {
//           next({ name: 'home' })
//         } else {
//           next()
//         }
//       } else {
//         // xxxxx.comドメイン以外の場合
//         if (to.name === 'auth/error') {
//           next()
//         } else {
//           next({ name: 'auth/error' })
//         }
//       }
//     })
//     .catch(() => {
//       // Googleログインしていない場合
//       if (to.name === 'auth/login') {
//         next()
//       } else {
//         next({ name: 'auth/login' })
//       }
//     })
// })

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
