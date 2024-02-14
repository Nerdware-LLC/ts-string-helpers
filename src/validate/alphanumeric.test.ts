import { isValidAlphanumeric } from "./alphanumeric";

describe("validate: alphanumeric", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a string containing only alphanumeric characters", () => {
    expect(
      isValidAlphanumeric("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
    ).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string containing a space", () => {
    expect(isValidAlphanumeric("abc123 ")).toBe(false);
  });
  test("returns false when given a string containing a special character", () => {
    expect(isValidAlphanumeric("abc123~")).toBe(false);
  });
  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidAlphanumeric("abc123\u0000")).toBe(false);
  });
});
