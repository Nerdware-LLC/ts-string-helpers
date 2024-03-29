import { getSanitizerFn } from "./_helpers.js";

/**
 * Remove non-alphanumeric characters from `str` which are not `!`, `@`, `#`, `$`, `%`, `^`, `&`, or `*`.
 */
export const sanitizePassword = getSanitizerFn(/[^a-zA-Z0-9!@#$%^&*]/g);
