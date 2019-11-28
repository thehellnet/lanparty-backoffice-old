import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "../store";
import tokenService from "../services/token.service";
import httpClient from "../services/http/http.service";
import logger from "../services/app-logger/app-logger.service";

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
          logger.debug("no token in local storage");
          next({ path: "/login" });
        } else {
          try {
            const response = await httpClient.get("/isTokenValid");
            logger.info("token is valid", response);
            store.commit("auth/setAuthenticated", true);
            next();
          } catch (e) {
            logger.info("token expired", e);
            next({ path: "/login" });
          }
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/entity/:entity",
      name: "entity",
      props: true,
      component: () => import("./views/Entity.vue")
    }
  ]
});

export default router;
