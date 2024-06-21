import { isValidText } from "./text.js";

describe("validate: text", () => {
  test("returns true for valid text", () => {
    expect(isValidText("Hello world!")).toBe(true);
    expect(isValidText("123%$#@'&.,:;!?+=()_—-")).toBe(true);
    expect(isValidText("Hello José !")).toBe(true);
  });

  test("returns false for invalid text", () => {
    expect(isValidText("Hello {world}!")).toBe(false);
    expect(isValidText("Hello [world]!")).toBe(false);
    expect(isValidText("Hello <world>!")).toBe(false);
  });

  test("returns true for multiline strings", () => {
    expect(isValidText("Hello\nworld!\n")).toBe(true);
    expect(
      isValidText(`
        Hello
        world!`)
    ).toBe(true);
  });
});
