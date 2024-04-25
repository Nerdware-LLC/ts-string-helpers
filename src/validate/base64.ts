import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` is a valid base64-encoded string.
 */
export const isValidBase64 = getRegexValidatorFn(/^[a-zA-Z0-9+/]{2,}={0,3}$/);
