import { getRegexValidatorFn } from "./_helpers";

/**
 * Returns `true` if `value` only contains numbers.
 */
export const isValidNumeric = getRegexValidatorFn(/^[0-9]+$/);
