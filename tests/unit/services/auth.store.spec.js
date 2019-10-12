import store from "../../../src/store";
import tokenService from "../../../src/services/token.service";

describe("Auth Store", () => {
  it("do login on lanparty-backoffice", async () => {
    const user = { email: "admin", password: "admin" };
    await store.dispatch("auth/doLogin", user);
    expect(store.getters["auth/isAuthenticated"]).toEqual(true);
  });

  it("login on lanparty-backoffice with wrong credential", async () => {
    const user = { email: "admin", password: "wrongPassword" };
    try {
      await store.dispatch("auth/doLogin", user);
    } catch (e) {
      expect(e.status).toEqual(404);
    }
  });

  it("do login on lanparty-backoffice with partial credential", async () => {
    const user = { email: "admin" };
    try {
      await store.dispatch("auth/doLogin", user);
    } catch (e) {
      expect(e.status).toEqual(404);
    }
  });

  it("do logout", async () => {
    await store.dispatch("auth/doLogout");
    expect(tokenService.getToken()).toBe(null);
  });
});
