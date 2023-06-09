# cp.utf16.le

A pure-LUA implementation of UTF-16 decoding with little-endian ordering.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [char](#char)
 * [codepoint](#codepoint)
 * [codes](#codes)
 * [len](#len)
 * [len](#len)
 * [offset](#offset)


---

## API Documentation

#### Functions


### [char](#char)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.utf16.le.char(...) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Receives zero or more integers, converts each one to its corresponding UTF-16 byte sequence and returns a string with the concatenation of all these sequences.                                                                     |
| **Parameters**                              | <ul><li>`...`		- The list of UCL codepoint integers to convert.</li></ul> |
| **Returns**                                 | <ul><li>All the codepoints converted to UTF-16, concatonated into a string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/utf16/le.lua line 10](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/utf16/le.lua#L10){target="_blank"} |

---


### [codepoint](#codepoint)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.utf16.le.codepoint(s [, i [, j]]) -> integer...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the codepoints (as integers) from all characters in `s` that start between byte position `i` and `j` (both included). The default for `i` is 1 and for `j` is `i`. It raises an error if it meets any invalid byte sequence.                                                                     |
| **Parameters**                              | <ul><li>`s`				- The string</li><li>`i`				- The starting index. Defaults to `1`.</li><li>`j`				- The ending index. Defaults to `i`.</li></ul> |
| **Returns**                                 | <ul><li>a list of codepoint integers for all characters in the matching range.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/utf16/le.lua line 21](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/utf16/le.lua#L21){target="_blank"} |

---


### [codes](#codes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.utf16.le.codes(s) -> iterator`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns values so that the construction                                                                     |
| **Parameters**                              | <ul><li>`s`				- The string to iterate through.</li></ul> |
| **Returns**                                 | <ul><li>An iterator</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li>```lua</li><li>     for p, c in utf16.codes(s) do body end</li><li>```</li><li></li><li>will iterate over all characters in string `s`, with `p` being the position (in bytes) and `c` the code point of each character. It raises an error if it meets any invalid byte sequence.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/utf16/le.lua line 34](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/utf16/le.lua#L34){target="_blank"} |

---


### [len](#len)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.utf16.len (bigEndian, s [, i [, j]]) -> number | boolean, number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the number of UTF-16 characters in string `s` that start between positions `i` and `j` (both inclusive). The default for `i` is 1 and for `j` is -1. If it finds any invalid byte sequence, returns a false value plus the position of the first invalid byte.                                                                     |
| **Parameters**                              | <ul><li>`bigEndian`		- If true, the string is 'big-endian'.</li><li>`s`				- The UTF-16 string</li><li>`i`				- The starting index. Defaults to `1`.</li><li>`j`				- The ending index. Defaults to `-1`.</li></ul> |
| **Returns**                                 | <ul><li>the length, or `false` and the first invalid byte index.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/utf16/init.lua line 186](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/utf16/init.lua#L186){target="_blank"} |

---


### [len](#len)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.utf16.le.len (s [, i [, j]]) -> number | boolean, number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the number of UTF-16 characters in string `s` that start between positions `i` and `j` (both inclusive). The default for `i` is 1 and for `j` is -1. If it finds any invalid byte sequence, returns a false value plus the position of the first invalid byte.                                                                     |
| **Parameters**                              | <ul><li>`s`				- The UTF-16 string</li><li>`i`				- The starting index. Defaults to `1`.</li><li>`j`				- The ending index. Defaults to `-1`.</li></ul> |
| **Returns**                                 | <ul><li>the length, or `false` and the first invalid byte index.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/utf16/le.lua line 53](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/utf16/le.lua#L53){target="_blank"} |

---


### [offset](#offset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.utf16.le.offset (s, n [, i]) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the position (in bytes) where the encoding of the `n`-th character of `s` (counting from position `i`) starts. A negative `n` gets characters before position `i`. The default for `i` is 1 when `n` is non-negative and `#s + 1` otherwise, so that `utf8.offset(s, -n)` gets the offset of the `n`-th character from the end of the string. If the specified character is neither in the subject nor right after its end, the function returns nil.                                                                     |
| **Parameters**                              | <ul><li>`s`				- The string</li><li>`n`				- The character number to find.</li><li>`i`				- The initial position to start from.</li></ul> |
| **Returns**                                 | <ul><li>The index</li></ul>          |
| **Notes**                                   | <ul><li>As a special case, when `n` is 0 the function returns the start of the encoding of the character that contains the `i`-th byte of `s`.</li><li>This function assumes that `s` is a valid UTF-16 string</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/utf16/le.lua line 66](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/utf16/le.lua#L66){target="_blank"} |

---

