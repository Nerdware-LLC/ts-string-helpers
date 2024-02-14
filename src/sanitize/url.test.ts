import { ZERO_WIDTH_SPACE, NULL_CONTROL_CHAR, ZERO_WIDTH_AND_CONTROL_CHAR_REGEX } from "./_helpers";
import { sanitizeURL } from "./url";

describe("sanitize: url", () => {
  test("removes all non-URL characters", () => {
    const input = `<>https://www.exa mple.com${ZERO_WIDTH_SPACE}/path?query=value${NULL_CONTROL_CHAR}#fragment<>%^*{}|"`;
    const result = sanitizeURL(input);
    expect(result).toBe("https://www.example.com/path?query=value#fragment");
    expect(result).not.toMatch(ZERO_WIDTH_AND_CONTROL_CHAR_REGEX);
  });
});
