import { isValidURL, isValidHttpURL } from "./url.js";

describe("validate: URL", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a valid absolute HTTP/S URL string", () => {
    expect(isValidURL("https://example.com")).toBe(true);
    expect(isValidURL("https://example.com/")).toBe(true);
    expect(isValidURL("https://example.com/foo")).toBe(true);
    expect(isValidURL("https://example.com/foo/path?query=value")).toBe(true);
    expect(isValidURL("https://example.com/foo/path?query=value#anchor-name")).toBe(true);
  });
  test("returns true when given a valid relative URL without a protocol prefix", () => {
    expect(isValidURL("example.com")).toBe(true);
    expect(isValidURL("example.com/")).toBe(true);
    expect(isValidURL("example.com/foo")).toBe(true);
    expect(isValidURL("example.com/foo?bar=qux")).toBe(true);
    expect(isValidURL("example.com/foo?bar=qux#anchor-name")).toBe(true);
  });
  test("returns true when given a valid URL with a protocol other than HTTP/S", () => {
    expect(isValidURL("ftp://example.com")).toBe(true);
    expect(isValidURL("ftp://example.com/")).toBe(true);
    expect(isValidURL("ftp://example.com/foo")).toBe(true);
    expect(isValidURL("ftp://example.com/foo?bar=qux")).toBe(true);
    expect(isValidURL("ftp://example.com/foo?bar=qux#anchor-name")).toBe(true);

    expect(isValidURL("s3://example.com")).toBe(true);
    expect(isValidURL("s3://example.com/")).toBe(true);
    expect(isValidURL("s3://example.com/foo")).toBe(true);
    expect(isValidURL("s3://example.com/foo?bar=qux")).toBe(true);
    expect(isValidURL("s3://example.com/foo?bar=qux#anchor-name")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a URL which exceeds the max length", () => {
    expect(isValidURL(`https://example.com/${Array(2000).join("x")}`)).toBe(false);
  });
  test("returns false when given an absolute HTTP/S URL string which includes a null unicode character", () => {
    expect(isValidURL("https://example\u0000.com")).toBe(false);
    expect(isValidURL("https://example.com/\u0000")).toBe(false);
    expect(isValidURL("https://example.com/foo\u0000")).toBe(false);
    expect(isValidURL("https://example.com/foo?bar\u0000=qux")).toBe(false);
    expect(isValidURL("https://example.com/foo?bar=qux\u0000")).toBe(false);
    expect(isValidURL("https://example.com/foo?bar=qux#\u0000")).toBe(false);
    expect(isValidURL("https://example.com/foo?bar=qux#anchor\u0000")).toBe(false);
  });
});

describe("validate: HTTP URL", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a valid absolute HTTP/S URL string", () => {
    expect(isValidHttpURL("https://example.com")).toBe(true);
    expect(isValidHttpURL("https://example.com/")).toBe(true);
    expect(isValidHttpURL("https://example.com/foo")).toBe(true);
    expect(isValidHttpURL("https://example.com/foo/path?query=value")).toBe(true);
    expect(isValidHttpURL("https://example.com/foo/path?query=value#anchor-name")).toBe(true);
  });

  // NEGATIVE TEST CASES:

  test("returns false when given a URL without a protocol prefix", () => {
    expect(isValidHttpURL("example.com")).toBe(false);
    expect(isValidHttpURL("example.com/")).toBe(false);
    expect(isValidHttpURL("example.com/foo")).toBe(false);
    expect(isValidHttpURL("example.com/foo?bar=qux")).toBe(false);
    expect(isValidHttpURL("example.com/foo?bar=qux#anchor-name")).toBe(false);
  });
  test("returns false when given a URL with a protocol other than HTTP/S", () => {
    expect(isValidHttpURL("abc://example.com")).toBe(false);
    expect(isValidHttpURL("ftp://example.com")).toBe(false);
    expect(isValidHttpURL("s3://example.com")).toBe(false);
    expect(isValidHttpURL("x://example.com")).toBe(false);
  });
  test("returns false when given a URL which exceeds the max length", () => {
    expect(isValidHttpURL(`https://example.com/${Array(2000).join("x")}`)).toBe(false);
  });
  test("returns false when given an absolute HTTP/S URL string which includes a null unicode character", () => {
    expect(isValidHttpURL("https://example\u0000.com")).toBe(false);
    expect(isValidHttpURL("https://example.com/\u0000")).toBe(false);
    expect(isValidHttpURL("https://example.com/foo\u0000")).toBe(false);
    expect(isValidHttpURL("https://example.com/foo?bar\u0000=qux")).toBe(false);
    expect(isValidHttpURL("https://example.com/foo?bar=qux\u0000")).toBe(false);
    expect(isValidHttpURL("https://example.com/foo?bar=qux#\u0000")).toBe(false);
    expect(isValidHttpURL("https://example.com/foo?bar=qux#anchor\u0000")).toBe(false);
  });
});
