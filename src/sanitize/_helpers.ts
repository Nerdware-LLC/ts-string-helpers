/**
 * A function which takes a string input, sanitizes it by removing undesired
 * characters using the function's associated regex pattern, and returns the
 * resultant sanitized string.
 *
 * Each sanitizer function has a `_regex` property where its associated
 * `RegExp` object is stored (e.g., `mySanitizerFn._regex`).
 */
export interface SanitizerFn<T extends RegExp> {
  (str: string): string;
  readonly _regex: T;
}

/**
 * Returns a sanitizer function that removes undesired characters from a string
 * input using the provided `regex`.
 *
 * @param regex - The regular expression used to match the undesired characters.
 * @returns A function that takes a string input and returns the sanitized string.
 */
export const getSanitizerFn = <T extends RegExp>(regex: T): SanitizerFn<T> => {
  return Object.assign(
    (str: string): string => str.replace(regex, ""), // prettier-ignore
    { _regex: regex }
  );
};

/** Regex pattern for testing `sanitize` functions which matches all zero-width characters and ASCII/unicode control characters. @internal */
// eslint-disable-next-line no-control-regex
export const ZERO_WIDTH_AND_CONTROL_CHAR_REGEX = /[\u200B-\u200D\uFEFF\u0000-\u001F\u007F-\u009F]/g;

/** Zero-width-space character (ASCII code 8203) for testing `sanitize` functions. @internal */
export const ZERO_WIDTH_SPACE = `\u200B`;

/** Null control character (ASCII code 0) for testing `sanitize` functions. @internal */
export const NULL_CONTROL_CHAR = `\u0000`;
