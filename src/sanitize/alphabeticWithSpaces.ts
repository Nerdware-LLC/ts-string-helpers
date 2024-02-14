import { getSanitizerFn } from "./_helpers";

/**
 * Strips all non-alphabetic/space characters from `str`.
 */
export const sanitizeAlphabeticWithSpaces = getSanitizerFn(/[^a-zA-Z\s]/g);
