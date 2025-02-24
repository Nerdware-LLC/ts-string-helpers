import { getValidatorFn } from "../utils/getValidatorFn.js";

export const ALPHANUMERIC_VALIDATION_REGEX = /^[a-zA-Z0-9]+$/;

/**
 * Returns `true` if `value` only contains alphanumeric characters.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 */
export const isValidAlphanumeric = getValidatorFn(ALPHANUMERIC_VALIDATION_REGEX);
