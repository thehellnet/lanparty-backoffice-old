import Vue from "vue";
import store from "./store";
import "./plugins/fontawesome";
import App from "./App.vue";
import router from "./router/router";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
