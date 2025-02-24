/** Regex for testing `sanitize` fns that matches all zero-width chars and ASCII/unicode control chars. */
// eslint-disable-next-line no-control-regex
export const ZERO_WIDTH_AND_CONTROL_CHAR_REGEX = /[\u200B-\u200D\uFEFF\u0000-\u001F\u007F-\u009F]/g;

/** Zero-width-space character (ASCII code 8203) for testing `sanitize` functions. */
export const ZERO_WIDTH_SPACE = `\u200B`;

/** Null control character (ASCII code 0) for testing `sanitize` functions. */
export const NULL_CONTROL_CHAR = `\u0000`;
