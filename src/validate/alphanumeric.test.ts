import { NULL_CONTROL_CHAR } from "../utils/characters.test.js";
import { isValidAlphanumeric } from "./alphanumeric.js";

describe("isValidAlphanumeric", () => {
  // POSITIVE TEST CASES:

  test.each([
    {
      input: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      description: "a string containing only alphanumeric characters",
    },
    {
      input: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      description: "a string containing only alphabetic characters",
    },
    {
      input: "0123456789",
      description: "a string containing only numeric characters",
    },
    {
      input: 1,
      description: "an integer with typeof 'number'",
    },
  ])(`returns true when called with $description`, ({ input }) => {
    expect(isValidAlphanumeric(input)).toBe(true);
  });

  // NEGATIVE TEST CASES:
  test.each([
    { input: "", description: "an empty string" },
    { input: "abc ", description: "a string containing a space" },
    { input: "abc~", description: "a string containing a special character" },
    { input: `abc${NULL_CONTROL_CHAR}`, description: "a string containing a null unicode char" },
    { input: null, description: "null" },
    { input: undefined, description: "undefined" },
  ])(`returns false when called with $description`, ({ input }) => {
    expect(isValidAlphanumeric(input)).toBe(false);
  });
});
