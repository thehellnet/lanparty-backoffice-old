import { appLocalStorage } from "./app-storage/app-storage.service";

const TOKEN_KEY = "token";
class TokenService {
  setToken(token) {
    appLocalStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    return appLocalStorage.getItem(TOKEN_KEY);
  }

  clearToken() {
    appLocalStorage.removeItem(TOKEN_KEY);
  }
}

export default new TokenService();
