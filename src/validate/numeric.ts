import { getValidatorFn } from "../utils/getValidatorFn.js";

export const NUMERIC_VALIDATION_REGEX = /^[0-9]+$/;

/**
 * Returns `true` if `value` only contains numbers.
 */
export const isValidNumeric = getValidatorFn(NUMERIC_VALIDATION_REGEX);
