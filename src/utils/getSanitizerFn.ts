/**
 * A function which sanitizes the provided string input.
 */
export type SanitizerFn = (str: string) => string;

/**
 * Returns a {@link SanitizerFn} that removes undesired characters from a string
 * input using the provided `regex`.
 *
 * @param regex - The regular expression used to match the undesired characters.
 * @returns A function that takes a string input and returns the sanitized string.
 */
export const getSanitizerFn = (regex: RegExp): SanitizerFn => {
  return (str: string): string => str.replace(regex, "");
};
