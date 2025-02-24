import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regex for validating JSON-string values. The pattern works by testing for
 * characters within the ASCII printable range. The permitted-character range
 * begins with `\x20` (single space character), which is ASCII code 32, and
 * ends with `~` (tilde), which is ASCII code 126.
 */
export const JSON_STRING_VALIDATION_REGEX = /^[\x20-~]+$/;

/**
 * Returns `true` is `value` only contains valid JSON characters.
 */
export const isValidJsonString = getValidatorFn(JSON_STRING_VALIDATION_REGEX);
