import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Remove all non-hexadecimal characters from `str`.
 */
export const sanitizeHex = getSanitizerFn(/[^a-fA-F0-9]/g);
