import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Removes all non-phone characters from `str`.
 */
export const sanitizePhone = getSanitizerFn(/[^0-9\x20()+-]/g);
