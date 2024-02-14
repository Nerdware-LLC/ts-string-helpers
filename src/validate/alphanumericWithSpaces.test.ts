import { isValidAlphanumericWithSpaces } from "./alphanumericWithSpaces";

describe("validate: alphanumericWithSpaces", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a string containing only alphanumeric characters and/or spaces", () => {
    expect(
      isValidAlphanumericWithSpaces(
        "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789"
      )
    ).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string containing a special character", () => {
    expect(isValidAlphanumericWithSpaces("abc 123~")).toBe(false);
  });
  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidAlphanumericWithSpaces("abc 123\u0000")).toBe(false);
  });
});
