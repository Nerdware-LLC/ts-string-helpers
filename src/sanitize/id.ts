import { getSanitizerFn } from "./_helpers.js";

/**
 * Removes non-alphanumeric characters from `str` which are not `_`, `-`, or `#`.
 *
 * > Why those characters? This was designed with DynamoDB keys in mind.
 */
export const sanitizeID = getSanitizerFn(/[^a-zA-Z0-9-_#]/g);
