import {
  ZERO_WIDTH_SPACE,
  NULL_CONTROL_CHAR,
  ZERO_WIDTH_AND_CONTROL_CHAR_REGEX,
} from "../utils/characters.test.js";
import { sanitizePhone } from "./phone.js";

describe("sanitizePhone", () => {
  test("removes all non-phone characters", () => {
    const input = `ab c${ZERO_WIDTH_SPACE}1 23${NULL_CONTROL_CHAR}~!@#$%^&*()_+-={}|:"<>?[]\\;',./`;
    const result = sanitizePhone(input);
    expect(result).toBe(" 1 23()+-");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
