# hs.base64

Base64 encoding and decoding

Portions sourced from (https://gist.github.com/shpakovski/1902994).

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [decode](#decode)
 * [encode](#encode)


---

## API Documentation

#### Functions


### [decode](#decode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.base64.decode(str) -> val`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Decodes a given base64 string                                                                     |
| **Parameters**                              | <ul><li>str - A base64 encoded string</li></ul> |
| **Returns**                                 | <ul><li>A string containing the decoded data</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/base64/base64.lua line 40](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/base64/base64.lua#L40) |

---


### [encode](#encode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.base64.encode(val[,width]) -> str`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Encodes a given string to base64                                                                     |
| **Parameters**                              | <ul><li>val - A string to encode as base64</li><li>width - Optional line width to split the string into (usually 64 or 76)</li></ul> |
| **Returns**                                 | <ul><li>A string containing the base64 representation of the input string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/base64/base64.lua line 14](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/base64/base64.lua#L14) |

---

