import { getSanitizerFn } from "./_helpers.js";

/**
 * Removes all non-numeric characters from `str`.
 */
export const sanitizeNumeric = getSanitizerFn(/[^0-9]/g);
