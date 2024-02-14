import { isValidPassword } from "./password";

describe("validate: password", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a valid password string", () => {
    expect(isValidPassword("123abcABC!@#$%^&*")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string which does not contain at least 1 lowercase letter", () => {
    expect(isValidPassword("123ABC!@#$%^&*")).toBe(false);
  });
  test("returns false when given a string which does not contain at least 1 uppercase letter", () => {
    expect(isValidPassword("123abc!@#$%^&*")).toBe(false);
  });
  test("returns false when given a string which does not contain at least 1 number", () => {
    expect(isValidPassword("abcABC!@#$%^&*")).toBe(false);
  });
  test("returns false when given a string which does not contain at least 1 special character", () => {
    expect(isValidPassword("123abcABC")).toBe(false);
  });
  test("returns false when given a string which contains an invalid special character", () => {
    expect(isValidPassword("-123abcABC!@#$%^&*")).toBe(false);
    expect(isValidPassword("_123abcABC!@#$%^&*")).toBe(false);
  });
  test("returns false when given a string with fewer than 6 characters", () => {
    expect(isValidPassword("12aA!")).toBe(false);
  });
  test("returns false when given a string with more than 250 characters", () => {
    expect(isValidPassword(`1aA!${Array(250).join("x")}`)).toBe(false);
  });
});
