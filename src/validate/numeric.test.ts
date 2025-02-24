import { NULL_CONTROL_CHAR } from "../utils/characters.test.js";
import { isValidNumeric } from "./numeric.js";

describe("isValidNumeric", () => {
  // POSITIVE TEST CASES:
  test.each([
    {
      input: "0123456789",
      description: "a string containing only numeric characters",
    },
    {
      input: 1,
      description: "an integer with typeof 'number'",
    },
  ])(`returns true when called with $description`, ({ input }) => {
    expect(isValidNumeric(input)).toBe(true);
  });

  // NEGATIVE TEST CASES:
  test.each([
    { input: "", description: "an empty string" },
    { input: "123 ", description: "a string containing a space" },
    { input: "123a", description: "a string containing a letter" },
    { input: "abc~", description: "a string containing a special character" },
    { input: `abc${NULL_CONTROL_CHAR}`, description: "a string containing a null unicode char" },
    { input: null, description: "null" },
    { input: undefined, description: "undefined" },
  ])(`returns false when called with $description`, ({ input }) => {
    expect(isValidNumeric(input)).toBe(false);
  });
});
