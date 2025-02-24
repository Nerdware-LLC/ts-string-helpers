import {
  ZERO_WIDTH_SPACE,
  NULL_CONTROL_CHAR,
  ZERO_WIDTH_AND_CONTROL_CHAR_REGEX,
} from "../utils/characters.test.js";
import { sanitizeBase64URL } from "./base64URL.js";

describe("sanitize: base64URL", () => {
  test("removes all non-base64URL characters", () => {
    const input = `ab c${ZERO_WIDTH_SPACE}1 23${NULL_CONTROL_CHAR}~!@#$%^&*()_+-{}|:"<>?[]\\;',./=`;
    const result = sanitizeBase64URL(input);
    expect(result).toBe("abc123_-");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
