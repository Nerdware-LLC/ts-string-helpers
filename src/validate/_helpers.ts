/**
 * Returns a function which takes an unknown input, and returns `true` if the input
 * is a string which conforms to the provided `regex` pattern(s).
 *
 * Implementation note: the `RegExp.prototype.test()` method does not throw an error
 * if the input is not a string, so it's unnecessary to check the input type, hence
 * the `as string` type casts.
 *
 * @internal
 */
export const getRegexValidatorFn = (regexArg: RegExp | Array<RegExp>) => {
  return Array.isArray(regexArg)
    ? (value?: unknown): value is string => regexArg.every((regex) => regex.test(value as string))
    : (value?: unknown): value is string => regexArg.test(value as string);
};
