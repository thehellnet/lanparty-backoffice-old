import BaseService from "./http/base.service";

class UserService extends BaseService {
  get entity() {
    return "appUser";
  }
}

export default new UserService();
