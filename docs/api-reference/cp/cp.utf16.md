# [docs](index.md) » cp.utf16
---

A pure-LUA implementation of UTF-16 decoding

## Submodules
 * [cp.utf16.be](cp.utf16.be.md)
 * [cp.utf16.le](cp.utf16.le.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [char](#char)
 * [codepoint](#codepoint)
 * [codes](#codes)
 * [offset](#offset)

## API Documentation

### Functions

| [char](#char)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.utf16.char(bigEndian, ...) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Receives zero or more integers, converts each one to its corresponding UTF-16 byte sequence and returns a string with the concatenation of all these sequences.                                                                     |
| **Parameters**                              | <ul><li>`bigEndian`	- If `true`, the output will list the 'big' bytes first</li><li>`...`		- The list of UCL codepoint integers to convert.</li></ul> |
| **Returns**                                 | <ul><li>All the codepoints converted to UTF-16, concatonated into a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [codepoint](#codepoint)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.utf16.codepoint(bigEndian, s [, i [, j]]) -> integer...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the codepoints (as integers) from all characters in `s` that start between byte position `i` and `j` (both included). The default for `i` is 1 and for `j` is `i`. It raises an error if it meets any invalid byte sequence.                                                                     |
| **Parameters**                              | <ul><li>`bigEndian`		- (optional) If set to `true`, the string is encoded in 'big-endian' format.</li><li>`s`				- The string</li><li>`i`				- The starting index. Defaults to `1`.</li><li>`j`				- The ending index. Defaults to `i`.</li></ul> |
| **Returns**                                 | <ul><li>a list of codepoint integers for all characters in the matching range.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [codes](#codes)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.utf16.codes(bigEndian, s) -> iterator`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns values so that the construction                                                                     |
| **Parameters**                              | <ul><li>`bigEndian`		- If `true`, the provided string is in 'big-endian' encoding.</li><li>`s`				- The string to iterate through.</li></ul> |
| **Returns**                                 | <ul><li>An iterator</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li>```lua</li><li>     for p, c in utf16.codes(s) do body end</li><li>```</li><li></li><li>will iterate over all characters in string `s`, with `p` being the position (in bytes) and `c` the code point of each character. It raises an error if it meets any invalid byte sequence.</li></ul>                |

| [offset](#offset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.utf16.offset (bigEndian, s, n [, i]) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the position (in bytes) where the encoding of the `n`-th character of `s` (counting from position `i`) starts. A negative `n` gets characters before position `i`. The default for `i` is 1 when `n` is non-negative and `#s + 1` otherwise, so that `utf8.offset(s, -n)` gets the offset of the `n`-th character from the end of the string. If the specified character is neither in the subject nor right after its end, the function returns nil.                                                                     |
| **Parameters**                              | <ul><li>`bigEndian`		- If `true`, the encoding is 'big-endian'. Defaults to `false`</li><li>`s`				- The string</li><li>`n`				- The character number to find.</li><li>`i`				- The initial position to start from.</li></ul> |
| **Returns**                                 | <ul><li>The index</li></ul>          |
| **Notes**                                   | <ul><li>As a special case, when `n` is 0 the function returns the start of the encoding of the character that contains the `i`-th byte of `s`.</li><li>This function assumes that `s` is a valid UTF-16 string</li></ul>                |

