import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Removes all non-alphabetic characters from `str`.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 */
export const sanitizeAlphabetic = getSanitizerFn(/[^a-zA-Z]/g);
