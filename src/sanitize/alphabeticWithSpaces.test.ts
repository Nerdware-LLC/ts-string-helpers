import {
  ZERO_WIDTH_SPACE,
  NULL_CONTROL_CHAR,
  ZERO_WIDTH_AND_CONTROL_CHAR_REGEX,
} from "../utils/characters.test.js";
import { sanitizeAlphabeticWithSpaces } from "./alphabeticWithSpaces.js";

describe("sanitizeAlphabeticWithSpaces", () => {
  test("removes all non-alphabetic/space characters", () => {
    const input = `ab c${ZERO_WIDTH_SPACE}1 23${NULL_CONTROL_CHAR}~!@#$%^&*()_+-={}|:"<>?[]\\;',./`;
    const result = sanitizeAlphabeticWithSpaces(input);
    expect(result).toBe("ab c ");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
