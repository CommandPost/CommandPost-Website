# cp.ui.OldRow

Represents an `AXRow` `axuielement`.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [OldRow](#oldrow)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
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

#### Constructors


### [OldRow](#oldrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow(parent, uiFinder) -> cp.ui.OldRow`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Row` instance with the specified `parent` and `uiFinder`.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent `Element`.</li><li>uiFinder - a `function` or `cp.prop` containing the `axuielement`</li></ul> |
| **Returns**                                 | <ul><li>The new `Row`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldRow.lua line 21](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldRow.lua#L21){target="_blank"} |

---

#### Fields


### [disclosing](#disclosing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow.disclosing <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the `Row` is disclosing other `Rows`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldRow.lua line 32](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldRow.lua#L32){target="_blank"} |

---


### [disclosureLevel](#disclosurelevel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow.disclosureLevel <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The depth of disclosure. `0` is the top level.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldRow.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldRow.lua#L39){target="_blank"} |

---


### [index](#index)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow.index <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The numeric index of this row in the overall container, with `0` being the first item.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldRow.lua line 87](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldRow.lua#L87){target="_blank"} |

---


### [selected](#selected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow.selected <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the row is currently selected. May be set.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldRow.lua line 80](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldRow.lua#L80){target="_blank"} |

---

#### Methods


### [disclosedByRow](#disclosedbyrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow:disclosedByRow() -> cp.ui.OldRow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The `Row` which is disclosing this `Row`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `cp.ui.OldRow` object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldRow.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldRow.lua#L46){target="_blank"} |

---


### [disclosedRows](#disclosedrows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow:disclosedRows() -> table of cp.ui.OldRow or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | If available, returns a table of [Row](cp.ui.OldRow.md)s that are disclosed by this `Row`. If this row is currently unavailable, `nil` is returned.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `table` of Rows, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldRow.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldRow.lua#L61){target="_blank"} |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow.matches(element) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the element is a `Row`.                                                                     |
| **Parameters**                              | <ul><li>element - the `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldRow.lua line 10](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldRow.lua#L10){target="_blank"} |

---

