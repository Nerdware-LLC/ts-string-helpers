import { unescapeString } from "./unescapeString.js";

test('unescapes &quot; to "', () => {
  expect(unescapeString("&quot;")).toBe('"');
});

test("unescapes &#x27; to '", () => {
  expect(unescapeString("&#x27;")).toBe("'");
});

test("unescapes &lt; to <", () => {
  expect(unescapeString("&lt;")).toBe("<");
});

test("unescapes &gt; to >", () => {
  expect(unescapeString("&gt;")).toBe(">");
});

test("unescapes &#x2F; to /", () => {
  expect(unescapeString("&#x2F;")).toBe("/");
});

test("unescapes &#x5C; to \\", () => {
  expect(unescapeString("&#x5C;")).toBe("\\");
});

test("unescapes &#96; to `", () => {
  expect(unescapeString("&#96;")).toBe("`");
});

test("unescapes &amp; to &", () => {
  expect(unescapeString("&amp;")).toBe("&");
});

test("unescapes a string with multiple entities", () => {
  expect(
    unescapeString(
      "&lt;div&gt;Hello &amp; welcome to the &quot;world&quot; of &#x27;Jurassic Park&#x27;!&#x2F;&#x5C;&#96;"
    )
  ).toBe("<div>Hello & welcome to the \"world\" of 'Jurassic Park'!/\\`");
});
