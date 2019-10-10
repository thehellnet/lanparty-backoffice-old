import { httpClient } from "./http/http.service";
import { logger } from "./app-logger/app-logger.service";
import tokenService from "./token.service";

export function login(user) {
  return new Promise((resolve, reject) => {
    httpClient
      .post("/appUser/login", user, { auth: false })
      .then(response => {
        logger.log(response);
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
      .get("/appUser/isTokenValid")
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
