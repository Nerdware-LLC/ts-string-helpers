import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regex for validating street-address strings (line 1 or line 2).
 *
 * ### Pattern Notes
 *
 * - `(?!\s*$)`      — Prevents the string from being empty.
 * - `(?=.{5,100}$)` — Requires the string to be between 5 and 100 characters long.
 * - `(?=.*\d)`      — Requires the string to contain at least one digit.
 */
export const STREET_ADDRESS_VALIDATION_REGEX =
  /^(?!\s*$)(?=.{5,100}$)(?=.*\d)[\p{Script=Latin}\s\d'.:,#-]+$/iu;

/**
 * Returns `true` if `value` is a valid street address (line 1 or line 2).
 */
export const isValidStreetAddress = getValidatorFn(STREET_ADDRESS_VALIDATION_REGEX);
