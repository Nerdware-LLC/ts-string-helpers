import { getRegexValidatorFn } from "./_helpers";

/**
 * Returns `true` if `value` is a valid absolute HTTP/S URL.
 */
export const isValidURL = getRegexValidatorFn(
  /^(http(s)?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}(\.[a-zA-Z]{2,6})?(:[0-9]+)?\b([-a-zA-Z0-9@:%_+.~#?&//=]{0,1700})?)$/
);
