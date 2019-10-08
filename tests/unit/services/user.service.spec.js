import { login } from "../../../src/services/auth.service";
import userService from "../../../src/services/user.service";
import { appLocalStorage } from "../../../src/services/app-storage/app-storage.service";
import { logger } from "../../../src/services/app-logger/app-logger.service";

let newUser;

describe("User Service", () => {
  beforeAll(async () => {
    const user = { email: "admin", password: "admin" };
    const response = await login(user);
    appLocalStorage.setItem("token", response.data.token);
  });

  afterAll(() => {
    appLocalStorage.clear();
  });

  it("get all users", async () => {
    let response = await userService.getAll();
    const users = response.data;
    expect(users.length).toEqual(1);
    expect(users[0].id).toEqual(1);
  });

  it("get admin user", async () => {
    let id = 1;
    let response = await userService.get(id);
    const user = response.data;
    expect(user.id).toEqual(1);
    expect(user.email).toEqual("admin");
  });

  it("get user by wrong id", async () => {
    let id = 2;
    try {
      await userService.get(id);
    } catch (e) {
      logger.debug(e);
      expect(e.status).toEqual(404);
      expect(e.message).toEqual("Request failed with status code 404");
    }
  });

  it("add new user", async () => {
    let user = {
      email: "gavino@mail.it",
      password: "gavino",
      name: "Gavino"
    };

    let response = await userService.create(user);
    newUser = response.data;
    expect(newUser.id).not.toBeNull();
    expect(newUser.email).toEqual("gavino@mail.it");
  });

  it("update user", async () => {
    let user = {
      name: "Mario"
    };
    let id = newUser.id;
    let response = await userService.update(id, user);
    let updatedUser = response.data;
    expect(updatedUser.id).not.toBeNull();
    expect(updatedUser.id).toEqual(newUser.id);
    expect(updatedUser.name).toEqual("Mario");
  });

  it("delete new user", async () => {
    let id = newUser.id;
    let response = await userService.delete(id);
    expect(response.status).toEqual(204);
  });
});
