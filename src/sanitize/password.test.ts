import { ZERO_WIDTH_SPACE, NULL_CONTROL_CHAR, ZERO_WIDTH_AND_CONTROL_CHAR_REGEX } from "./_helpers";
import { sanitizePassword } from "./password";

describe("sanitize: password", () => {
  test("removes all disallowed password characters", () => {
    const input = `ab c${ZERO_WIDTH_SPACE}1 23${NULL_CONTROL_CHAR}~!@#$%^&*()_+-={}|:"<>?[]\\;',./`;
    const result = sanitizePassword(input);
    expect(result).toBe("abc123!@#$%^&*");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
