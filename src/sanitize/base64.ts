import { getSanitizerFn } from "./_helpers.js";

/**
 * Strips all non-base64 characters from `str`.
 */
export const sanitizeBase64 = getSanitizerFn(/[^a-zA-Z0-9+/=]/g);
