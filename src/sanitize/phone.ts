import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Removes all non-digit characters from `str` (converts `"(888) 123-4567"` into `"8881234567"`).
 */
export const sanitizePhone = sanitizeNumeric;
