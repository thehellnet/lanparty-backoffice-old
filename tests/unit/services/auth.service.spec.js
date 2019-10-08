import { login } from "../../../src/services/auth.service";

describe("Auth Service", () => {
  it("login on lanparty-backoffice", async () => {
    const user = { email: "admin", password: "admin" };
    const response = await login(user);
    expect(response.status).toEqual(200);
  });
});
