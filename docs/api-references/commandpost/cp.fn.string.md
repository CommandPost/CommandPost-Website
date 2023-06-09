# cp.fn.string

String-related functional programming helpers.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [isEmpty](#isempty)
 * [match](#match)


---

## API Documentation

#### Functions


### [isEmpty](#isempty)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.string.isEmpty(str) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the string is empty.                                                                     |
| **Parameters**                              | <ul><li>str - The string to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the string is empty, `false` otherwise.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/fn/string.lua line 7](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/string.lua#L7){target="_blank"} |

---


### [match](#match)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.string.match(pattern) -> function(str) -> ...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a function that matches the given pattern. Any groups in the pattern will be returned as multiple values.                                                                     |
| **Parameters**                              | <ul><li>pattern - The pattern to match.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a string and returns the matches.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/fn/string.lua line 20](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/string.lua#L20){target="_blank"} |

---

