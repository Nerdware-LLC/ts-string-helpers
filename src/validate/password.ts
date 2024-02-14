import { getRegexValidatorFn } from "./_helpers";

/**
 * Returns `true` if `value` is a valid password, which must meet the following conditions:
 * - Contains at least one lowercase letter.
 * - Contains at least one uppercase letter.
 * - Contains at least one number.
 * - Contains at least one of `!`, `@`, `#`, `$`, `%`, `^`, `&`, and/or `*`.
 * - Is at least 6 characters long, and no more than 250 characters long.
 */
export const isValidPassword = getRegexValidatorFn(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,250}$/
);
