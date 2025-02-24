/** Regex pattern for testing `sanitize` functions which matches all zero-width characters and ASCII/unicode control characters. @internal */
// eslint-disable-next-line no-control-regex
export const ZERO_WIDTH_AND_CONTROL_CHAR_REGEX = /[\u200B-\u200D\uFEFF\u0000-\u001F\u007F-\u009F]/g;

/** Zero-width-space character (ASCII code 8203) for testing `sanitize` functions. @internal */
export const ZERO_WIDTH_SPACE = `\u200B`;

/** Null control character (ASCII code 0) for testing `sanitize` functions. @internal */
export const NULL_CONTROL_CHAR = `\u0000`;
