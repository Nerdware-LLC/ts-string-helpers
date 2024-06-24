import { getValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` is a valid string of US phone number _DIGITS_
 * (no spaces or special characters).
 */
export const isValidPhone = getValidatorFn(/^[1-9]\d{9}$/);
