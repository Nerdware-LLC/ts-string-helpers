import { getRegexValidatorFn } from "./_helpers";

/**
 * Returns `true` if `value` only contains letters and/or spaces.
 */
export const isValidAlphabeticWithSpaces = getRegexValidatorFn(/^[a-zA-Z\s]+$/);
