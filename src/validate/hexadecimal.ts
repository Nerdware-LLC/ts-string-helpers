import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Returns `true` if `value` only contains hexadecimal characters.
 */
export const isValidHex = getValidatorFn(/^[a-fA-F0-9]+$/);
