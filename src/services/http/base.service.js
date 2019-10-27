import httpClient from "./http.service";

export default class BaseService {
  constructor() {
    if (!this.entity) {
      throw new Error("Child service class not provide entity");
    }
  }

  getAll() {
    return httpClient.get(`/crud/${this.entity}`);
  }

  get(id) {
    return httpClient.get(`/crud/${this.entity}/${id}`);
  }

  create(data) {
    return httpClient.post(`/crud/${this.entity}`, data);
  }

  update(id, data) {
    return httpClient.patch(`/crud/${this.entity}/${id}`, data);
  }

  delete(id) {
    return httpClient.delete(`/crud/${this.entity}/${id}`);
  }

  config() {
    return httpClient.get(`/config/${this.entity}`);
  }
}
