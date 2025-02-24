import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regex for validating US phone number strings.
 * - Accepts US phone numbers with or without a country code (`+1` or `1`).
 * - The segments of the phone number may be separated by a space or hyphen.
 * - The area code may be enclosed in parentheses.
 */
export const PHONE_VALIDATION_REGEX =
  /^((\+1|1)(\x20|-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})(\x20|-)?([2-9][0-9]{2}(\x20|-)?[0-9]{4})$/;

/**
 * Returns `true` if `value` is a valid US phone number.
 */
export const isValidPhone = getValidatorFn(PHONE_VALIDATION_REGEX);
