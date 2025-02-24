import { isValidAlphanumericWithSpaces } from "./alphanumericWithSpaces.js";

describe("isValidAlphanumericWithSpaces", () => {
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
  test("returns false when given a string containing invalid whitespace characters", () => {
    expect(isValidAlphanumericWithSpaces("abc \f def")).toBe(false);
    expect(isValidAlphanumericWithSpaces("abc \n def")).toBe(false);
    expect(isValidAlphanumericWithSpaces("abc \r def")).toBe(false);
    expect(isValidAlphanumericWithSpaces("abc \t def")).toBe(false);
    expect(isValidAlphanumericWithSpaces("abc \v def")).toBe(false);
    expect(
      isValidAlphanumericWithSpaces(`
        abc
        def`)
    ).toBe(false);
  });
  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidAlphanumericWithSpaces("abc 123 \u0000")).toBe(false);
  });
});
