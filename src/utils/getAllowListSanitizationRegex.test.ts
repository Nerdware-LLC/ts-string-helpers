import { getAllowListSanitizationRegex } from "./getAllowListSanitizationRegex.js";

test("returns a regex that removes characters not in the allowedCharacters string", () => {
  const regex = getAllowListSanitizationRegex({ allowedCharacters: "abc" });
  const result = "abcdef".replace(regex, "");
  expect(result).toBe("abc");
});

test("returns a regex that removes characters not in the allowedCharacters array", () => {
  const regex = getAllowListSanitizationRegex({ allowedCharacters: ["a", "b", "c"] });
  const result = "abcdef".replace(regex, "");
  expect(result).toBe("abc");
});

test("uses the provided regex flags", () => {
  const regex = getAllowListSanitizationRegex({
    allowedCharacters: "abc",
    overrideRegexFlags: "gi",
  });
  const result = "aBcDef".replace(regex, "");
  expect(result).toBe("aBc");
});

test("defaults to global regex flag if none is provided", () => {
  const regex = getAllowListSanitizationRegex({ allowedCharacters: "abc" });
  const result = "abcdef".replace(regex, "");
  expect(result).toBe("abc");
});

test("handles empty allowedCharacters string", () => {
  const regex = getAllowListSanitizationRegex({ allowedCharacters: "" });
  const result = "abcdef".replace(regex, "");
  expect(result).toBe("");
});

test("handles empty allowedCharacters array", () => {
  const regex = getAllowListSanitizationRegex({ allowedCharacters: [] });
  const result = "abcdef".replace(regex, "");
  expect(result).toBe("");
});
