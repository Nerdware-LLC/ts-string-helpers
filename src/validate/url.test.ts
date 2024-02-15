import { isValidURL } from "./url.js";

describe("validate: url", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a valid absolute HTTP/S URL string", () => {
    expect(isValidURL("https://example.com/foo/path?query=value#anchor-name")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a URL without a protocol prefix", () => {
    expect(isValidURL("example.com/foo")).toBe(false);
  });
  test("returns false when given a URL with a protocol other than HTTP/S", () => {
    expect(isValidURL("ftp://example.com/")).toBe(false);
  });
  test("returns false when given a URL which exceeds the max length", () => {
    expect(isValidURL(`https://example.com/${Array(2000).join("x")}`)).toBe(false);
  });
  test("returns false when given an absolute HTTP/S URL string which includes a null unicode character", () => {
    expect(isValidURL("https://example.com/\u0000")).toBe(false);
  });
});
