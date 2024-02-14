import { getSanitizerFn } from "./_helpers";

/**
 * Strips all non-alphabetic/space characters from `str`.
 */
export const sanitizeAlphabeticwithspaces = getSanitizerFn(/[^a-zA-Z\s]/g);
