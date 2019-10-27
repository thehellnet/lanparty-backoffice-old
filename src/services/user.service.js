import BaseService from "./http/base.service";

class UserService extends BaseService {
  get entity() {
    return "appUser";
  }
}

const appUserService = new UserService();

export default appUserService;
