import { sanitizeName } from "./name.js";

describe("sanitize: name", () => {
  test("removes invalid characters from the name", () => {
    expect(sanitizeName("Jane Doe!@#$%^&*()_+123")).toBe("Jane Doe");
  });

  test("keeps valid characters in the name", () => {
    const input = "José Dã'Hüman-persón";
    expect(sanitizeName(input)).toBe(input);
  });

  test("keeps valid punctuation marks in the name", () => {
    const input = "'.,-";
    expect(sanitizeName(input)).toBe(input);
  });

  test("keeps valid whitespace characters in the name", () => {
    const input = "John   Doe";
    expect(sanitizeName(input)).toBe(input);
  });
});
