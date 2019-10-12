import httpClient from "../../services/http/http.service";
import tokenService from "../../services/token.service";

export const auth = {
  namespaced: true,
  state: {
    user: null,
    authenticated: false
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated;
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.authenticated;
    }
  },
  actions: {
    doLogin(state, user) {
      return httpClient
        .post("/appUser/login", user, { auth: false })
        .then(res => {
          tokenService.setToken(res.data.token);
          state.commit("setAuthenticated", true);
        });
    },
    doLogout(context) {
      tokenService.clearToken();
      context.commit("setAuthenticated", true);
    }
  }
};
