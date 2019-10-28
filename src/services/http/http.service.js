import axios from "axios";
import store from "../../store";

import tokenService from "../token.service";
import { ErrorWrapper } from "./utils";

const config = {
  baseURL: `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_API_PREFIX}`
};

const httpClient = axios.create(config);

const isAuthInterceptorEnabled = (config = {}) => {
  return !(config.hasOwnProperty("auth") && !config.auth);
};

const defaultHeadersInterceptor = config => {
  config.headers["content-type"] = "application/json";
  console.log(config);
  return config;
};

const authInterceptor = config => {
  if (isAuthInterceptorEnabled(config)) {
    const token = tokenService.getToken();
    if (token) {
      config.headers["x-auth-token"] = token;
    }
  }
  return config;
};

const handleResponseError = error => {
  store.commit("spinner/hide");
  return Promise.reject(new ErrorWrapper(error));
};

const handleResponseSuccess = response => {
  store.commit("spinner/hide");
  return response;
};

const showSpinnerInterceptor = data => {
  store.commit("spinner/show");
  return data;
};

const hideSpinnerInterceptor = data => {
  store.commit("spinner/hide");
  return data;
};

httpClient.interceptors.request.use(showSpinnerInterceptor);
httpClient.interceptors.request.use(defaultHeadersInterceptor);
httpClient.interceptors.request.use(authInterceptor);

httpClient.interceptors.response.use(hideSpinnerInterceptor);
httpClient.interceptors.response.use(
  handleResponseSuccess,
  handleResponseError
);

export default httpClient;
