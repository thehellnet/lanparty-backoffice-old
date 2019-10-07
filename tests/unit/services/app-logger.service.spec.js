import { logger } from "../../../src/services/app-logger/app-logger.service";

describe("App Logger Service", () => {
  // TODO check if various console.xxx are called
  it("log an error", () => {
    logger.error("Error message");
  });
  it("log a debug message", () => {
    logger.debug("Debug message");
  });
  it("log a warn", () => {
    logger.warn("Warn message");
  });
  it("log an info", () => {
    logger.info("Info message");
  });
  it("log a log message", () => {
    logger.error("Log message");
  });
});
