import { getSanitizerFn } from "./_helpers.js";

/**
 * Removes all non-alphanumeric characters from `str`.
 */
export const sanitizeAlphanumeric = getSanitizerFn(/[^a-zA-Z0-9]/g);
