import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Removes all non-alphabetic/space characters from `str`.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 *
 * **Pattern Notes:**
 * - `\x20` is the ASCII hex code for a single horizontal space.
 */
export const sanitizeAlphabeticWithSpaces = getSanitizerFn(/[^a-zA-Z\x20]/g);
