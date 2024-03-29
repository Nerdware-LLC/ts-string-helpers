import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` only contains alphanumeric characters.
 */
export const isValidAlphanumeric = getRegexValidatorFn(/^[a-zA-Z0-9]+$/);
