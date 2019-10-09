import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import tokenService from "../services/token.service";
import * as authService from "../services/auth.service";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: async (to, from, next) => {
        if (!tokenService.getToken()) {
          next({ path: "/login" });
        } else {
          try {
            await authService.checkTokenValidity();
            next();
          } catch (e) {
            next({ path: "/login" });
          }
        }
      }
    },
    {
      path: "/login",
      name: "login",

      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/about",
      name: "about",

      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

export default router;
