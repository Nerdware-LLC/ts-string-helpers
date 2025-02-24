import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regex for validating UUIDs _**of any version**_.
 *
 * Regex source: https://github.com/uuidjs/uuid/blob/6dcb15b86357afdf29ae2dabf5b2a8afab83c2c0/src/regex.js
 */
export const UUID_VALIDATION_REGEX =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

/**
 * Returns `true` if `value` is a valid UUID _**of any version**_.
 */
export const isValidUUID = getValidatorFn(UUID_VALIDATION_REGEX);
