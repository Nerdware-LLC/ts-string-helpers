/**
 * Escape a string by replacing <, >, &, ', ", `, \ and / with HTML entities.
 */
export const escapeString = (str: string) => {
  return str
    .replace(/&/g, `&amp;`)
    .replace(/"/g, `&quot;`)
    .replace(/'/g, `&#x27;`)
    .replace(/</g, `&lt;`)
    .replace(/>/g, `&gt;`)
    .replace(/\//g, `&#x2F;`)
    .replace(/\\/g, `&#x5C;`)
    .replace(/`/g, `&#96;`);
};
