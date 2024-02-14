import { ZERO_WIDTH_SPACE, NULL_CONTROL_CHAR, ZERO_WIDTH_AND_CONTROL_CHAR_REGEX } from "./_helpers";
import { sanitizeHandle } from "./handle";

describe("sanitize: handle", () => {
  test("removes all non-handle characters", () => {
    const input = `@${ZERO_WIDTH_SPACE}foo_ user${NULL_CONTROL_CHAR}~!#$%^&*()+-={}|:"<>?[]\\;',./`;
    const result = sanitizeHandle(input);
    expect(result).toBe("@foo_user");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
