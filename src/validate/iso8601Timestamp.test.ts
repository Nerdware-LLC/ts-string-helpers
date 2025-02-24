import { isValidISO8601Timestamp } from "./iso8601Timestamp.js";

describe("isValidISO8601Timestamp", () => {
  // POSITIVE TEST CASES:
  test.each([
    "2023-10-01T12:00:00Z", //          basic timestamp without any fractional seconds or offsets
    "2023-12-15T14:30:45Z", //          basic timestamp without any fractional seconds or offsets
    "1999-01-01T00:00:00Z", //          a new year at midnight
    "2000-02-29T23:59:59+02:00", //     leap year
    "2023-10-01T12:00:00.000Z", //      milliseconds minimum
    "2023-10-01T12:00:00.999Z", //      milliseconds maximum
    "2023-10-01T12:00:00+01:00", //     positive offset
    "2021-09-30T17:45:15-07:00", //     negative offset
    "2024-03-01T08:15:00+12:00", //     maximum positive offset
    "1985-07-20T22:10:05.999-04:30", // combines fractional seconds with a non-standard half-hour negative offset
    "2025-11-11T04:05:09+00:00", //     uses an explicit UTC offset (instead of just Z)
    "1970-01-01T00:00:00.555Z", //      Unix epoch start date with fractional seconds
    "2009-04-05T16:45:30.000+05:30", // zero milliseconds with a positive half-hour offset
  ])(`returns true for valid ISO-8601 timestamp '%s'`, (input) => {
    expect(isValidISO8601Timestamp(input)).toBe(true);
  });

  // NEGATIVE TEST CASES:
  test.each([
    "2023-10-01", //                missing time
    "12:00:00", //                  missing date
    "2018-07-15T14:30Z", //         missing seconds
    "2023-06-10 10:20:30Z", //      missing T separator
    "2023-10-01T12:00:00", //       missing Z offset
    "0999-01-01T00:00:00Z", //      invalid year (leading zero)
    "2022-13-10T14:20:30Z", //      invalid month (13)
    "2023-10-01T25:00:00Z", //      invalid hour (25)
    "2023-10-01T12:60:00Z", //      invalid minute (60)
    "2023-10-01T12:00:60Z", //      invalid seconds (60)
    "2020-11-20T12:30:45.12Z", //   invalid milliseconds (not enough decimal places)
    "2020-11-20T12:30:45.1234Z", // invalid milliseconds (too many decimal places)
    "2015-03-10T10:15:20+13:00", // invalid offset (+13 hours, max is 12)
    "2015-03-10T10:15:20-13:00", // invalid offset (-13 hours, max is 12)
    "invalid-timestamp", //         invalid format
  ])("returns false for invalid ISO-8601 timestamp '%s'", (input) => {
    expect(isValidISO8601Timestamp(input)).toBe(false);
  });
});
