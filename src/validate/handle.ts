import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Returns `true` if `value` is a valid social account handle (e.g., "@foo_user").
 */
export const isValidHandle = getValidatorFn(/^@[a-zA-Z0-9_]{3,50}$/);
