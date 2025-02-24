import { isValidStreetAddress } from "./streetAddress.js";

describe("isValidStreetAddress", () => {
  test.each([
    { input: "1 Main", description: "shortest valid address" },
    { input: `1 ${"X".repeat(98)}`, description: "longest valid address (street name)" },
    { input: `${"1".repeat(98)} X`, description: "longest valid address (street number)" },
    { input: "123 Main", description: "street number and name" },
    { input: "123 Main St", description: "street number, name, and type" },
    { input: "123 Main St.", description: "street number, name, and type with period" },
    { input: "123 Main Street", description: "street number, name, and type with full word" },
    { input: "123 Main Street #4", description: "street number, name, type, and unit number" },
    {
      input: "123 Main Street, Apt 5",
      description: "street number, name, type, and unit type and number",
    },
    {
      input: "123 Main St., Apt 6",
      description: "street number, name, type, and unit type and number with period",
    },
    {
      input: "123 Main St, Apt 7",
      description: "street number, name, type, and unit type and number with comma",
    },
    {
      input: "123 Main St #12",
      description: "street number, name, type, and unit number with hash",
    },
    {
      input: "Calle de Alcalá 45",
      description: "international address with street name and number",
    },
    {
      input: "Bldg. 10, 1st Floor, 20 King's Way",
      description: "international address with building, floor, and street name",
    },
    {
      input: "55 Königs Straße",
      description: "international address with special characters",
    },
  ])(`returns true when called with $description`, ({ input }) => {
    expect(isValidStreetAddress(input)).toBe(true);
  });

  test.each([
    { input: "", description: "an empty string" },
    { input: "A", description: "a single letter" },
    { input: "123", description: "a numeric string" },
    { input: "Main St.", description: "a street name with abbreviation" },
    { input: "Elm St, Apt", description: "a street name with comma" },
    { input: "Oak St #", description: "a street name with hash" },
    { input: "Maple Ave!", description: "a street name with exclamation point" },
    { input: "Birch Blvd@", description: "a street name with at symbol" },
    { input: 1, description: "a number" },
    { input: null, description: "null" },
    { input: undefined, description: "undefined" },
  ])(`returns false when called with $description`, ({ input }) => {
    expect(isValidStreetAddress(input)).toBe(false);
  });
});
