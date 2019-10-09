import { httpClient } from "./http/http.service";
import tokenService from "./token.service";

export function login(user) {
  return new Promise((resolve, reject) => {
    httpClient
      .post("/appUser/login", user, { auth: false })
      .then(response => {
        let data = response.data;
        if (data.token) {
          tokenService.setToken(data.token);
        }
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function checkTokenValidity() {
  return new Promise((resolve, reject) => {
    httpClient
      .post("/appUser/tokenValid")
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        logout();
        reject(error);
      });
  });
}

export function logout() {
  tokenService.clearToken();
}
