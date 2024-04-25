import { getRegexValidatorFn } from "./_helpers.js";

/**
 * Returns `true` if `value` is a valid JWT.
 *
 * JWTs contain three [Base64URL-encoded][base64url] sections separated by periods (`.`).
 *
 * [base64url]: https://base64.guru/standards/base64url
 */
export const isValidJWT = getRegexValidatorFn(/^([a-zA-Z0-9_-]{2,}\.){2}[a-zA-Z0-9_-]{2,}$/);
// Note: hyphen literals are at the end of their groups to avoid range creation
