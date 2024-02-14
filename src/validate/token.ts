import { getRegexValidatorFn } from "./_helpers";

/**
 * Returns `true` if `value` only contains alphanumeric characters, `.`, `/`, or `+`.
 */
export const isValidToken = getRegexValidatorFn(/^[a-zA-Z0-9/.+]+$/);
