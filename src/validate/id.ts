import { getRegexValidatorFn } from "./_helpers";

/**
 * Returns `true` if `value` only contains alphanumeric chars, `_`, `-`, or `#`.
 */
export const isValidID = getRegexValidatorFn(/^[a-zA-Z0-9-_#]{6,250}$/);
