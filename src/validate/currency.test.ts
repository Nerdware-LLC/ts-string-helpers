import { isValidCurrency } from "./currency.js";

describe("validate: currency", () => {
  // prettier-ignore
  const baseValidAmountStrings = ["0", "1", "12", "123", "1,234", "12,345", "123,456", "1,234,567", "12,345,678", "123,456,789"];

  // POSITIVE TEST CASES:

  test("returns true when given a valid USD currency string", () => {
    baseValidAmountStrings.forEach((amountStr) => {
      expect(isValidCurrency(amountStr)).toBe(true);
      expect(isValidCurrency(`${amountStr}.99`)).toBe(true);
      expect(isValidCurrency(`$${amountStr}`)).toBe(true);
      expect(isValidCurrency(`$${amountStr}.99`)).toBe(true);
    });
  });

  // NEGATIVE TEST CASES:

  test("returns false when given an invalid currency string", () => {
    expect(isValidCurrency("")).toBe(false); //              empty string
    expect(isValidCurrency("@$123.45")).toBe(false); //      contains @ symbol
    expect(isValidCurrency(" $123.45")).toBe(false); //      space before $
    expect(isValidCurrency("$ 123.45")).toBe(false); //      space between $ and amount
    expect(isValidCurrency("$123.456")).toBe(false); //      too many decimal places
    expect(isValidCurrency("\u0000123.45")).toBe(false); //  null unicode character at beginning
    expect(isValidCurrency("$123.45\u0000")).toBe(false); // null unicode character at end
    expect(isValidCurrency("12345")).toBe(false); //         missing comma
    expect(isValidCurrency("123,4")).toBe(false); //         invalid comma placement
    expect(isValidCurrency("123,45.")).toBe(false); //       invalid comma+decimal placement
    expect(isValidCurrency("123,45.6")).toBe(false); //      missing decimal digit
    expect(isValidCurrency("123,45.67")).toBe(false); //     invalid comma placement
  });
});
