import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import router from "./router/router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
