/**
 * Returns an "allow-list" `RegExp` that can used to sanitize strings by removing
 * all characters that are not in the `allowedCharacters` list.
 */
export const getAllowListSanitizationRegex = ({
  allowedCharacters,
  overrideRegexFlags: regexFlags = "g",
}: {
  /** A string or array of characters and/or character-classes to allow in the output. */
  allowedCharacters: string | Array<string>;
  /** Regex flags provided to the `RegExp` constructor. @default "g" */
  overrideRegexFlags?: string;
}): RegExp => {
  const allowedCharsStr =
    typeof allowedCharacters === "string" ? allowedCharacters : allowedCharacters.join("");

  return new RegExp(`[^${allowedCharsStr}]`, regexFlags);
};
