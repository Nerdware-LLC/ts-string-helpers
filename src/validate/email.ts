import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regex used to test if a value conforms to the official RFC-5322 email address format.
 *
 * ### Limitations
 * - This regex pattern does NOT check the entire length of the string.
 * - This regex pattern does NOT check for banned characters like zero-width spaces.
 * > To address these limitations, use {@link EMAIL_VALIDATION_REGEX}.
 */
export const EMAIL_RFC_5322_VALIDATION_REGEX =
  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([!]#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;

/**
 * Regex used to validate email address strings. This pattern enforces the following rules:
 *
 * - The value does not begin with a period, and does not contain 2+ consecutive periods.
 * - The number of characters before the `@` is between 1-64.
 * - The number of characters after the `@` is between 1-255.
 * - The substring before the `@` only contains alphanumeric characters or . _ % + -
 * - The substring after the `@` only contains alphanumeric characters or . _
 * - The TLD only contains letters, and is between 2-64 characters in length.
 *
 * ### Limitations
 * - This regex pattern does NOT enforce the official RFC-5322 email address format.
 * > To address these limitations, use {@link EMAIL_RFC_5322_VALIDATION_REGEX}.
 */
export const EMAIL_VALIDATION_REGEX =
  /^(?!.*\.{2,})(?!^\.)[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,64}$/;

/**
 * Returns `true` if `value` is a valid email address.
 */
export const isValidEmail = getValidatorFn([
  EMAIL_RFC_5322_VALIDATION_REGEX,
  EMAIL_VALIDATION_REGEX,
]);
