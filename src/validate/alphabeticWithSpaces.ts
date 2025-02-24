import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Returns `true` if `value` only contains alphabetic characters and/or spaces.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 *
 * **Pattern Notes:**
 * - `\x20` is the ASCII hex code for a single horizontal space.
 */
export const isValidAlphabeticWithSpaces = getValidatorFn(/^[a-zA-Z\x20]+$/);
