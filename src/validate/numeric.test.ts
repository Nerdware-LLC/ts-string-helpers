import { isValidNumeric } from "./numeric.js";

describe("validate: numeric", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a string containing only numeric characters", () => {
    expect(isValidNumeric("0123456789")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string containing a space", () => {
    expect(isValidNumeric("123 ")).toBe(false);
  });
  test("returns false when given a string containing letters", () => {
    expect(isValidNumeric("123abc")).toBe(false);
  });
  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidNumeric("123\u0000")).toBe(false);
  });
});
