# cp.ui.Row

Represents an `AXRow` `axuielement`.

---

## Submodules
 * [cp.ui.Row.Builder](cp.ui.Row.Builder.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [containing](#containing)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Row](#row)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [childrenUI](#childrenui)
 * [disclosing](#disclosing)
 * [disclosureLevel](#disclosurelevel)
 * [index](#index)
 * [selected](#selected)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [disclosedByRow](#disclosedbyrow)
 * [disclosedRows](#disclosedrows)
 * [matches](#matches)


---

## API Documentation

#### Functions


### [containing](#containing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Row:containing(...) -> cp.ui.Row.Builder`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `Builder` with the `Element` initializers for the items in the row.                                                                     |
| **Parameters**                              | <ul><li>... - A variable list of `Element` initializers, one for each item.</li></ul> |
| **Returns**                                 | <ul><li>The `Row.Builder`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Row.lua line 17](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Row.lua#L17) |

---

#### Constructors


### [Row](#row)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Row(parent, uiFinder, ...) -> cp.ui.Row`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Row` instance with the specified `parent` and `uiFinder`.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent `Element`.</li><li>uiFinder - a `function` or `cp.prop` containing the `axuielement`</li><li>... - a variable list of `Element` initializers, one for each item in the row.</li></ul> |
| **Returns**                                 | <ul><li>The new `Row`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Row.lua line 38](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Row.lua#L38) |

---

#### Fields


### [childrenUI](#childrenui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Row.childrenUI <cp.prop: table of axuielement>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains the list of `axuielement` children of the row.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Row.lua line 54](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Row.lua#L54) |

---


### [disclosing](#disclosing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Row.disclosing <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the `Row` is disclosing other `Rows`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Row.lua line 68](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Row.lua#L68) |

---


### [disclosureLevel](#disclosurelevel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Row.disclosureLevel <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The depth of disclosure. `0` is the top level.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Row.lua line 75](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Row.lua#L75) |

---


### [index](#index)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Row.index <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The numeric index of this row in the overall container, with `0` being the first item.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Row.lua line 123](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Row.lua#L123) |

---


### [selected](#selected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Row.selected <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the row is currently selected. May be set.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Row.lua line 116](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Row.lua#L116) |

---

#### Methods


### [disclosedByRow](#disclosedbyrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Row:disclosedByRow() -> cp.ui.Row`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The `Row` which is disclosing this `Row`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `cp.ui.Row` object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Row.lua line 82](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Row.lua#L82) |

---


### [disclosedRows](#disclosedrows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Row:disclosedRows() -> table of cp.ui.Row or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | If available, returns a table of [Row](cp.ui.Row.md)s that are disclosed by this `Row`. If this row is currently unavailable, `nil` is returned.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `table` of Rows, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Row.lua line 97](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Row.lua#L97) |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Row.matches(element) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the element is a `Row`.                                                                     |
| **Parameters**                              | <ul><li>element - the `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Row.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Row.lua#L27) |

---

