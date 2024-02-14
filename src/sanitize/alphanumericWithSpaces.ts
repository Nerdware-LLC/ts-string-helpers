import { getSanitizerFn } from "./_helpers";

/**
 * Strips all non-alphanumeric/space characters from `str`.
 */
export const sanitizeAlphanumericWithSpaces = getSanitizerFn(/[^a-zA-Z0-9\s]/g);
