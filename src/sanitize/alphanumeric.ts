import { getSanitizerFn } from "./_helpers";

/**
 * Strips all non-alphanumeric characters from `str`.
 */
export const sanitizeAlphanumeric = getSanitizerFn(/[^a-zA-Z0-9]/g);
