import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regex for validating passwords, which must meet the following conditions:
 * - Contains at least one lowercase letter.
 * - Contains at least one uppercase letter.
 * - Contains at least one number.
 * - Contains at least one of `!`, `@`, `#`, `$`, `%`, `^`, `&`, and/or `*`.
 * - Is at least 6 characters long, and no more than 250 characters long.
 */
export const PASSWORD_VALIDATION_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,250}$/;

/**
 * Returns `true` if `value` is a valid password.
 * > See {@link PASSWORD_VALIDATION_REGEX} for validation requirements.
 */
export const isValidPassword = getValidatorFn(PASSWORD_VALIDATION_REGEX);
