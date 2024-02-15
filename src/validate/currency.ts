import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` is a valid USD currency-formatted string.
 */
export const isValidCurrency = getRegexValidatorFn(/^\$?(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{2})?$/);
