import { isString } from "@nerdware/ts-type-safety-utils";

/**
 * A function which returns `true` if the provided `input` is valid.
 */
export type ValidatorFn = (value?: unknown) => value is string;

/**
 * Returns a {@link ValidatorFn} which takes an unknown input, and returns
 * `true` if the input is a string that matches the provided regex pattern(s).
 */
export const getValidatorFn = (
  /** One or more `RegExp` patterns. */
  regexArg: RegExp | Array<RegExp>,
  /** A fn which returns `true` if `value` is of the expected type (default: {@link isString}). */
  isExpectedType: (value?: unknown) => boolean = isString
): ValidatorFn => {
  return Array.isArray(regexArg)
    ? (value?: unknown): value is string => {
        return isExpectedType(value) && regexArg.every((regex) => regex.test(value as string));
      }
    : (value?: unknown): value is string => {
        return isExpectedType(value) && regexArg.test(value as string);
      };
};
