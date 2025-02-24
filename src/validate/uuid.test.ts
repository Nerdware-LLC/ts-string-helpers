import { isValidUUID } from "./uuid.js";

describe("isValidUUID", () => {
  // POSITIVE TEST CASES
  test.each([
    // The UUID spec defines a total of 8 versions
    ...["1", "2", "3", "4", "5", "6", "7", "8"].map((uuidVersionNum) => ({
      // Note: the hard-coded 8 reflects the UUID variant
      input: `aaaaaaaa-aaaa-${uuidVersionNum}aaa-8aaa-aaaaaaaaaaaa`,
      description: `a version-${uuidVersionNum} UUID string`,
    })),
    { input: "00000000-0000-0000-0000-000000000000", description: "the nil UUID (all zeros)" },
    { input: "ffffffff-ffff-ffff-ffff-ffffffffffff", description: "the max UUID (all f's)" },
  ])(`returns true when called with $description`, ({ input }) => {
    expect(isValidUUID(input)).toBe(true);
  });

  // NEGATIVE TEST CASES
  test.each([
    { input: "", description: "an empty string" },
    { input: "foo", description: "a non-UUID string" },
    { input: 1, description: "1 (a truthy number)" },
    { input: 0, description: "0 (zero)" },
    { input: true, description: "true (boolean)" },
    { input: false, description: "false (boolean)" },
    { input: null, description: "null" },
    { input: undefined, description: "undefined" },
    {
      input: "aaaaaaaa-aaaa-9aaa-8aaa-aaaaaaaaaaaa",
      description: "a UUID with an invalid version number",
    },
    {
      input: "aaaaaaaa-aaaa-1aaa-7aaa-aaaaaaaaaaaa",
      description: "a UUID with an invalid variant identifier", // must be 8, 9, a, or b
    },
  ])("returns false when called with $description", ({ input }) => {
    expect(isValidUUID(input)).toBe(false);
  });
});
