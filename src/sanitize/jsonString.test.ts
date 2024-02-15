import {
  ZERO_WIDTH_SPACE,
  NULL_CONTROL_CHAR,
  ZERO_WIDTH_AND_CONTROL_CHAR_REGEX,
} from "./_helpers.js";
import { sanitizeJsonString } from "./jsonString.js";

describe("sanitize: jsonString", () => {
  test("removes all non-json characters", () => {
    const input = `{"foo":"bar","baz":"${ZERO_WIDTH_SPACE}1 23${NULL_CONTROL_CHAR}~!@#$%^&*()_+-={}|:"<>?[]\\;',./"}`;
    const result = sanitizeJsonString(input);
    expect(result).toBe(`{"foo":"bar","baz":"1 23~!@#$%^&*()_+-={}|:"<>?[]\\;',./"}`);
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
