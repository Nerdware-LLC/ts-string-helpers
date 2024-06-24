/**
 * A validation function which takes an unknown input and returns `true` if the
 * input is a string which conforms to the function's associated regex pattern(s).
 *
 * Each validator function has a `_regex` property where its associated `RegExp`
 * object(s) are stored (e.g., `myValidatorFn._regex`). If a function uses just
 * one regex pattern, the `_regex` property is a single `RegExp` object — otherwise,
 * `_regex` is an array of `RegExp` objects.
 */
export interface ValidatorFn<T extends RegExp | Array<RegExp>> {
  (value?: unknown): value is string;
  readonly _regex: T;
}

/**
 * Returns a function which takes an unknown input, and returns `true` if the
 * input is a string which conforms to the provided `regexArg` pattern(s).
 *
 * Implementation note: the `RegExp.prototype.test()` method does not throw an
 * error if the input is not a string, so it's unnecessary to check the input
 * type, hence the `as string` type casts.
 */
export const getValidatorFn = <T extends RegExp | Array<RegExp>>(regexArg: T): ValidatorFn<T> => {
  return Object.assign(
    Array.isArray(regexArg)
      ? (value?: unknown): value is string => regexArg.every((regex) => regex.test(value as string))
      : (value?: unknown): value is string => regexArg.test(value as string),
    { _regex: regexArg }
  );
};
