import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Removes all non-base64 characters from `str`.
 */
export const sanitizeBase64 = getSanitizerFn(/[^a-zA-Z0-9+/=]/g);
