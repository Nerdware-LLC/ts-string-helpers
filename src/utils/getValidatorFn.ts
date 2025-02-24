/**
 * A function which returns `true` if the provided `input` is valid.
 */
export type ValidatorFn = (value?: unknown) => value is string;

/**
 * Returns a {@link ValidatorFn} which takes an unknown input, and returns `true`
 * if the input is a string that matches the provided regular expression(s).
 *
 * Implementation note: the `RegExp.prototype.test()` method does not throw an
 * error if the input is not a string, so it's unnecessary to check the input
 * type, hence the `as string` type casts.
 */
export const getValidatorFn = (regexArg: RegExp | Array<RegExp>): ValidatorFn => {
  return Array.isArray(regexArg)
    ? (value?: unknown): value is string => regexArg.every((regex) => regex.test(value as string))
    : (value?: unknown): value is string => regexArg.test(value as string);
};
