import { getRegexValidatorFn } from "./_helpers";

/**
 * Returns `true` if `value` only contains alphanumeric chars and/or spaces.
 */
export const isValidAlphanumericWithSpaces = getRegexValidatorFn(/^[a-zA-Z0-9\s]+$/);
