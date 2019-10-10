import axios from "axios";
import store from "../../store";

import tokenService from "../token.service";
import { logger } from "../app-logger/app-logger.service";

const config = {
  baseURL: `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_API_PREFIX}`
};

const httpClient = axios.create(config);

const isAuthInterceptorEnabled = (config = {}) => {
  return !(config.hasOwnProperty("auth") && !config.auth);
};

const defaultHeadersInterceptor = config => {
  config.headers["Content-Type"] = "application/json";
  logger.log(config.headers);
  return config;
};

const authInterceptor = config => {
  if (isAuthInterceptorEnabled(config)) {
    const token = tokenService.getToken();
    if (token) {
      config.headers["X-Auth-Token"] = token;
    }
  }
  return config;
};

const loggerInterceptor = data => {
  logger.debug(data);
  return data;
};

const showSpinnerInterceptor = data => {
  store.commit("show");
  return data;
};

const hideSpinnerInterceptor = data => {
  store.commit("hide");
  return data;
};

httpClient.interceptors.request.use(defaultHeadersInterceptor);
httpClient.interceptors.request.use(showSpinnerInterceptor);
httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

httpClient.interceptors.response.use(loggerInterceptor);
httpClient.interceptors.response.use(hideSpinnerInterceptor, () => {
  hideSpinnerInterceptor();
});

export { httpClient };
