import {
  ZERO_WIDTH_SPACE,
  NULL_CONTROL_CHAR,
  ZERO_WIDTH_AND_CONTROL_CHAR_REGEX,
} from "./_helpers.js";
import { sanitizeEmail } from "./email.js";

describe("sanitize: email", () => {
  test("removes all non-email characters", () => {
    const input = `foo_1+bar${NULL_CONTROL_CHAR}@gma il.com${ZERO_WIDTH_SPACE}~!#$%^&*()={}|:"<>?[]\\;',/`;
    const result = sanitizeEmail(input);
    expect(result).toBe("foo_1+bar@gmail.com");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
