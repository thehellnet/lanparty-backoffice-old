import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    show(state) {
      state.isLoading = true;
    },
    hide(state) {
      state.isLoading = true;
    }
  },
  strict: debug
});
