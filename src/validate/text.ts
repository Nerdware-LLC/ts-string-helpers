import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Returns `true` if `value` only contains characters which meet the following criteria:
 *
 * 1. The character is generally used in everyday written text
 * 2. The character poses no security risks if not properly handled
 *
 * > **Examples of characters prohibited by this validator:** `{}`, `[]`, and `<>`
 *
 * This function is intended for arbitrary user-provided text, like comments or forum posts.
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
export const isValidText = getValidatorFn(/^[\p{Script=Latin}\d\s%$#@'&.,:;"!?+=()_—-]+$/u);
