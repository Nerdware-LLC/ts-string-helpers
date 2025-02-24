import { isValidAlphabeticWithSpaces } from "./alphabeticWithSpaces.js";

describe("isValidAlphabeticWithSpaces", () => {
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
  test("returns false when given a string containing invalid whitespace characters", () => {
    expect(isValidAlphabeticWithSpaces("abc \f def")).toBe(false);
    expect(isValidAlphabeticWithSpaces("abc \n def")).toBe(false);
    expect(isValidAlphabeticWithSpaces("abc \r def")).toBe(false);
    expect(isValidAlphabeticWithSpaces("abc \t def")).toBe(false);
    expect(isValidAlphabeticWithSpaces("abc \v def")).toBe(false);
    expect(
      isValidAlphabeticWithSpaces(`
        abc
        def`)
    ).toBe(false);
  });
  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidAlphabeticWithSpaces("abc def \u0000")).toBe(false);
  });
});
