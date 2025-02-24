import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regex for validating URLs.
 * - Matches any URL that starts with a valid protocol comprised of 2-17 ASCII alphabetic characters.
 * - The URL can be absolute or relative.
 */
export const URL_VALIDATION_REGEX =
  /^(([a-zA-Z]{2,17}:\/\/)?[-a-zA-Z0-9@:%._+~#=]{2,256}(\.[a-zA-Z]{2,6})?(:[0-9]+)?\b([-a-zA-Z0-9@:%_+.~#?&//=]{0,1700})?)$/;

/**
 * Returns `true` if `value` is a valid absolute or relative URL.
 *
 * > The regex pattern used in this function is _protocol agnostic_ and will match any URL
 * > that starts with a valid protocol comprised of 2-17 ASCII alphabetic characters.
 */
export const isValidURL = getValidatorFn(URL_VALIDATION_REGEX);

/**
 * Regex for validating absolute http/https URLs.
 */
export const HTTP_URL_VALIDATION_REGEX =
  /^(http(s)?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}(\.[a-zA-Z]{2,6})?(:[0-9]+)?\b([-a-zA-Z0-9@:%_+.~#?&//=]{0,1700})?)$/;

/**
 * Returns `true` if `value` is a valid absolute http/https URL.
 */
export const isValidHttpURL = getValidatorFn(HTTP_URL_VALIDATION_REGEX);
