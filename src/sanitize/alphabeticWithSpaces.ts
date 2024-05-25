import { getSanitizerFn } from "./_helpers.js";

/**
 * Removes all non-alphabetic/space characters from `str`.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 */
export const sanitizeAlphabeticWithSpaces = getSanitizerFn(/[^a-zA-Z\s]/g);
