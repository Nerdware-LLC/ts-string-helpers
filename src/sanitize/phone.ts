import { sanitizeNumeric } from "./numeric.js";

/**
 * Strips all non-digit characters from `str` (converts `"(888) 123-4567"` into `"8881234567"`).
 */
export const sanitizePhone = sanitizeNumeric;
