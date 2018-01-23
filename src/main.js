// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';

Vue.config.productionTip = false;
Vue.use(VueRouter);
/* eslint-disable no-new */
// let app = Vue.extend(App);

// router.map({
//   '/goods': {
//     component: goods
//   }
// });

const routes = [
  {path: '/goods', component: goods}
];
let router = new VueRouter({
  routes
});
// router.start(app, '#app');

// const routes = [
//   {path: '/goods', component: goods}
// ];
// const router = new VueRouter({
//   routes
// });

new Vue({
  router
}).$mount('#app');
