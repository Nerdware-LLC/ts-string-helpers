import { getValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` only contains alphanumeric characters, `#`, or `-`.
 */
export const isValidID = getValidatorFn(/^[a-zA-Z0-9#-]{6,250}$/);
