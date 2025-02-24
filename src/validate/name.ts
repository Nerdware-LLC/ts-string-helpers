import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regex for validating names.
 *
 * **Permitted Characters:**
 * - [Unicode Latin-script characters](https://en.wikipedia.org/w/index.php?title=Latin_script_in_Unicode&oldid=1210023145#Table_of_characters)
 * - Single-horizontal-space characters (`\x20`)
 * - Apostrophes (`'`)
 * - Periods (`.`)
 * - Commas (`,`)
 * - Hyphens (`-`)
 *
 * **Pattern Notes:**
 * - The first character must be a letter.
 * - `\p{Script=Latin}` is used as a more i18n-friendly alternative to `[a-zA-Z]`.
 * - `\x20` is the ASCII hex code for a single horizontal space.
 * - The hyphen literal is at the end of the group to avoid unintentional range creation.
 */
export const NAME_VALIDATION_REGEX = /^\p{Script=Latin}[\p{Script=Latin}\x20'.,-]*$/u;

/**
 * Returns `true` if `value` is a valid name (e.g., `"José São Hüman-persón"`).
 *
 * > See {@link NAME_VALIDATION_REGEX} for a list of permitted characters and
 * > other implementation details.
 *
 * ```ts
 * // Non-ASCII latin-script characters are valid
 * isValidName("José São Hüman-persón"); // true
 * // Punctuation marks sometimes used in names are valid
 * isValidName("Jane Da'Human, Jr."); // true
 * ```
 */
export const isValidName = getValidatorFn(NAME_VALIDATION_REGEX);
