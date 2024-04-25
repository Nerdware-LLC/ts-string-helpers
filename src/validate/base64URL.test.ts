import { isValidBase64URL } from "./base64URL.js";

describe("validate: base64URL", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a valid base64URL-encoded string", () => {
    expect(isValidBase64URL("abc123ABC-DEF_0")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string containing a space", () => {
    expect(isValidBase64URL("abc 123ABC-DEF_0")).toBe(false);
  });
  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidBase64URL("abc123\u0000")).toBe(false);
  });
  test("returns false when given a string with base64 characters", () => {
    expect(isValidBase64URL("abc+123/ABC==")).toBe(false);
  });
});
