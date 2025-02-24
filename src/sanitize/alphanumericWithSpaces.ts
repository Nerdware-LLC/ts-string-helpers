import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Removes all non-alphanumeric/space characters from `str`.
 *
 * > This function only permits [ASCII characters](https://www.asciitable.com/).
 *
 * **Pattern Notes:**
 * - `\x20` is the ASCII hex code for a single horizontal space.
 */
export const sanitizeAlphanumericWithSpaces = getSanitizerFn(/[^a-zA-Z0-9\x20]/g);
