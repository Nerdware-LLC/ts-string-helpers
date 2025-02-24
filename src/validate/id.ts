import { getValidatorFn } from "../utils/getValidatorFn.js";

export const ID_VALIDATION_REGEX = /^[a-zA-Z0-9#-]{6,250}$/;

/**
 * Returns `true` if `value` only contains alphanumeric characters, `#`, or `-`.
 */
export const isValidID = getValidatorFn(ID_VALIDATION_REGEX);
