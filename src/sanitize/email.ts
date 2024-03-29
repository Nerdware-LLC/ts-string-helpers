import { getSanitizerFn } from "./_helpers.js";

/**
 * Strips all invalid email characters from `str` (see
 * [RFC 5322](https://datatracker.ietf.org/doc/html/rfc5322)).
 */
export const sanitizeEmail = getSanitizerFn(/[^a-zA-Z0-9-._@+]/g);
