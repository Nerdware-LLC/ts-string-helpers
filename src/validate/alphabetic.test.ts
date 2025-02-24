import { NULL_CONTROL_CHAR } from "../utils/characters.test.js";
import { isValidAlphabetic } from "./alphabetic.js";

describe("isValidAlphabetic", () => {
  // POSITIVE TEST CASES:
  test("returns true when given a string containing only letters", () => {
    expect(isValidAlphabetic("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(true);
  });

  // NEGATIVE TEST CASES:
  test.each([
    { input: "", description: "an empty string" },
    { input: "abc ", description: "a string containing a space" },
    { input: "abc1", description: "a string containing a number" },
    { input: "abc~", description: "a string containing a special character" },
    { input: `abc${NULL_CONTROL_CHAR}`, description: "a string containing a null unicode char" },
    { input: 1, description: "a number" },
    { input: null, description: "null" },
    { input: undefined, description: "undefined" },
  ])(`returns false when called with $description`, ({ input }) => {
    expect(isValidAlphabetic(input)).toBe(false);
  });
});
