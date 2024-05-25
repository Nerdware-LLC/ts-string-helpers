import { getSanitizerFn } from "./_helpers.js";

/**
 * Removes all non-alphanumeric characters from `str`.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 */
export const sanitizeAlphanumeric = getSanitizerFn(/[^a-zA-Z0-9]/g);
