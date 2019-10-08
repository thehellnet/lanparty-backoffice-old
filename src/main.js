import Vue from "vue";
import vuex from "vuex";
import "./plugins/fontawesome";
import App from "./App.vue";
import router from "./router/router";

Vue.config.productionTip = false;

new Vue({
  router,
  vuex,
  render: h => h(App)
}).$mount("#app");
