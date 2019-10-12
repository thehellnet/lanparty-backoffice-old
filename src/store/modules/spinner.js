export const spinner = {
  namespaced: true,
  state: {
    loading: false
  },
  mutations: {
    show(state) {
      state.loading = true;
    },
    hide(state) {
      state.loading = false;
    },
    toggle(state) {
      state.loading = !state.loading;
    }
  }
};
