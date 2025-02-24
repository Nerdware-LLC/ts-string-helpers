import { escapeString } from "./escapeString.js";

test("escapes & to &amp;", () => {
  expect(escapeString("&")).toBe("&amp;");
});

test('escapes " to &quot;', () => {
  expect(escapeString('"')).toBe("&quot;");
});

test("escapes ' to &#x27;", () => {
  expect(escapeString("'")).toBe("&#x27;");
});

test("escapes < to &lt;", () => {
  expect(escapeString("<")).toBe("&lt;");
});

test("escapes > to &gt;", () => {
  expect(escapeString(">")).toBe("&gt;");
});

test("escapes / to &#x2F;", () => {
  expect(escapeString("/")).toBe("&#x2F;");
});

test("escapes \\ to &#x5C;", () => {
  expect(escapeString("\\")).toBe("&#x5C;");
});

test("escapes ` to &#96;", () => {
  expect(escapeString("`")).toBe("&#96;");
});

test("escapes multiple characters", () => {
  expect(escapeString('<script>alert("XSS")</script>')).toBe(
    "&lt;script&gt;alert(&quot;XSS&quot;)&lt;&#x2F;script&gt;"
  );
});

test("returns the same string if no characters need to be escaped", () => {
  expect(escapeString("Hello, World!")).toBe("Hello, World!");
});
