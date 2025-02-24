import { isValidCurrency } from "./currency.js";

describe("isValidCurrency", () => {
  // POSITIVE TEST CASES:
  test.each(
    [
      "0",
      "1",
      "12",
      "123",
      "1,234",
      "12,345",
      "123,456",
      "1,234,567",
      "12,345,678",
      "123,456,789",
    ].reduce<Array<string>>((accum, amountStr) => {
      accum.push(amountStr, `${amountStr}.99`, `$${amountStr}`, `$${amountStr}.99`);
      return accum;
    }, [])
  )("returns true when called with %s", (input) => {
    expect(isValidCurrency(input)).toBe(true);
  });

  // NEGATIVE TEST CASES:
  test.each([
    { input: "", description: "an empty string" },
    { input: "$1a", description: "a string that contains letters" },
    { input: "@$123.45", description: "a string that contains an @ symbol" },
    { input: " $123.45", description: "a space before the $ symbol" },
    { input: "$ 123.45", description: "a space after the $ symbol" },
    { input: "$123.456", description: "too many decimal places" },
    { input: "\u0000123.45", description: "a null unicode character at the beginning" },
    { input: "$123.45\u0000", description: "a null unicode character at the end" },
    { input: "12345", description: "a missing comma" },
    { input: "123,4", description: "invalid comma placement" },
    { input: "123.", description: "invalid decimal placement" },
    { input: "123,45.6", description: "a missing decimal digit" },
    { input: "", description: "" },
  ])("returns false when called with $description", ({ input }) => {
    expect(isValidCurrency(input)).toBe(false);
  });
});
