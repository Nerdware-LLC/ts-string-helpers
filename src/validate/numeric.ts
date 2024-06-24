import { getValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` only contains numbers.
 */
export const isValidNumeric = getValidatorFn(/^[0-9]+$/);
