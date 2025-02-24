import {
  ZERO_WIDTH_SPACE,
  NULL_CONTROL_CHAR,
  ZERO_WIDTH_AND_CONTROL_CHAR_REGEX,
} from "../utils/characters.test.js";
import { sanitizeAlphabetic } from "./alphabetic.js";

describe("sanitizeAlphabetic", () => {
  test("removes all non-alphabetic characters", () => {
    const input = `ab c${ZERO_WIDTH_SPACE}1 23${NULL_CONTROL_CHAR}~!@#$%^&*()_+-={}|:"<>?[]\\;',./`;
    const result = sanitizeAlphabetic(input);
    expect(result).toBe("abc");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
