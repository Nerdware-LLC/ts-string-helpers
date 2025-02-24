import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regular expression for validating USD currency-formatted strings.
 */
export const USD_CURRENCY_VALIDATION_REGEX = /^\$?(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{2})?$/;

/**
 * Returns `true` if `value` is a valid USD currency-formatted string.
 */
export const isValidCurrency = getValidatorFn(USD_CURRENCY_VALIDATION_REGEX);
