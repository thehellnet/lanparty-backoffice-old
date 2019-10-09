export const spinner = {
  state: {
    loading: true
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
