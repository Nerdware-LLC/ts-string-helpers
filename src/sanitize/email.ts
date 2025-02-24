import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Removes all invalid email characters from `str` (see
 * [RFC 5322](https://datatracker.ietf.org/doc/html/rfc5322)).
 */
export const sanitizeEmail = getSanitizerFn(/[^a-zA-Z0-9_@.+-]/g);
