import { getSanitizerFn } from "./_helpers";

/**
 * Strips all non-alphanumeric/space characters from `str`.
 */
export const sanitizeAlphanumericwithspaces = getSanitizerFn(/[^a-zA-Z0-9\s]/g);
