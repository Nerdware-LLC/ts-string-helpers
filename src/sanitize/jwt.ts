import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Remove characters from `str` which are not valid in a JSON Web Token.
 *
 * **Pattern Notes:**
 * - The hyphen literal is at the end of the group to avoid unintentional range creation.
 */
export const sanitizeJWT = getSanitizerFn(/[^a-zA-Z0-9._-]/g);
