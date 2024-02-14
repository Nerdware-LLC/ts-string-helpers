import { getRegexValidatorFn } from "./_helpers";

/**
 * Returns `true` if `value` is a valid social account handle (e.g., "@foo_user").
 */
export const isValidHandle = getRegexValidatorFn(/^@[a-zA-Z0-9_]{3,50}$/);
