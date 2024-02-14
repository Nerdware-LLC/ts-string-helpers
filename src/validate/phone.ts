import { getRegexValidatorFn } from "./_helpers";

/**
 * Returns `true` if `value` is a valid string of US phone number DIGITS (no spaces or special chars).
 */
export const isValidPhone = getRegexValidatorFn(/^[1-9]\d{9}$/);
