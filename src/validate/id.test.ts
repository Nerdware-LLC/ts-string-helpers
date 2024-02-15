import { isValidID } from "./id.js";

describe("validate: id", () => {
  // POSITIVE TEST CASES:

  test(`returns true when given a string containing only alphanumeric characters, "-", "_", and/or "#"`, () => {
    expect(isValidID("fake-id#abc_123")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a string containing fewer than 6 characters", () => {
    expect(isValidID("12345")).toBe(false);
  });
  test("returns false when given a string containing more than 250 characters", () => {
    expect(isValidID(Array(255).join("x"))).toBe(false);
  });
  test("returns false when given a string containing a space", () => {
    expect(isValidID("fake-id#abc 123")).toBe(false);
  });
  test("returns false when given a string containing a disallowed special character", () => {
    expect(isValidID("fake-id#abc_123.456!")).toBe(false);
  });
  test("returns false when given a string containing a null unicode character", () => {
    expect(isValidID("fake-id#abc_123\u0000")).toBe(false);
  });
});
