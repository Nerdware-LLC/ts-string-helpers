import { isValidJWT } from "./jwt.js";

describe("isValidJWT", () => {
  // POSITIVE TEST CASES:

  test("returns true when given a string is a valid JWT", () => {
    expect(isValidJWT("123.abc.ABC-DEF_0")).toBe(true);
  });

  // NEGATIVE TEST CASES: space and base64 characters (plus sign, forward slash, equals sign)

  test("returns false when given a string which contains a space", () => {
    expect(isValidJWT("123 abc.ABC-DEF_0")).toBe(false);
  });
  test("returns false when given a string which contains a plus sign", () => {
    expect(isValidJWT("123+abc.ABC-DEF_0")).toBe(false);
  });
  test("returns false when given a string which contains a forward slash", () => {
    expect(isValidJWT("123/abc.ABC-DEF_0")).toBe(false);
  });
  test("returns false when given a string which contains an equals sign", () => {
    expect(isValidJWT("123.abc.ABC-DEF_0==")).toBe(false);
  });
});
