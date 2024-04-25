import { isValidHex } from "./hexadecimal.js";

describe("validate: hexadecimal", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a string containing only hexadecimal chars", () => {
    expect(isValidHex("abcdefABCDEF1234567890")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string containing a space", () => {
    expect(isValidHex("abc ")).toBe(false);
  });
  test("returns false when given a string containing a letter outside of the A-F range", () => {
    expect(isValidHex("abc123g")).toBe(false);
  });
  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidHex("abc\u0000")).toBe(false);
  });
});
