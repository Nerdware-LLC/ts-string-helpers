import { isValidPhone } from "./phone.js";

describe("isValidPhone", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a valid US phone-digits string", () => {
    expect(isValidPhone("8881234567")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a US phone-digits string with spaces", () => {
    expect(isValidPhone("888 123 4567")).toBe(false);
  });
  test("returns false when given a US phone-digits string with hyphens", () => {
    expect(isValidPhone("888-123-4567")).toBe(false);
  });
  test("returns false when given a US phone-digits string with parentheses", () => {
    expect(isValidPhone("(888)1234567")).toBe(false);
  });
  test("returns false when given a US phone-digits string which begins with a zero", () => {
    expect(isValidPhone("0888123456")).toBe(false);
  });
  test("returns false when given a US phone-digits string with too many digits", () => {
    expect(isValidPhone("88812345678")).toBe(false);
  });
  test("returns false when given a US phone-digits string which includes a null unicode character", () => {
    expect(isValidPhone("8881234567\u0000")).toBe(false);
  });
});
