import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Removes non-alphanumeric characters from `str` which are not `#` or `-`.
 *
 * > Why those characters? This was designed with DynamoDB keys in mind.
 */
export const sanitizeID = getSanitizerFn(/[^a-zA-Z0-9#-]/g);
