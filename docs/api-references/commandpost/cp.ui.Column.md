# cp.ui.Column

Represents a Column in a Table.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [index](#index)
 * [selected](#selected)
* Methods - API calls which can only be made on an object returned by a constructor
 * [rows](#rows)
 * [visibleRows](#visiblerows)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Column.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `axuielement` is a `Column`.                                                                     |
| **Parameters**                              | <ul><li>element - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is a Column.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [index](#index)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Column.index <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The numeric index of this column in the overall container, with `0` being the first item.                                                                     |

---

### [selected](#selected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Column.selected <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the column is currently selected. May be set.                                                                     |

---
### Methods


### [rows](#rows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Column:rows() -> table of cp.ui.OldRow or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` of [Row](cp.ui.OldRow.md)s contained in the Column.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `table`, or `nil` if the column's UI is not available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [visibleRows](#visiblerows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Column:visibleRows() -> table of cp.ui.OldRows or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` of [Row](cp.ui.OldRow.md)s which are currently visible on screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `table`, or `nil` if the column's UI is not available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
