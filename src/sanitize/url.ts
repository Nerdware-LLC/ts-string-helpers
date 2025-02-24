import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Removes all non-URL characters from `str`.
 */
export const sanitizeURL = getSanitizerFn(/[^a-zA-Z0-9-._~:/?#[\]@!$&'()+,;=]/g);
