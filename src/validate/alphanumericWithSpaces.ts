import { getValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` only contains alphanumeric characters and/or spaces.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 *
 * **Pattern Notes:**
 * - `\x20` is the ASCII hex code for a single horizontal space.
 */
export const isValidAlphanumericWithSpaces = getValidatorFn(/^[a-zA-Z0-9\x20]+$/);
