import { isValidBase64 } from "./base64.js";

describe("validate: base64", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a valid base64-encoded string", () => {
    expect(
      isValidBase64(
        "SGVsbG8gdGhpcyBpcyBhIHNlbnRlbmNlIHRoYXQgc2hvdWxkIGJlIGJhc2U2NCBlbmNvZGVkIHBsZWFzZSE="
      )
    ).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string containing a space", () => {
    expect(isValidBase64("abc 123")).toBe(false);
  });
  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidBase64("abc123\u0000")).toBe(false);
  });
  test("returns false when given a base64 string with too many equals-signs at the end", () => {
    expect(isValidBase64("abc123====")).toBe(false);
  });
});
