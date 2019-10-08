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

const defaultHeadersInterceptor = config => {
  config.headers["Content-Type"] = "application/json";
  return config;
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

const loggerInterceptor = data => {
  logger.debug(data);
  return data;
};

httpClient.interceptors.request.use(defaultHeadersInterceptor);
httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

httpClient.interceptors.response.use(loggerInterceptor);

export { httpClient };
