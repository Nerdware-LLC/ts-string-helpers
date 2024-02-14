import { isValidAlphabeticWithSpaces } from "./alphabeticWithSpaces";

describe("validate: alphabeticWithSpaces", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a string containing only letters and/or spaces", () => {
    expect(
      isValidAlphabeticWithSpaces("abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    ).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string containing a special character", () => {
    expect(isValidAlphabeticWithSpaces("abc def ~")).toBe(false);
  });
  test("returns false when given a string containing numbers", () => {
    expect(isValidAlphabeticWithSpaces("abc def 123")).toBe(false);
  });
  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidAlphabeticWithSpaces("abc def \u0000")).toBe(false);
  });
});
