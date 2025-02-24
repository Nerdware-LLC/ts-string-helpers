<div align="center">

   <a href="https://www.youtube.com/@nerdware-io">
      <img src="https://github.com/Nerdware-LLC/.github/blob/main/profile/nerdware_logo.png" height="120" alt="Nerdware logo" />
   </a>

   <h1>Nerdware TypeScript String Helpers</h1>

**TypeScript utils to sanitize and validate strings in any environment 🎉**<br>ESM ✅ CommonJS ✅ NodeJS ✅ browsers ✅

[![npm package][npm-badge]](https://www.npmjs.com/package/@nerdware/ts-string-helpers "View this project on npm")
[![Test Workflow][gh-test-badge]](.github/workflows/test.yaml "View Test Workflow file")
[![CodeCov][codecov-badge]](https://codecov.io/gh/Nerdware-LLC/ts-string-helpers "View CodeCov report")
[![pre-commit][pre-commit-badge]](https://pre-commit.com "pre-commit.com")
[![semantic-release][semantic-badge]](https://github.com/semantic-release/semantic-release "github.com: semantic-release")
[![License: MIT][license-badge]](/LICENSE "View License")

<!--   BADGE LINKS   -->

[npm-badge]: https://img.shields.io/npm/v/@nerdware/ts-string-helpers?logo=npm&label=npm%40latest
[gh-test-badge]: https://github.com/Nerdware-LLC/ts-string-helpers/actions/workflows/test.yaml/badge.svg?branch=main
[codecov-badge]: https://codecov.io/gh/Nerdware-LLC/ts-string-helpers/graph/badge.svg?token=Z2CY5FL04P
[pre-commit-badge]: https://img.shields.io/badge/pre--commit-F8B424.svg?logo=pre-commit&logoColor=F8B424&labelColor=gray
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-E10079.svg
[license-badge]: https://img.shields.io/badge/License-MIT-000080.svg

</div>

- [🚀 Getting Started](#-getting-started)
  - [📦 Installation](#-installation)
  - [🛠️ Usage](#️-usage)
- [⚙️ API](#️-api)
  - [Sanitizers](#sanitizers)
  - [Validators](#validators)
- [🌎 Unicode Support](#-unicode-support)
  - [Supported Unicode Character Classes](#supported-unicode-character-classes)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [💬 Contact](#-contact)

## 🚀 Getting Started

This package provides a lightweight set of TypeScript utils to `sanitize` and `validate` strings in any environment.

The `sanitize` functions use reverse-regex patterns to strip unwanted characters from strings — _even pesky zero-width control characters_ — leaving only the characters you want. This is useful for sanitizing user input and other untrusted data.

For each `sanitize` function, there's a corresponding `validate` function to ensure strings match a specific format.

### 📦 Installation

Install the package using your package manager of choice:

**npm**:

```bash
npm install @nerdware/ts-string-helpers
```

**yarn**:

```bash
yarn add @nerdware/ts-string-helpers
```

### 🛠️ Usage

Here's a simple example of how to use the `sanitizeEmail` and `isValidEmail` functions to sanitize and validate an email address before using it in a NodeJS Express route:

```typescript
import { sanitizeEmail, isValidEmail } from "@nerdware/ts-string-helpers";
import express from "express";
import { UserModel } from "./models/my-user-model";

// or const { sanitizeEmail } = require("@nerdware/ts-string-helpers");

const app = express();

app.use(express.json());

app.post("/register", (req, res, next) => {
  // Sanitize the unknown `email` input before using it!
  const userEmail = sanitizeEmail(req.body.email);

  // Validate the sanitized email
  if (!isValidEmail(userEmail)) {
    return res.status(400).send("Invalid email address");
  }

  // Now you can safely use the sanitized value throughout the rest of your stack!🎉
  const newUser = UserModel.create({ email: userEmail });

  res.status(201).json(newUser);
});
```

## ⚙️ API

> [!TIP]
>
> - In the tables below, click on a function to view the exact regex pattern it uses.
> - Additional information is also available in each function's JSDoc comments.
> - Functions with the 🌎 globe emoji in their description use _**limited**_ [Unicode character classes][unicode-regexp-flag] rather than ASCII-character ranges for greater i18n support (for more info, see [Unicode Support](#-unicode-support)).
> - All functions with the _Alpha_ infix (e.g., `sanitizeAlphabetic`) only permit [ASCII characters](https://www.asciitable.com/) and are case-insensitive.

### Sanitizers

| Function                                                                   | Description                                                                                             |
| :------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| [`sanitizeAlphabetic`](src/sanitize/alphabetic.ts)                         | Removes non-alphabetic characters                                                                       |
| [`sanitizeAlphabeticWithSpaces`](src/sanitize/alphabeticWithSpaces.ts)     | Removes non-alphabetic/space characters                                                                 |
| [`sanitizeAlphanumeric`](src/sanitize/alphanumeric.ts)                     | Removes non-alphanumeric characters                                                                     |
| [`sanitizeAlphanumericWithSpaces`](src/sanitize/alphanumericWithSpaces.ts) | Removes non-alphanumeric/space characters                                                               |
| [`sanitizeBase64`](src/sanitize/base64.ts)                                 | Removes invalid base64 characters                                                                       |
| [`sanitizeBase64URL`](src/sanitize/base64URL.ts)                           | Removes invalid base64URL characters                                                                    |
| [`sanitizeEmail`](src/sanitize/email.ts)                                   | Removes invalid email characters (see [RFC 5322][rfc-5322])                                             |
| [`sanitizeHandle`](src/sanitize/handle.ts)                                 | Removes invalid social-handle characters                                                                |
| [`sanitizeHex`](src/sanitize/hexadecimal.ts)                               | Removes non-hexadecimal characters                                                                      |
| [`sanitizeID`](src/sanitize/id.ts)                                         | Removes non-alphanumeric characters which are not `_`, `-`, or `#`                                      |
| [`sanitizeJsonString`](src/sanitize/jsonString.ts)                         | Removes characters which are not valid in stringified JSON                                              |
| [`sanitizeJWT`](src/sanitize/jwt.ts)                                       | Removes characters which are not valid in a JSON Web Token                                              |
| [`sanitizeName`](src/sanitize/name.ts)                                     | Removes characters which are generally not valid in a name ([🌎i18n-friendly](#-unicode-support))       |
| [`sanitizeNumeric`](src/sanitize/numeric.ts)                               | Removes non-numeric characters                                                                          |
| [`sanitizePassword`](src/sanitize/password.ts)                             | Removes non-alphanumeric characters which are not `!`, `@`, `#`, `$`, `%`, `^`, `&`, or `*`             |
| [`sanitizePhone`](src/sanitize/phone.ts)                                   | Removes characters which are not valid in a phone number                                                |
| [`sanitizeText`](src/sanitize/text.ts)                                     | Removes characters which are generally not used in text/comments ([🌎i18n-friendly](#-unicode-support)) |
| [`sanitizeURL`](src/sanitize/url.ts)                                       | Removes invalid URL characters                                                                          |

[rfc-5322]: https://datatracker.ietf.org/doc/html/rfc5322

### Validators

| Function                                                                  | Description                                                                                                      |
| :------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------- |
| [`isValidAlphabetic`](src/validate/alphabetic.ts)                         | Returns `true` if `value` only contains alphabetic characters                                                    |
| [`isValidAlphabeticWithSpaces`](src/validate/alphabeticWithSpaces.ts)     | Returns `true` if `value` only contains alphabetic characters and/or spaces                                      |
| [`isValidAlphanumeric`](src/validate/alphanumeric.ts)                     | Returns `true` if `value` only contains alphanumeric characters                                                  |
| [`isValidAlphanumericWithSpaces`](src/validate/alphanumericWithSpaces.ts) | Returns `true` if `value` only contains alphanumeric characters and/or spaces                                    |
| [`isValidBase64`](src/validate/base64.ts)                                 | Returns `true` if `value` is a valid base64 string                                                               |
| [`isValidBase64URL`](src/validate/base64URL.ts)                           | Returns `true` if `value` is a valid base64URL string                                                            |
| [`isValidCurrency`](src/validate/currency.ts)                             | Returns `true` if `value` is a valid USD currency-formatted string                                               |
| [`isValidEmail`](src/validate/email.ts)                                   | Returns `true` if `value` is a valid email address (see [RFC 5322][rfc-5322])                                    |
| [`isValidHandle`](src/validate/handle.ts)                                 | Returns `true` if `value` is a valid social account handle (e.g., `@foo_user`)                                   |
| [`isValidHex`](src/validate/hexadecimal.ts)                               | Returns `true` if `value` only contains hexadecimal characters                                                   |
| [`isValidID`](src/validate/id.ts)                                         | Returns `true` if `value` only contains alphanumeric characters, `_`, `-`, or `#`                                |
| [`isValidISO8601Timestamp`](src/validate/iso8601Timestamp.ts)             | Returns `true` if `value` is a valid ISO-8601 timestamp                                                          |
| [`isValidJsonString`](src/validate/jsonString.ts)                         | Returns `true` is `value` only contains valid JSON characters                                                    |
| [`isValidJWT`](src/validate/token.ts)                                     | Returns `true` if `value` only contains valid JSON Web Token characters                                          |
| [`isValidName`](src/validate/name.ts)                                     | Returns `true` if `value` only contains name-related characters ([🌎i18n-friendly](#-unicode-support))           |
| [`isValidNumeric`](src/validate/numeric.ts)                               | Returns `true` if `value` only contains numeric characters                                                       |
| [`isValidPassword`](src/validate/password.ts)                             | Returns `true` if `value` is a valid password (see jsdoc for details)                                            |
| [`isValidPhone`](src/validate/phone.ts)                                   | Returns `true` if `value` is a valid US phone number                                                             |
| [`isValidText`](src/validate/text.ts)                                     | Returns `true` if `value` does not contain potentially harmful characters ([🌎i18n-friendly](#-unicode-support)) |
| [`isValidURL`](src/validate/url.ts)                                       | Returns `true` if `value` is a valid absolute or relative URL (protocol agnostic)                                |
| [`isValidHttpURL`](src/validate/url.ts)                                   | Returns `true` if `value` is a valid absolute HTTP/S URL                                                         |

## 🌎 Unicode Support

To offer greater i18n support, functions denoted with a 🌎 globe emoji implement _**limited**_ [Unicode character classes][unicode-regexp-flag] to provide greater flexibility than ASCII alternatives (e.g., `\p{Script=Latin}` instead of `[a-zA-Z]`). Over time, efforts will be made to expand this library's i18n support wherever it's possible to do so without compromising security.

> [!IMPORTANT]
> Broadly permissive Unicode character classes like `\p{Letter}` will never be used by any utilities in this library due to their potential [security implications](https://owasp.org/www-community/attacks/Unicode_Encoding) (right-to-left override attacks, homoglyph attacks, etc.).

[unicode-regexp-flag]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[unicode-latin-chars]: https://en.wikipedia.org/w/index.php?title=Latin_script_in_Unicode&oldid=1210023145#Table_of_characters

### Supported Unicode Character Classes

| Unicode Character Class | Reference of Included Characters                       |
| :---------------------- | :----------------------------------------------------- |
| `\p{Script=Latin}`      | [Unicode Latin Script Characters][unicode-latin-chars] |

## 🤝 Contributing

Pull requests are welcome! Before you begin, please check existing [GitHub Issues](https://github.com/Nerdware-LLC/ts-string-helpers/issues) and [Pull Requests](https://github.com/Nerdware-LLC/ts-string-helpers/pulls) to see if your idea is already in the pipeline. If not, [here's a guide on how to contribute to this project](./CONTRIBUTING.md). Thank you!

## 📝 License

All files, scripts, and source code contained herein are open-source software licensed under an [MIT License](/LICENSE).

See [LICENSE](/LICENSE) for more information.

<div align="center">

## 💬 Contact

Trevor Anderson — [Trevor@Nerdware.cloud](mailto:trevor@nerdware.cloud) — [@trevor-anderson](https://github.com/trevor-anderson)

[<img src="https://github.com/trevor-anderson/trevor-anderson/blob/main/assets/github_logo_white.svg" height="40" alt="Check out Nerdware on GitHub" />](https://github.com/Nerdware-LLC)
&emsp;
[<img src="https://github.com/trevor-anderson/trevor-anderson/blob/main/assets/YouTube_icon_circle.svg" height="40" alt="Check out Nerdware on YouTube" />](https://www.youtube.com/@nerdware-io)
&emsp;
[<img src="https://github.com/trevor-anderson/trevor-anderson/blob/main/assets/LinkedIn_icon_circle.svg" height="40" alt="Trevor Anderson's LinkedIn" />](https://www.linkedin.com/in/meet-trevor-anderson/)
&emsp;
[<img src="https://github.com/trevor-anderson/trevor-anderson/blob/main/assets/email_icon_circle.svg" height="40" alt="Email Trevor Anderson" />](mailto:trevor@nerdware.cloud)

[**_Dare Mighty Things._**](https://www.youtube.com/watch?v=GO5FwsblpT8)

</div>
