import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` is a valid base64URL-encoded string.
 *
 * `Base64URL` is a variant of `Base64` that uses URL- and filename-safe characters.
 * It makes the following modifications to the base64 alphabet:
 *
 * - Plus signs (`+`) are replaced with minus signs (`-`)
 * - Forward slashes (`/`) are replaced with underscores (`_`)
 * - Equal sign padding characters (`=`) are omitted
 * - No line breaks are used
 * - Must be at least 2 characters long
 *
 * @see https://base64.guru/standards/base64url
 *
 * **Pattern Notes:**
 * - The hyphen literal is at the end of the group to avoid unintentional range creation.
 */
export const isValidBase64URL = getRegexValidatorFn(/^[a-zA-Z0-9_-]{2,}$/);
