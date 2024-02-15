import { isValidAlphabetic } from "./alphabetic.js";

describe("validate: alphabetic", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a string containing only letters", () => {
    expect(isValidAlphabetic("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string containing a space", () => {
    expect(isValidAlphabetic("abc ")).toBe(false);
  });
  test("returns false when given a string containing numbers", () => {
    expect(isValidAlphabetic("abc123")).toBe(false);
  });
  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidAlphabetic("abc\u0000")).toBe(false);
  });
});
