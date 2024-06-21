import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` is a valid JWT.
 *
 * JWTs contain three [Base64URL-encoded](https://base64.guru/standards/base64url) sections
 * separated by periods (`.`).
 *
 * **Pattern Notes:**
 * - The minimum length is 2 characters per section.
 * - Hyphen literals are at the end of their groups to avoid unintentional range creation.
 */
export const isValidJWT = getRegexValidatorFn(/^([a-zA-Z0-9_-]{2,}\.){2}[a-zA-Z0-9_-]{2,}$/);
