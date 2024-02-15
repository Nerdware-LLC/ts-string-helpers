import {
  ZERO_WIDTH_SPACE,
  NULL_CONTROL_CHAR,
  ZERO_WIDTH_AND_CONTROL_CHAR_REGEX,
} from "./_helpers.js";
import { sanitizeAlphanumericWithSpaces } from "./alphanumericWithSpaces.js";

describe("sanitize: alphanumericwithspaces", () => {
  test("removes all non-alphanumeric/space characters", () => {
    const input = `ab c${ZERO_WIDTH_SPACE}1 23${NULL_CONTROL_CHAR}~!@#$%^&*()_+-={}|:"<>?[]\\;',./`;
    const result = sanitizeAlphanumericWithSpaces(input);
    expect(result).toBe("ab c1 23");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
