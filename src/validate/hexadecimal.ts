import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` only contains hexadecimal characters.
 */
export const isValidHex = getRegexValidatorFn(/^[a-fA-F0-9]+$/);
