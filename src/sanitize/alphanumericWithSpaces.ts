import { getSanitizerFn } from "./_helpers.js";

/**
 * Removes all non-alphanumeric/space characters from `str`.
 */
export const sanitizeAlphanumericWithSpaces = getSanitizerFn(/[^a-zA-Z0-9\s]/g);
