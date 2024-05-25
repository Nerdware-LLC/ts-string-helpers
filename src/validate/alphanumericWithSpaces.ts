import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` only contains alphanumeric characters and/or spaces.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 */
export const isValidAlphanumericWithSpaces = getRegexValidatorFn(/^[a-zA-Z0-9\s]+$/);
