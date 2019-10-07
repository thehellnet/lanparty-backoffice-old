import axios from "axios";
import { appLocalStorage } from "../app-storage/app-storage.service";
import { logger } from "../app-logger/app-logger.service";

const config = {
  baseURL: `${process.env.API_URL}${process.env.API_PREFIX}`
};

const httpClient = axios.create(config);

const isAuthInterceptorEanbled = (config = {}) => {
  return !(config.hasOwnProperty("auth") && !config.auth);
};

const authInterceptor = config => {
  if (isAuthInterceptorEanbled(config)) {
    const token = appLocalStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
  }
  return config;
};

const loggerInterceptor = config => {
  logger.log(config);
  return config;
};

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

export { httpClient };
