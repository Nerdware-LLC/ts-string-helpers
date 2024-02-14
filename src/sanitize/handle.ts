import { getSanitizerFn } from "./_helpers";

/**
 * Remove all non-handle characters from `str` (e.g., "@foo_user").
 */
export const sanitizeHandle = getSanitizerFn(/[^a-zA-Z0-9_@]/g);
