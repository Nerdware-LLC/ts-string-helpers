import { getSanitizerFn } from "./_helpers.js";

/**
 * Removes non-JSON characters from `str`.
 */
export const sanitizeJsonString = getSanitizerFn(
  /**
   * The pattern below works by testing for characters within the ASCII printable
   * range. The permitted-character range begins with ` ` (space char), which is
   * ASCII code 32, and ends with `~` (tilde), which is ASCII code 126. Note that
   * for the space char, `\s` cannot be used because escape sequences are not valid
   * in character ranges.
   */
  /[^ -~]/g
);
