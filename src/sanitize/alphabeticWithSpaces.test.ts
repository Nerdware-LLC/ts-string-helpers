import { ZERO_WIDTH_SPACE, NULL_CONTROL_CHAR, ZERO_WIDTH_AND_CONTROL_CHAR_REGEX } from "./_helpers";
import { sanitizeAlphabeticwithspaces } from "./alphabeticWithSpaces";

describe("sanitize: alphabeticwithspaces", () => {
  test("removes all non-alphabetic/space characters", () => {
    const input = `ab c${ZERO_WIDTH_SPACE}1 23${NULL_CONTROL_CHAR}~!@#$%^&*()_+-={}|:"<>?[]\\;',./`;
    const result = sanitizeAlphabeticwithspaces(input);
    expect(result).toBe("ab c");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
