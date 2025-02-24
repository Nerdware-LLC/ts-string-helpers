import { isValidPhone } from "./phone.js";

describe("isValidPhone", () => {
  // POSITIVE TEST CASES:
  test.each(
    [
      // NO coutry-code, WITH parentheses
      "(888)5551234",
      "(888) 5551234",
      "(888)-5551234",
      "(888)555 1234",
      "(888)555-1234",
      "(888) 555 1234",
      "(888)-555-1234",
    ].reduce<Array<string>>((accum, phoneNum_WITH_parentheses) => {
      const phoneNum_NO_parentheses = phoneNum_WITH_parentheses.replace(/[()]/g, "");
      accum.push(
        // NO coutry-code, NO parentheses
        phoneNum_NO_parentheses,
        // NO coutry-code, HAS parentheses
        phoneNum_WITH_parentheses,
        // HAS coutry-code, NO parentheses
        `1${phoneNum_NO_parentheses}`,
        `1 ${phoneNum_NO_parentheses}`,
        `+1${phoneNum_NO_parentheses}`,
        `+1 ${phoneNum_NO_parentheses}`,
        // HAS coutry-code, HAS parentheses
        `1${phoneNum_WITH_parentheses}`,
        `1 ${phoneNum_WITH_parentheses}`,
        `+1${phoneNum_WITH_parentheses}`,
        `+1 ${phoneNum_WITH_parentheses}`
      );
      return accum;
    }, [])
  )(`returns true when called with %s`, (input) => {
    expect(isValidPhone(input)).toBe(true);
  });

  // NEGATIVE TEST CASES:
  test.each([
    { input: "888  555 1234", problem: "too many spaces" },
    { input: "888 555  1234", problem: "too many spaces" },
    { input: "888--555-1234", problem: "too many hyphens" },
    { input: "888-555--1234", problem: "too many hyphens" },
    { input: "(888))5551234", problem: "too many parentheses" },
    { input: "((888)5551234", problem: "too many parentheses" },
    { input: "((888))5551234", problem: "too many parentheses" },
    { input: "08885551234", problem: "begins with a zero" },
    { input: "888)5551234", problem: "mismatched parentheses" },
    { input: "(8885551234", problem: "mismatched parentheses" },
    { input: "(888)555123", problem: "too few digits" },
    { input: "88855512345", problem: "too many digits" },
    { input: "8885551234\u0000", problem: "contains null char" },
  ])(`returns false when called with $input ($problem)`, ({ input }) => {
    expect(isValidPhone(input)).toBe(false);
  });
});
