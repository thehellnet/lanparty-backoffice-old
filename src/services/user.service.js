import BaseService from "./http/base.service";

class UserService extends BaseService {
  get entity() {
    return "appUser";
  }
}

const userService = new UserService();

export default userService;
