# cp.pattern

Contains pattern matching utility functions.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [doesMatch](#doesmatch)


---

## API Documentation

### Functions


### [doesMatch](#doesmatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.pattern.doesMatch(value, searchString[, options]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided value matches the search string, given the provided options.                                                                     |
| **Parameters**                              | <ul><li>value         - The value to check.</li><li>searchString  - The string values to match.</li><li>options       - The table of options.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the value matches the search string</li></ul>          |
| **Notes**                                   | <ul><li>Supported options:</li><li>   caseSensitive - If `true`, the case in the search string must match the value.</li><li>   exact         - If `true`, the search string must match exactly somewhere within the value. If `false`, words separated by spaces can appear anywhere in the value.</li><li>   wholeWords    - If `true`, either the whole string (if `exact` is `true`) or each word (if `exact` is false) must match at word boundaries.</li></ul>                |

---
