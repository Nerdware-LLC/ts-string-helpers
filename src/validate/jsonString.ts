import { getValidatorFn } from "./_helpers.js";

/**
 * Returns `true` is `value` only contains valid JSON characters.
 */
export const isValidJsonString = getValidatorFn(
  /**
   * The pattern below works by testing for characters within the ASCII printable
   * range. The permitted-character range begins with ` ` (space char), which is
   * ASCII code 32, and ends with `~` (tilde), which is ASCII code 126. Note that
   * for the space char, `\s` cannot be used because escape sequences are not valid
   * in character ranges.
   */
  /^[ -~]+$/
);
