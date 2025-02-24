import { isString } from "@nerdware/ts-type-safety-utils";

/**
 * A function which returns `true` if the provided `input` is valid.
 */
export type ValidatorFn = (value?: unknown) => value is string;

/**
 * Returns a {@link ValidatorFn} which takes an unknown input, and returns
 * `true` if the input is a string that matches the provided regex pattern(s).
 */
export const getValidatorFn = (regexArg: RegExp | Array<RegExp>): ValidatorFn => {
  return Array.isArray(regexArg)
    ? (value?: unknown): value is string => {
        return isString(value) && regexArg.every((regex) => regex.test(value));
      }
    : (value?: unknown): value is string => {
        return isString(value) && regexArg.test(value);
      };
};
