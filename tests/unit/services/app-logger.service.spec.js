import logger from "../../../src/services/app-logger/app-logger.service";

describe("App Logger Service", () => {
  it("log an error", () => {
    const spy = jest.spyOn(logger, "error");
    logger.error("Error message");
    expect(spy).toHaveBeenCalled();
  });
  it("log a debug message", () => {
    const spy = jest.spyOn(logger, "debug");
    logger.debug("Debug message");
    expect(spy).toHaveBeenCalled();
  });
  it("log a warn message", () => {
    const spy = jest.spyOn(logger, "warn");
    logger.warn("Warn message");
    expect(spy).toHaveBeenCalled();
  });
  it("log a info message", () => {
    const spy = jest.spyOn(logger, "info");
    logger.info("Info message");
    expect(spy).toHaveBeenCalled();
  });
  it("log a log message", () => {
    const spy = jest.spyOn(logger, "log");
    logger.log("Debug message");
    expect(spy).toHaveBeenCalled();
  });
});
