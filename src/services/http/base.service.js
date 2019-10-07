import { AxiosInstance as httpClient } from "axios";

export default class BaseService {
  constructor() {
    if (!this.entity) {
      throw new Error("Child service class not provide entity");
    }
  }
  getAll() {
    return httpClient.get(`/${this.entity}`);
  }

  get(id) {
    return httpClient.get(`/${this.entity}/${id}`);
  }

  create(data) {
    return httpClient.post(`/${this.entity}`, data);
  }

  update(id, data) {
    return httpClient.put(`/${this.entity}/${id}`, data);
  }

  delete(id) {
    return httpClient.delete(`/${this.entity}/${id}`);
  }
}
