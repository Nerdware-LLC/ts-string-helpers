import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` only contains alphabetic characters and/or spaces.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 */
export const isValidAlphabeticWithSpaces = getRegexValidatorFn(/^[a-zA-Z\s]+$/);
