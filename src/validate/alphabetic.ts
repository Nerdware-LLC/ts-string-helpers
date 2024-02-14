import { getRegexValidatorFn } from "./_helpers";

/**
 * Returns `true` if `value` only contains letters.
 */
export const isValidAlphabetic = getRegexValidatorFn(/^[a-zA-Z]+$/);
