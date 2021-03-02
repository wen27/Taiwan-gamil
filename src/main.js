// =========================================================
// * Vue Material Dashboard - v1.4.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import axios from 'axios';
import VueAxios from 'vue-axios';
import "bootstrap/dist/css/bootstrap.css";

import { ClientTable } from 'vue-tables-2';
import 'bootstrap';
// router setup
import routes from "./routes/routes";
import "./bus";

import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";
// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";
 axios.defaults.withCredentials = true

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.use(VeeValidate);
Vue.use(VueI18n);

Vue.prototype.$Chartist = Chartist;
Vue.use(ClientTable);
Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

//axios.defaults.withCredentials = true;

const i18n = new VueI18n({
  locale: 'zhTW'
});
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
});
/* eslint-disable no-new */
new Vue({
  i18n,
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});
//導航守衛
router.beforeEach((to, from, next) => {
  // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
  console.log('to', to, 'from', from, 'next', next);
  // ...
  if (to.meta.requiresAuth) {
    const api = `http://140.112.30.202:3000/bcheck`;
    axios.get(api).then((response) => {

      if (response.data.ret_code === 5) {
        console.log('main.js :' + response.data.ret_msg + response.data.ret_code);
        next();
      } else {
        console.log('main.js : error' + response.data.ret_msg + response.data.ret_code);
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});

