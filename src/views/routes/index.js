import Vue from "vue";
import Router from "vue-router";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(Router);
const router = new Router({
  routes: [
    { path: "*", redirect: "/home" },
    {
      name: "home",
      path: "/home",
      component: () => import("../Home.vue"),
    }, 
  ]
});

export default router;