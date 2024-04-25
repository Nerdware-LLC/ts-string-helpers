import {
  ZERO_WIDTH_SPACE,
  NULL_CONTROL_CHAR,
  ZERO_WIDTH_AND_CONTROL_CHAR_REGEX,
} from "./_helpers.js";
import { sanitizeHex } from "./hexadecimal.js";

describe("sanitize: hexadecimal", () => {
  test("removes all non-hexadecimal characters", () => {
    const input = `abcdefghijklmnopqrstuvwxyx ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890 ${ZERO_WIDTH_SPACE} ${NULL_CONTROL_CHAR}~!@#$%^&*()_+-={}|:"<>?[]\\;',./`;
    const result = sanitizeHex(input);
    expect(result).toBe("abcdefABCDEF1234567890");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
