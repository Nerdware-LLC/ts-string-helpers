import { isValidName } from "./name.js";

describe("isValidName", () => {
  // POSITIVE TEST CASES:

  test("returns true when called with a value which contains ASCII letters", () => {
    expect(isValidName("ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz")).toBe(true);
  });
  test("returns true when called with a value which contains non-ASCII latin-script characters", () => {
    expect(isValidName("José Dã'Hüman-persón")).toBe(true);
  });
  test("returns true when called with a value which contains permitted punctuation characters", () => {
    expect(isValidName("A'.,-")).toBe(true);
  });
  test("returns true when called with a value which contains several space characters", () => {
    expect(isValidName("John   Doe")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when called with a value that starts with an apostrophe", () => {
    expect(isValidName("'Jane Doe")).toBe(false);
  });
  test("returns false when called with a value which contains invalid special characters", () => {
    expect(isValidName("Jane Doe!@#$%^&*()_+123")).toBe(false);
  });
  test("returns false when called with a value which contains a number", () => {
    expect(isValidName("Jane Doe 123")).toBe(false);
  });
  test("returns false when called with a value which contains a symbol", () => {
    expect(isValidName("Jane Doe #")).toBe(false);
  });
  test("returns false when called with a value which contains a newline character", () => {
    expect(isValidName("Jane\nDoe")).toBe(false);
  });
  test("returns false when called with a value which contains a tab character", () => {
    expect(isValidName("Jane\tDoe")).toBe(false);
  });
  test("returns false when called with an empty string", () => {
    expect(isValidName("")).toBe(false);
  });
  test("returns false when called with a string containing only a space character", () => {
    expect(isValidName(" ")).toBe(false);
  });
  test("returns false when called with a string containing only a hyphen character", () => {
    expect(isValidName("-")).toBe(false);
  });
  test("returns false when called with a string containing only a period character", () => {
    expect(isValidName(".")).toBe(false);
  });
  test("returns false when called with a string containing only a comma character", () => {
    expect(isValidName(",")).toBe(false);
  });
  test("returns false when called with a string containing only an apostrophe character", () => {
    expect(isValidName("'")).toBe(false);
  });
});
