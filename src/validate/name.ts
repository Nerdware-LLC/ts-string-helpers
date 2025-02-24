import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Returns `true` if `value` is a valid name (e.g., `"José São Hüman-persón"`).
 *
 * > _**Note:** The first character must be a letter._
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
 * // Non-ASCII latin-script characters are valid
 * isValidName("José São Hüman-persón"); // true
 * // Punctuation marks sometimes used in names are valid
 * isValidName("Jane Da'Human, Jr."); // true
 * ```
 *
 * **Pattern Notes:**
 * - The first character must be a letter or an apostrophe.
 * - `\p{Script=Latin}` is used as a more i18n-friendly alternative to `[a-zA-Z]`.
 * - `\x20` is the ASCII hex code for a single horizontal space.
 * - The hyphen literal is at the end of the group to avoid unintentional range creation.
 */
export const isValidName = getValidatorFn(/^\p{Script=Latin}[\p{Script=Latin}\x20'.,-]*$/u);
