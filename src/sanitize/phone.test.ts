import { ZERO_WIDTH_SPACE, NULL_CONTROL_CHAR, ZERO_WIDTH_AND_CONTROL_CHAR_REGEX } from "./_helpers";
import { sanitizePhone } from "./phone";

describe("sanitize: phone", () => {
  test("removes all non-phone/non-numeric characters", () => {
    const input = `ab c${ZERO_WIDTH_SPACE}1 23${NULL_CONTROL_CHAR}~!@#$%^&*()_+-={}|:"<>?[]\\;',./`;
    const result = sanitizePhone(input);
    expect(result).toBe("123");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
