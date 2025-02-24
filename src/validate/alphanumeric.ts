import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Returns `true` if `value` only contains alphanumeric characters.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 */
export const isValidAlphanumeric = getValidatorFn(/^[a-zA-Z0-9]+$/);
