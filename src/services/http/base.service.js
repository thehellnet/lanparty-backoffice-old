import { httpClient } from "./http.service";
import { ResponseWrapper, ErrorWrapper } from "./util";

export default class BaseService {
  constructor() {
    if (!this.entity) {
      throw new Error("Child service class not provide entity");
    }
  }

  responseWrapper(...rest) {
    return new ResponseWrapper(...rest);
  }

  errorWrapper(...rest) {
    return new ErrorWrapper(...rest);
  }

  getAll() {
    return new Promise((resolve, reject) => {
      return httpClient
        .get(`/${this.entity}`)
        .then(response =>
          resolve(this.responseWrapper(response, response.data))
        )
        .catch(error => {
          let message = error.response.data
            ? error.response.data.error
            : error.response.statusText;
          reject(this.errorWrapper(error, message));
        });
    });
  }

  get(id) {
    return new Promise((resolve, reject) => {
      return httpClient
        .get(`/${this.entity}/${id}`)
        .then(response =>
          resolve(this.responseWrapper(response, response.data))
        )
        .catch(error => {
          let message = error.response.data
            ? error.response.data.error
            : error.response.statusText;
          reject(this.errorWrapper(error, message));
        });
    });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      return httpClient
        .post(`/${this.entity}`, data)
        .then(response =>
          resolve(this.responseWrapper(response, response.data))
        )
        .catch(error => {
          let message = error.response.data
            ? error.response.data.error
            : error.response.statusText;
          reject(this.errorWrapper(error, message));
        });
    });
  }

  update(id, data) {
    return new Promise((resolve, reject) => {
      return httpClient
        .patch(`/${this.entity}/${id}`, data)
        .then(response =>
          resolve(this.responseWrapper(response, response.data))
        )
        .catch(error => {
          let message = error.response.data
            ? error.response.data.error
            : error.response.statusText;
          reject(this.errorWrapper(error, message));
        });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      return httpClient
        .delete(`/${this.entity}/${id}`)
        .then(response =>
          resolve(this.responseWrapper(response, response.data))
        )
        .catch(error => {
          let message = error.response.data
            ? error.response.data.error
            : error.response.statusText;
          reject(this.errorWrapper(error, message));
        });
    });
  }
}
