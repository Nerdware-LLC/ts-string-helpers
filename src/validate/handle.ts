import { getValidatorFn } from "../utils/getValidatorFn.js";

export const HANDLE_VALIDATION_REGEX = /^@[a-zA-Z0-9_]{3,50}$/;

/**
 * Returns `true` if `value` is a valid social account handle (e.g., "@foo_user").
 */
export const isValidHandle = getValidatorFn(HANDLE_VALIDATION_REGEX);
