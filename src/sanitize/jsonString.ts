import { getSanitizerFn } from "../utils/getSanitizerFn.js";

/**
 * Removes non-JSON characters from `str`.
 *
 * **Pattern Notes:**
 * - The pattern works by testing for characters within the ASCII printable range. The
 *   permitted-character range begins with the single-horizontal-space character (`\x20`),
 *   which is ASCII code 32, and ends with `~` (tilde), which is ASCII code 126.
 * - `\x20` is the ASCII hex code for a single horizontal space.
 */
export const sanitizeJsonString = getSanitizerFn(/[^\x20-~]/g);
