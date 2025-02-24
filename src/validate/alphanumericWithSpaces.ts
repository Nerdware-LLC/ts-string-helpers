import { getValidatorFn } from "../utils/getValidatorFn.js";

export const ALPHANUMERIC_WITH_SPACES_VALIDATION_REGEX = /^[a-zA-Z0-9\x20]+$/;

/**
 * Returns `true` if `value` only contains alphanumeric characters and/or spaces.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 *
 * **Pattern Notes:**
 * - `\x20` is the ASCII hex code for a single horizontal space.
 */
export const isValidAlphanumericWithSpaces = getValidatorFn(
  ALPHANUMERIC_WITH_SPACES_VALIDATION_REGEX
);
