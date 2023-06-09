# cp.ui.OldRow

Represents an `AXRow` `axuielement`.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [OldRow](#OldRow)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [disclosing](#disclosing)
 * [disclosureLevel](#disclosureLevel)
 * [index](#index)
 * [selected](#selected)
* Methods - API calls which can only be made on an object returned by a constructor
 * [disclosedByRow](#disclosedByRow)
 * [disclosedRows](#disclosedRows)
 * [matches](#matches)

## API Documentation

### Constructors


### [OldRow](#OldRow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow(parent, uiFinder) -> cp.ui.OldRow`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Row` instance with the specified `parent` and `uiFinder`.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent `Element`.</li><li>uiFinder - a `function` or `cp.prop` containing the `axuielement`</li></ul> |
| **Returns**                                 | <ul><li>The new `Row`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [disclosing](#disclosing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow.disclosing <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the `Row` is disclosing other `Rows`.                                                                     |

---

### [disclosureLevel](#disclosureLevel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow.disclosureLevel <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The depth of disclosure. `0` is the top level.                                                                     |

---

### [index](#index)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow.index <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The numeric index of this row in the overall container, with `0` being the first item.                                                                     |

---

### [selected](#selected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow.selected <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the row is currently selected. May be set.                                                                     |

---
### Methods


### [disclosedByRow](#disclosedByRow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow:disclosedByRow() -> cp.ui.OldRow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The `Row` which is disclosing this `Row`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `cp.ui.OldRow` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [disclosedRows](#disclosedRows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow:disclosedRows() -> table of cp.ui.OldRow or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | If available, returns a table of [Row](cp.ui.OldRow.md)s that are disclosed by this `Row`. If this row is currently unavailable, `nil` is returned.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `table` of Rows, or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldRow.matches(element) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the element is a `Row`.                                                                     |
| **Parameters**                              | <ul><li>element - the `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
