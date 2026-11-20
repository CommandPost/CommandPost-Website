# cp.web.text

Functions for managing text on the web.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [escapeXML](#escapexml)
 * [unescapeXML](#unescapexml)


---

## API Documentation

#### Functions


### [escapeXML](#escapexml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.text.escapeXML(s) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Escapes a string                                                                     |
| **Parameters**                              | <ul><li>s - The string you want to escape</li></ul> |
| **Returns**                                 | <ul><li>The string, escaped for XML.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/web/text.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/web/text.lua#L42) |

---


### [unescapeXML](#unescapexml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.text.unescapeXML(s) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unescapes a string from XML encoding.                                                                     |
| **Parameters**                              | <ul><li>s - The string you want to unescape</li></ul> |
| **Returns**                                 | <ul><li>The string, unescaped.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/web/text.lua line 19](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/web/text.lua#L19) |

---

