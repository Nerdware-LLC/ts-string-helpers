import {
  ZERO_WIDTH_SPACE,
  NULL_CONTROL_CHAR,
  ZERO_WIDTH_AND_CONTROL_CHAR_REGEX,
} from "../utils/characters.test.js";
import { sanitizeAlphanumeric } from "./alphanumeric.js";

describe("sanitizeAlphanumeric", () => {
  test("removes all non-alphanumeric characters", () => {
    const input = `ab c${ZERO_WIDTH_SPACE}1 23${NULL_CONTROL_CHAR}~!@#$%^&*()_+-={}|:"<>?[]\\;',./`;
    const result = sanitizeAlphanumeric(input);
    expect(result).toBe("abc123");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
