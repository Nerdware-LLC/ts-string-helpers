import { getSanitizerFn } from "./_helpers";

/**
 * Strips all non-numeric characters from `str`.
 */
export const sanitizeNumeric = getSanitizerFn(/[^0-9]/g);
