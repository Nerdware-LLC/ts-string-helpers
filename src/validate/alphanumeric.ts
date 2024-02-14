import { getRegexValidatorFn } from "./_helpers";

/**
 * Returns `true` if `value` only contains alphanumeric chars.
 */
export const isValidAlphanumeric = getRegexValidatorFn(/^[a-zA-Z0-9]+$/);
