import httpClient from "./http.service";

export default class BaseService {
  constructor() {
    if (!this.entity) {
      throw new Error("Child service class not provide entity");
    }
  }

  getAll() {
    return httpClient.get(`/rest/${this.entity}s`);
  }

  get(id) {
    return httpClient.get(`/rest/${this.entity}s/${id}`);
  }

  create(data) {
    return httpClient.post(`/rest/${this.entity}s`, data);
  }

  update(id, data) {
    return httpClient.put(`/rest/${this.entity}s/${id}`, data);
  }

  delete(id) {
    return httpClient.delete(`/rest/${this.entity}s/${id}`);
  }

  profile() {
    return httpClient.get(`/rest/profile/${this.entity}s`);
  }
}
