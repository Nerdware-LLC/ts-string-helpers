import { getSanitizerFn } from "./_helpers.js";

/**
 * Removes characters from `str` which are generally not valid in a name.
 *
 * **Permitted Characters:**
 * - [Unicode Latin-script characters](https://en.wikipedia.org/w/index.php?title=Latin_script_in_Unicode&oldid=1210023145#Table_of_characters)
 * - Single-horizontal-space characters (`\x20`)
 * - Apostrophes (`'`)
 * - Periods (`.`)
 * - Commas (`,`)
 * - Hyphens (`-`)
 *
 * ```ts
 * // Non-ASCII latin-script characters are preserved
 * sanitizeName("José São Hüman-persón"); // "José São Hüman-përsón"
 * // Punctuation marks sometimes used in names are preserved
 * sanitizeName("Jane Da'Human, Jr."); // "Jane Da'Human, Jr."
 * ```
 *
 * **Pattern Notes:**
 * - `\p{Script=Latin}` is used as a more i18n-friendly alternative to `[a-zA-Z]`.
 * - `\x20` is the ASCII hex code for a single horizontal space.
 * - The hyphen literal is at the end of the group to avoid unintentional range creation.
 */
export const sanitizeName = getSanitizerFn(/[^\p{Script=Latin}\x20'.,-]/gu);
