import { isValidToken } from "./token";

describe("validate: token", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a string which only contains valid token characters", () => {
    expect(isValidToken("123.abc.ABC+0.0/0")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string which contains a space", () => {
    expect(isValidToken("123 abc.ABC+0.0/0")).toBe(false);
  });
  test("returns false when given a string which contains a hyphen", () => {
    expect(isValidToken("123-abc.ABC+0.0/0")).toBe(false);
  });
  test("returns false when given a string which contains an underscore", () => {
    expect(isValidToken("123_abc.ABC+0.0/0")).toBe(false);
  });
});
