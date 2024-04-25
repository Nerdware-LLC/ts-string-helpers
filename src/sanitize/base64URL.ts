import { getSanitizerFn } from "./_helpers.js";

/**
 * Removes all non-base64URL characters from `str`.
 *
 * `Base64URL` is a variant of `Base64` that uses URL- and filename-safe characters.
 * It makes the following modifications to the base64 alphabet:
 *
 * - Plus signs (`+`) are replaced with minus signs (`-`)
 * - Forward slashes (`/`) are replaced with underscores (`_`)
 * - Equal sign padding characters (`=`) are omitted
 * - No line breaks are used
 *
 * @see https://base64.guru/standards/base64url
 */
export const sanitizeBase64URL = getSanitizerFn(/[^a-zA-Z0-9_-]/g);
// Note: hyphen literal is at the end of the group to avoid range creation
