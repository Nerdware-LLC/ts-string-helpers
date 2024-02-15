import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` only contains numbers.
 */
export const isValidNumeric = getRegexValidatorFn(/^[0-9]+$/);
