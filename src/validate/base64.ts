import { getValidatorFn } from "../utils/getValidatorFn.js";

export const BASE64_VALIDATION_REGEX = /^[a-zA-Z0-9+/]{2,}={0,3}$/;

/**
 * Returns `true` if `value` is a valid base64-encoded string.
 */
export const isValidBase64 = getValidatorFn(BASE64_VALIDATION_REGEX);
