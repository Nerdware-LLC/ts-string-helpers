import { isValidHandle } from "./handle.js";

describe("isValidHandle", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a valid social media handle string", () => {
    expect(isValidHandle("@foo_user1")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test(`returns false when given a string which does not begin with an "@" character`, () => {
    expect(isValidHandle("foo_user1")).toBe(false);
  });
  test(`returns false when given a string with an "@" character in an incorrect position`, () => {
    expect(isValidHandle("foo@user1")).toBe(false);
    expect(isValidHandle("@foo@user1")).toBe(false);
  });
  test("returns false when given a string containing an invalid special character", () => {
    expect(isValidHandle("@foo-user1")).toBe(false);
    expect(isValidHandle("@foo.user1")).toBe(false);
    expect(isValidHandle("@foo!user1")).toBe(false);
  });
  test("returns false when given a string which is too short", () => {
    expect(isValidHandle("@fo")).toBe(false);
  });
  test("returns false when given a string which exceeds the max length", () => {
    expect(isValidHandle(`@${Array(52).join("x")}`)).toBe(false);
  });
  test("returns false when given a string which includes a null unicode character", () => {
    expect(isValidHandle("@foo_user1\u0000")).toBe(false);
  });
});
