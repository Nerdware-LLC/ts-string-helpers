import { getValidatorFn } from "../utils/getValidatorFn.js";

export const HEX_VALIDATION_REGEX = /^[a-fA-F0-9]+$/;

/**
 * Returns `true` if `value` only contains hexadecimal characters.
 */
export const isValidHex = getValidatorFn(HEX_VALIDATION_REGEX);
