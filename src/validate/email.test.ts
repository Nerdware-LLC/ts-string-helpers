import { isValidEmail } from "./email.js";

describe("validate: email", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a valid email address string", () => {
    expect(isValidEmail("foo.bar_1+baz@gmail.com")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given an email address beginning with a period", () => {
    expect(isValidEmail(".foo.bar_1+baz@gmail.com")).toBe(false);
  });
  test("returns false when given an email address with two consecutive periods", () => {
    expect(isValidEmail("foo..bar_1+baz@gmail.com")).toBe(false);
  });
  test("returns false when given an email address with an invalid TLD", () => {
    expect(isValidEmail("foo.bar_1+baz@gmail.c")).toBe(false);
  });
  test("returns false when given an email address with any component which exceeds the max length", () => {
    expect(isValidEmail(`${Array(66).join("x")}@gmail.com`)).toBe(false);
    expect(isValidEmail(`foo.bar_1+baz@${Array(257).join("x")}.com`)).toBe(false);
    expect(isValidEmail(`foo.bar_1+baz@gmail.${Array(66).join("x")}`)).toBe(false);
  });
  test("returns false when given an email address which includes a null unicode character", () => {
    expect(isValidEmail("foo.bar_1+baz@gmail.com\u0000")).toBe(false);
  });
});
