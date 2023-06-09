# cp.ui.List

Represents an `AXList` `axuielement` value.

Extends [Element](cp.ui.Element.md).

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [List](#list)
* Methods - API calls which can only be made on an object returned by a constructor
 * [items](#items)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.List.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided `axuielement` is an `AXList`.                                                                     |
| **Parameters**                              | <ul><li>element  - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is an `AXList`, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [List](#list)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.List(parent, uiFinder, itemAdaptorFn)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new List.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent table. Should have a `isShowing` property.</li><li>uiFinder - The `function` or `cp.prop` that provides the current `hs.axuielement`.</li><li>itemAdaptorFn - Item adapter function</li></ul> |
| **Returns**                                 | <ul><li>The new `List` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [items](#items)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.List:items() -> table of values`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the children as items, as adapted by the `itemAdaptor` in the constructor                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
