# cp.ui.axutils.match

Contains common `hs.axuielement` matching functions.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [emptyList](#emptylist)
 * [exactly](#exactly)
 * [isAbove](#isabove)
 * [isBelow](#isbelow)
 * [isLeftOf](#isleftof)
 * [isRightOf](#isrightof)
 * [role](#role)


---

## API Documentation

#### Functions


### [emptyList](#emptylist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.emptyList(element) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return true if `element` is an empty list, or has no children.                                                                     |
| **Parameters**                              | <ul><li>element  - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is an empty list.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 825](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L825){target="_blank"} |

---


### [exactly](#exactly)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.exactly(value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return true if the `axuielement` matches the provided value exactly.                                                                     |
| **Parameters**                              | <ul><li>value  - The value to check for.</li></ul> |
| **Returns**                                 | <ul><li>`function(element) -> boolean` that checks the value matches exactly.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 810](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L810){target="_blank"} |

---


### [isAbove](#isabove)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.isAbove(value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return `true` if the `axuielement` is above the provided `value` `axuielement`.                                                                     |
| **Parameters**                              | <ul><li>value  - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>A function returning `true` if the element is above the provided `value`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 884](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L884){target="_blank"} |

---


### [isBelow](#isbelow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.isBelow(value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return `true` if the `axuielement` is below the provided `value` `axuielement`.                                                                     |
| **Parameters**                              | <ul><li>value  - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>A function returning `true` if the element is below the provided `value`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 861](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L861){target="_blank"} |

---


### [isLeftOf](#isleftof)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.isLeftOf(value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return `true` if the `axuielement` is left of the provided `value` `axuielement`.                                                                     |
| **Parameters**                              | <ul><li>value  - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>A function returning `true` if the element is left of the provided `value`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 907](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L907){target="_blank"} |

---


### [isRightOf](#isrightof)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.isRightOf(value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return `true` if the `axuielement` is right of the provided `value` `axuielement`.                                                                     |
| **Parameters**                              | <ul><li>value  - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>A function returning `true` if the element is right of the provided `value`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 930](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L930){target="_blank"} |

---


### [role](#role)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.role(roleName) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return true if the `axuielement` has the specified `AXRole`.                                                                     |
| **Parameters**                              | <ul><li>roleName  - The role to check for.</li></ul> |
| **Returns**                                 | <ul><li>`function(element) -> boolean` that checks the `AXRole` is `roleName`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 795](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L795){target="_blank"} |

---

