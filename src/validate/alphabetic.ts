import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Returns `true` if `value` only contains alphabetic characters.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 */
export const isValidAlphabetic = getValidatorFn(/^[a-zA-Z]+$/);
