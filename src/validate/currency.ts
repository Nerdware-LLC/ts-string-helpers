import { getValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` is a valid USD currency-formatted string.
 */
export const isValidCurrency = getValidatorFn(/^\$?(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{2})?$/);
