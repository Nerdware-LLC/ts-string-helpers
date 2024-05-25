import { getSanitizerFn } from "./_helpers.js";

/**
 * Removes all non-alphanumeric/space characters from `str`.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 */
export const sanitizeAlphanumericWithSpaces = getSanitizerFn(/[^a-zA-Z0-9\s]/g);
