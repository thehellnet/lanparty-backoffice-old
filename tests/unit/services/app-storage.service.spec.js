import { appLocalStorage } from "../../../src/services/app-storage/app-storage.service";

describe("App Storage Service", () => {
  it("save item on local storage", () => {
    appLocalStorage.setItem("first", "first");
    expect(appLocalStorage.getItem("first")).toEqual("first");
  });
  it("get item from local storage", () => {
    expect(appLocalStorage.getItem("first")).toEqual("first");
  });
  it("remove item from local storage", () => {
    appLocalStorage.removeItem("first");
    expect(appLocalStorage.getItem("first")).toEqual(null);
  });
  it("remove all items from local storage", () => {
    appLocalStorage.setItem("first", "first");
    appLocalStorage.setItem("second", "second");
    expect(appLocalStorage.getItem("first")).toEqual("first");
    expect(appLocalStorage.getItem("second")).toEqual("second");
    appLocalStorage.clear();
    expect(appLocalStorage.getItem("first")).toEqual(null);
    expect(appLocalStorage.getItem("second")).toEqual(null);
  });
});
