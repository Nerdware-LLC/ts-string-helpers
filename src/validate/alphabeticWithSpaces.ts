import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` only contains alphabetic characters and/or spaces.
 */
export const isValidAlphabeticWithSpaces = getRegexValidatorFn(/^[a-zA-Z\s]+$/);
