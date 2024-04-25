import { getSanitizerFn } from "./_helpers.js";

/**
 * Remove characters from `str` which are not valid in a JSON Web Token.
 */
export const sanitizeJWT = getSanitizerFn(/[^a-zA-Z0-9._-]/g);
// Note: hyphen literal is at the end of the group to avoid range creation
