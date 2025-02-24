import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regex pattern for validating ISO-8601 datetime string timestamps.
 *
 * ### Limitations:
 * - The pattern does not validate the number of days in a month (e.g. a date
 *   of Feb-30 will not cause validation to fail).
 *
 * ### Pattern Notes:
 * - The pattern only allows years from 1000 to 9999.
 *
 * ### Relevant Links:
 * - https://www.iso.org/iso-8601-date-and-time-format.html
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 */
export const ISO_8601_TIMESTAMP_VALIDATION_REGEX =
  /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):[0-5]\d:[0-5]\d(\.\d{3})?(Z|[+-](0\d|1[0-2]):[0-5]\d)$/;

/**
 * Returns `true` if the provided `value` is a valid ISO-8601 datetime string timestamp.
 */
export const isValidISO8601Timestamp = getValidatorFn(ISO_8601_TIMESTAMP_VALIDATION_REGEX);
