# cp.ui.axutils.match

Contains common `hs.axuielement` matching functions.

## API Overview
* Functions - API calls offered directly by the extension
 * [emptyList](#emptyList)
 * [exactly](#exactly)
 * [isAbove](#isAbove)
 * [isBelow](#isBelow)
 * [isLeftOf](#isLeftOf)
 * [isRightOf](#isRightOf)
 * [role](#role)

## API Documentation

### Functions

| [emptyList](#emptyList)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.emptyList(element) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return true if `element` is an empty list, or has no children.                                                                     |
| **Parameters**                              | <ul><li>element  - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is an empty list.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [exactly](#exactly)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.exactly(value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return true if the `axuielement` matches the provided value exactly.                                                                     |
| **Parameters**                              | <ul><li>value  - The value to check for.</li></ul> |
| **Returns**                                 | <ul><li>`function(element) -> boolean` that checks the value matches exactly.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isAbove](#isAbove)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.isAbove(value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return `true` if the `axuielement` is above the provided `value` `axuielement`.                                                                     |
| **Parameters**                              | <ul><li>value  - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>A function returning `true` if the element is above the provided `value`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isBelow](#isBelow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.isBelow(value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return `true` if the `axuielement` is below the provided `value` `axuielement`.                                                                     |
| **Parameters**                              | <ul><li>value  - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>A function returning `true` if the element is below the provided `value`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isLeftOf](#isLeftOf)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.isLeftOf(value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return `true` if the `axuielement` is left of the provided `value` `axuielement`.                                                                     |
| **Parameters**                              | <ul><li>value  - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>A function returning `true` if the element is left of the provided `value`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isRightOf](#isRightOf)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.isRightOf(value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return `true` if the `axuielement` is right of the provided `value` `axuielement`.                                                                     |
| **Parameters**                              | <ul><li>value  - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>A function returning `true` if the element is right of the provided `value`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [role](#role)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.match.role(roleName) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `match` function that will return true if the `axuielement` has the specified `AXRole`.                                                                     |
| **Parameters**                              | <ul><li>roleName  - The role to check for.</li></ul> |
| **Returns**                                 | <ul><li>`function(element) -> boolean` that checks the `AXRole` is `roleName`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

