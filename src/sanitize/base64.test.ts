import {
  ZERO_WIDTH_SPACE,
  NULL_CONTROL_CHAR,
  ZERO_WIDTH_AND_CONTROL_CHAR_REGEX,
} from "./_helpers.js";
import { sanitizeBase64 } from "./base64.js";

describe("sanitize: base64", () => {
  test("removes all non-base64 characters", () => {
    const input = `ab c${ZERO_WIDTH_SPACE}1 23${NULL_CONTROL_CHAR}~!@#$%^&*()_+-{}|:"<>?[]\\;',./=`;
    const result = sanitizeBase64(input);
    expect(result).toBe("abc123+/=");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
