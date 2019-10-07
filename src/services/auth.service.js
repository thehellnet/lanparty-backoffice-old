import { httpClient } from "./http/http.service";

export function login(user) {
  return new Promise((resolve, reject) => {
    httpClient
      .post("/appUser/login", user, { auth: false })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
