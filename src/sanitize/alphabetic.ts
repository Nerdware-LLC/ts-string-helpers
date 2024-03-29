import { getSanitizerFn } from "./_helpers.js";

/**
 * Strips all non-alphabetic characters from `str`.
 */
export const sanitizeAlphabetic = getSanitizerFn(/[^a-zA-Z]/g);
