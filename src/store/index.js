import Vue from "vue";
import Vuex from "vuex";
import { spinner } from "./modules/spinner";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    spinner: spinner
  },
  strict: debug
});
