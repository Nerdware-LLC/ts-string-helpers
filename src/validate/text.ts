import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regex for validating escaped text. Characters are only allowed if they pose no/minimal
 * security risk, and are generally used in everyday written text.
 *
 * > **Examples of characters prohibited by this regex:** `{}`, `[]`, and `<>`
 *
 * This regex is intended for arbitrary user-provided text, like comments or forum posts.
 *
 * **Permitted Characters:**
 * - [Unicode Latin-script characters](https://en.wikipedia.org/w/index.php?title=Latin_script_in_Unicode&oldid=1210023145#Table_of_characters)
 * - Numerical digits (`\d`)
 * - Whitespace characters (`\s`)
 * - Percent signs (`%`)
 * - Dollar signs (`$`)
 * - Number signs (`#`)
 * - At symbols (`@`)
 * - Apostrophes (`'`)
 * - Ampersands (`&`)
 * - Periods (`.`)
 * - Commas (`,`)
 * - Colons (`:`)
 * - Semicolons (`;`)
 * - Double quotes (`"`)
 * - Exclamation marks (`!`)
 * - Question marks (`?`)
 * - Plus signs (`+`)
 * - Equal signs (`=`)
 * - Parentheses (`()`)
 * - Underscores (`_`)
 * - Em dashes (`—`)
 * - Hyphens (`-`)
 *
 * **Pattern Notes:**
 * - `\p{Script=Latin}` is used as a more i18n-friendly alternative to `[a-zA-Z]`.
 * - The hyphen literal is at the end of the group to avoid unintentional range creation.
 */
export const ESCAPED_TEXT_VALIDATION_REGEX = /^[\p{Script=Latin}\d\s%$#@'&.,:;"!?+=()_—-]+$/u;

/**
 * Returns `true` if `value` does not contain characters that pose a known security risk.
 */
export const isValidText = getValidatorFn(ESCAPED_TEXT_VALIDATION_REGEX);
