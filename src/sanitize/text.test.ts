import { sanitizeText } from "./text.js";

describe("sanitizeText", () => {
  test("removes characters that pose security risks", () => {
    expect(sanitizeText(`Hello {world}!`)).toBe("Hello world!");
    expect(sanitizeText(`Hello [world]!`)).toBe("Hello world!");
    expect(sanitizeText(`Hello <world>!`)).toBe("Hello world!");
  });

  test("keeps permitted characters", () => {
    const input = `123%$#@'&.,:;"!?+=()_—-`;
    expect(sanitizeText(input)).toBe(input);
  });

  test("keeps Latin-script characters", () => {
    expect(sanitizeText(`Hello José 世界!`)).toBe(`Hello José !`);
  });

  test("keeps whitespace characters", () => {
    const input1 = `Hello\nworld!\n`;
    const input2 = `
        Hello
        world!`;

    expect(sanitizeText(input1)).toBe(input1);
    expect(sanitizeText(input2)).toBe(input2);
  });
});
