import { isValidJsonString } from "./jsonString.js";

describe("isValidJsonString", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a string containing only valid JSON characters characters", () => {
    expect(
      isValidJsonString(
        "{}[],.!@#$%^&* abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789"
      )
    ).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidJsonString("abc123\u0000")).toBe(false);
  });
});
