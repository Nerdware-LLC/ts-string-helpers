import { getSanitizerFn } from "./_helpers.js";

/**
 * Removes all non-alphabetic characters from `str`.
 */
export const sanitizeAlphabetic = getSanitizerFn(/[^a-zA-Z]/g);
