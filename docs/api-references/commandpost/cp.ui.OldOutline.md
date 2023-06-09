# cp.ui.OldOutline

Represents an `AXOutline` `axuielement`.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [OldOutline](#oldoutline)
* Methods - API calls which can only be made on an object returned by a constructor
 * [childrenUI](#childrenui)
 * [columns](#columns)
 * [columnsUI](#columnsui)
 * [createColumn](#createcolumn)
 * [createRow](#createrow)
 * [fetchColumn](#fetchcolumn)
 * [fetchRow](#fetchrow)
 * [fetchRows](#fetchrows)
 * [filterRows](#filterrows)
 * [rows](#rows)
 * [rowsUI](#rowsui)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `element` is an `Outline`.                                                                     |
| **Parameters**                              | <ul><li>element - An element to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [OldOutline](#oldoutline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline(parent, uiFinder) -> cp.ui.OldOutline`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Outline` with the specified `parent` and `uiFinder`.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent instance.</li><li>uiFinder - A `function` or a `cp.prop` which will return the `AXOutline` `axuielement`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Outline` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [childrenUI](#childrenui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline:childrenUI() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Provides a `table` containing the `axuielement`s which are children of the outline.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [columns](#columns)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline:columns() -> table of cp.ui.Columns`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the list of [Column](cp.ui.OldColumn.md)s in this `Outline`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [columnsUI](#columnsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline:columnsUI() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Provides a `table` containing the `axuielement`s which are columns of the outline.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [createColumn](#createcolumn)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline:createColumn(columnUI) -> cp.ui.OldColumn`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to create a new [Column](cp.ui.OldColumn.md) with the provided `columnUI` `axuielement`. If there is a problem, an `error` is thrown.                                                                     |
| **Parameters**                              | <ul><li>columnUI - the `AXColumn` `axuielement` to create a [Column](cp.ui.OldColumn.md) for.</li></ul> |
| **Returns**                                 | <ul><li>The [Column](cp.ui.OldColumn.md) or an error if a problem occurred.</li></ul>          |
| **Notes**                                   | <ul><li>Subclasses which want to provide a custom [Column](cp.ui.OldColumn.md) implementation should override this method.</li></ul>                |

---

### [createRow](#createrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline:createRow(rowUI) -> cp.ui.OldRow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to create a new [Row](cp.ui.OldRow.md) with the provided `rowUI` `axuielement`. If there is a problem, an `error` is thrown.                                                                     |
| **Parameters**                              | <ul><li>rowUI - the `AXRow` `axuielement` to create a [Row](cp.ui.OldRow.md) for.</li></ul> |
| **Returns**                                 | <ul><li>The [Row](cp.ui.OldRow.md) or an error if a problem occurred.</li></ul>          |
| **Notes**                                   | <ul><li>Subclasses which want to provide a custom [Row](cp.ui.OldRow.md) implementation should override this method.</li></ul>                |

---

### [fetchColumn](#fetchcolumn)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline:fetchColumn(columnsUI) -> table of cp.ui.Columns`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` of the same length as `columnsUI`.                                                                     |
| **Parameters**                              | <ul><li>columnsUI - The list of `AXColumn` `axuielement`s to find.</li></ul> |
| **Returns**                                 | <ul><li>A `table` with the same number of elements, containing the matching [Column](cp.ui.OldColumn.md) instances.</li></ul>          |
| **Notes**                                   | <ul><li>If provided items in the table are not valid columns in this table, then `nil` will be put in the matching index.</li><li>Note that this will break the standard `#`/looping behaviour for tables at that point.</li></ul>                |

---

### [fetchRow](#fetchrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline:fetchRow(rowUI) -> cp.ui.OldRow or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the [Row](cp.ui.OldRow.md) that represents the provided `rowUI`, if it is actually present in the `Outline`.                                                                     |
| **Parameters**                              | <ul><li>rowUI - The `axuielement` for the `AXRow` to find a [Row](cp.ui.OldRow.md) for.</li></ul> |
| **Returns**                                 | <ul><li>The [Row](cp.ui.OldRow.md), or `nil` if the `rowUI` is not in this `Outline`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [fetchRows](#fetchrows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline:fetchRows(rowsUI) -> table of cp.ui.OldRows`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` of the same length as `rowsUI`.                                                                     |
| **Parameters**                              | <ul><li>rowsUI - The list of `AXRow` `axuielement`s to find.</li></ul> |
| **Returns**                                 | <ul><li>A `table` with the same number of elements, containing the matching [Row](cp.ui.OldRow.md) instances.</li></ul>          |
| **Notes**                                   | <ul><li>If provided items in the table are not valid rows in this table, then `nil` will be put in the matching index.</li><li>Note that this will break the standard `#`/looping behaviour for tables at that point.</li></ul>                |

---

### [filterRows](#filterrows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline:filterRows(matcherFn) -> table of cp.ui.OldRows or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table only containing [Row](cp.ui.OldRow.md)s which pass the predicate `matcherFn`. The function is passed the row and returns a boolean.                                                                     |
| **Parameters**                              | <ul><li>matcherFn	- the `function` that will accept a [Row](cp.ui.OldRow.md) and return a `boolean`.</li></ul> |
| **Returns**                                 | <ul><li>A `table` of [Row](cp.ui.OldRow.md)s, or `nil` if no UI is currently available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [rows](#rows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline:rows() -> table of cp.ui.OldRow or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Provides a `table` with the list of `cp.ui.OldRow` elements for the rows.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the list of [Row](cp.ui.OldRow.md)s in the `Outline`, or `nil` if the `Outline` is not presently available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [rowsUI](#rowsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldOutline:rowsUI() -> table of axuielement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Provides a `table` containing the `axuielement`s which are rows in the outline.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
