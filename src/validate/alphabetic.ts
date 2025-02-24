import { getValidatorFn } from "../utils/getValidatorFn.js";

export const ALPHABETIC_VALIDATION_REGEX = /^[a-zA-Z]+$/;

/**
 * Returns `true` if `value` only contains alphabetic characters.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 */
export const isValidAlphabetic = getValidatorFn(ALPHABETIC_VALIDATION_REGEX);
