/**
 * Escape a string by replacing <, >, &, ', ", `, \ and / with HTML entities.
 */
export const unescapeString = (str: string) => {
  return str
    .replace(/&quot;/g, `"`)
    .replace(/&#x27;/g, `'`)
    .replace(/&lt;/g, `<`)
    .replace(/&gt;/g, `>`)
    .replace(/&#x2F;/g, `/`)
    .replace(/&#x5C;/g, `\\`)
    .replace(/&#96;/g, "`")
    .replace(/&amp;/g, `&`); // <-- must be last
};
