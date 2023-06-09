# cp.text

This module provides support for loading, manipulating, and comparing unicode text data.
It works by storing characters with their Unicode 'codepoint` value. In practice, this means that every character is a 64-bit integer, so a `text` value will use substantially more memory than the equivalent encoded `string` value.

The advantages of `text` over `string` representations for Unicode are:
 * comparisons, equality checks, etc. actually work for Unicode text and are not encoding-dependent.
 * direct access to codepoint values.

The advantages of `string` representations for Unicode are:
 * compactness.
 * reading/writing to files via the standard `io` library.

## Strings and Unicode

LUA has limited built-in support for Unicode text. `string` values are "8-bit clean", which means it is an array of 8-bit characters. This is also how binary data from files is usually loaded, as 8-bit 'bytes'. Unicode characters can be up to 32-bits, so there are several standard ways to represent Unicode characters using 8-bit characters. Without going into detail, the most common encodings are called 'UTF-8' and 'UTF-16'. There are two variations of 'UTF-16', depending on the hardware architecture, known as 'big-endian' and 'little-endian'.

The built-in functions for `string`, such as `match`, `gsub` and even `len` will not work as expected when a string contains Unicode text. As such, this library fills some of the gaps for common operations when working with Unicode text.

## Examples

You can convert to and from `string` and `text` values like so:

```lua
local text = require("cp.text")

local simpleString		= "foobar"
local simpleText		= text(stringValue)
local utf8String		= "a丽𐐷"				-- contains non-ascii characters, defaults to UTF-8.
local unicodeText		= text "a丽𐐷"			-- contains non-ascii characters, converts from a UTF-8 string.
local utf8String		= tostring(unicodeText) -- `tostring` will default to UTF-8 encoding
local utf16leString		= unicodeText:encode(text.encoding.utf16le) -- or you can be more specific
```

Note that `text` values are not in any specific encoding, since they are stored as 64-bit integer `code-points` rather than 8-bit characers.

## Submodules
 * [cp.text.matcher](cp.text.matcher.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [encoding](#encoding)
* Functions - API calls offered directly by the extension
 * [is](#is)
* Constructors - API calls which return an object, typically one that offers API methods
 * [char](#char)
 * [fromCodepoints](#fromCodepoints)
 * [fromFile](#fromFile)
 * [fromString](#fromString)
* Methods - API calls which can only be made on an object returned by a constructor
 * [encode](#encode)
 * [find](#find)
 * [len](#len)
 * [match](#match)
 * [sub](#sub)

## API Documentation

### Constants

| [encoding](#encoding)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text.encoding`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The list of supported encoding formats.                                                                     |
| **Notes**                                   | <ul><li>The list of supported encoding formats:</li><li>  ** `utf8`		- UTF-8. The most common format on the web, backwards compatible with ANSI/ASCII.</li><li>  ** `utf16le`	- UTF-16 (little-endian). Commonly used in Windows and Mac text files.</li><li>  ** `utf16be`	- UTF-16 (big-endian). Alternate 16-bit format, common on Linux and PowerPC-based architectures.</li></ul>                |

### Functions

| [is](#is)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text.is(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided value is a `text` instance.                                                                     |
| **Parameters**                              | <ul><li>`value`	- The value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the value is a `text` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [char](#char)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text.char(...) -> text`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns the list of one or more codepoint items into a text value, concatenating the results.                                                                     |
| **Parameters**                              | <ul><li>`...`	- The list of codepoint integers.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.text` value for the list of codepoint values.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [fromCodepoints](#fromCodepoints)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text.fromCodepoints(codepoints[, i[, j]]) -> text`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new `text` instance representing the specified array of codepoints. Since `i` and `j` default to the first and last indexes of the array, simply passing in the array will convert all codepoints in that array.                                                                     |
| **Parameters**                              | <ul><li>`codepoints`	- The array of codepoint integers.</li><li>`i`			- The starting index to read from codepoints. Defaults to `1`.</li><li>`j`			- The ending index to read from codepoints. Default to `-1`.</li></ul> |
| **Returns**                                 | <ul><li>A new `text` instance.</li></ul>          |
| **Notes**                                   | <ul><li>You can use a *negative* value for `i` and `j`. If so, it will count back from then end of the `codepoints` array.</li><li>If the codepoint array begins with a Byte-Order Marker (BOM), the BOM is skipped in the resulting text.</li></ul>                |

| [fromFile](#fromFile)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text.fromFile(path[, encoding]) -> text`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new `text` instance representing the text loaded from the specified path. If no encoding is specified, it will attempt to determine the encoding from a leading Byte-Order Marker (BOM). If none is present, it defaults to UTF-8.                                                                     |
| **Parameters**                              | <ul><li>`value`		- The value to turn into a unicode text instance.</li><li>`encoding`	- One of the falues from `text.encoding`: `utf8`, `utf16le`, or `utf16be`. Defaults to `utf8`.</li></ul> |
| **Returns**                                 | <ul><li>A new `text` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [fromString](#fromString)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text.fromString(value[, encoding]) -> text`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new `text` instance representing the string value of the specified value. If no encoding is specified, it will attempt to determine the encoding from a leading Byte-Order Marker (BOM). If none is present, it defaults to UTF-8.                                                                     |
| **Parameters**                              | <ul><li>`value`		- The value to turn into a unicode text instance.</li><li>`encoding`	- One of the falues from `text.encoding`: `utf8`, `utf16le`, or `utf16be`. Defaults to `utf8`.</li></ul> |
| **Returns**                                 | <ul><li>A new `text` instance.</li></ul>          |
| **Notes**                                   | <ul><li>Calling `text(value)` is the same as calling `text.fromString(value, text.encoding.utf8)`, so simple text can be initialized via `local x = text "foo"` when the `.lua` file's encoding is UTF-8.</li></ul>                |

### Methods

| [encode](#encode)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text:encode([encoding]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the text as an encoded `string` value.                                                                     |
| **Parameters**                              | <ul><li>`encoding` - The encoding to use when converting. Defaults to `cp.text.encoding.utf8`.</li></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul></ul>                |

| [find](#find)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text:find(pattern [, init [, plain]])`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Looks for the first match of pattern in the string `value`. If it finds a match, then find returns the indices of `value` where this occurrence starts and ends; otherwise, it returns `nil`. A third, optional numerical argument `init` specifies where to start the search; its default value is `1` and can be negative. A value of `true` as a fourth, optional argument plain turns off the pattern matching facilities, so the function does a plain "find substring" operation, with no characters in pattern being considered "magic". Note that if plain is given, then `init` must be given as well.                                                                     |
| **Parameters**                              | <ul><li>`pattern`		- The pattern to find.</li><li>`init`			- The index to start matching from. Defaults to `1`.</li><li>`plain`			- If `true`, the pattern is treated as plain text.</li></ul> |
| **Returns**                                 | <ul><li>the start index, the end index, followed by any captures</li></ul>          |
| **Notes**                                   | <ul><li>If the pattern has captures, then in a successful match the captured values are also returned, after the two indices.</li></ul>                |

| [len](#len)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text:len() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the number of codepoints in the text.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of codepoints.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [match](#match)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text:match(pattern[, start]) -> ...`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Looks for the first match of the `pattern` in the text value. If it finds one, then match returns the captures from the pattern; otherwise it returns `nil`. If pattern specifies no captures, then the whole match is returned. A third, optional numerical argument `init` specifies where to start the search; its default value is `1` and can be negative.                                                                     |
| **Parameters**                              | <ul><li>`pattern`	- The text pattern to process.</li><li>`start`		- If specified, indicates the starting position to process from. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>The capture results, the whole match, or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [sub](#sub)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text:sub(i [, j]) -> cp.text`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the substring of this text that starts at `i` and continues until `j`; `i` and `j` can be negative.                                                                     |
| **Parameters**                              | <ul><li>i - See above</li><li>j - See above</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If `j` is absent, then it is assumed to be equal to `-1` (which is the same as the string length).</li><li>In particular, the call `cp.text:sub(1,j)` returns a prefix of `s` with length `j`, and `cp.text:sub(-i)` (for a positive `i`) returns a suffix of s with length i.</li></ul>                |

