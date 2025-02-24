import { getValidatorFn } from "../utils/getValidatorFn.js";

/**
 * Regex pattern for validating JSON Web Tokens (JWTs).
 *
 * **Pattern Notes:**
 * - JWTs contain three [Base64URL-encoded](https://base64.guru/standards/base64url)
 *   sections separated by periods (`.`).
 * - The minimum length is 2 characters per section.
 * - Hyphen literals are at the end of their groups to avoid unintentional range creation.
 */
export const JWT_VALIDATION_REGEX = /^([a-zA-Z0-9_-]{2,}\.){2}[a-zA-Z0-9_-]{2,}$/;

/**
 * Returns `true` if `value` is a valid JWT.
 */
export const isValidJWT = getValidatorFn(JWT_VALIDATION_REGEX);
