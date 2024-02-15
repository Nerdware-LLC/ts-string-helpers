import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` only contains alphabetic characters.
 */
export const isValidAlphabetic = getRegexValidatorFn(/^[a-zA-Z]+$/);
