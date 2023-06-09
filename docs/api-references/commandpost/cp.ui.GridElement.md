# cp.ui.GridElement

Abstract base class for `AX` elements which form a grid, such as [GridElement](cp.ui.GridElement.md) and [Outline](cp.ui.Outline.md).

---

## Submodules
 * [cp.ui.GridElement.Builder](cp.ui.GridElement.Builder.md)
 * [cp.ui.GridElement.OfRows](cp.ui.GridElement.OfRows.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)
 * [withColumnsOf](#withcolumnsof)
 * [withHeaderOf](#withheaderof)
 * [withRowsOf](#withrowsof)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [GridElement](#gridelement)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [columns](#columns)
 * [columnsUI](#columnsui)
 * [firstRow](#firstrow)
 * [header](#header)
 * [headerUI](#headerui)
 * [lastRow](#lastrow)
 * [rowsUI](#rowsui)
 * [selectedColumns](#selectedcolumns)
 * [selectedColumnsUI](#selectedcolumnsui)
 * [selectedRows](#selectedrows)
 * [selectedRowsUI](#selectedrowsui)
 * [visibleColumns](#visiblecolumns)
 * [visibleColumnsUI](#visiblecolumnsui)
 * [visibleRows](#visiblerows)
 * [visibleRowsUI](#visiblerowsui)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doSelectRow](#doselectrow)
 * [fetchColumn](#fetchcolumn)
 * [findCell](#findcell)
 * [findColumnIndex](#findcolumnindex)
 * [row](#row)
 * [selectRow](#selectrow)
 * [selectRowAt](#selectrowat)
 * [selectRows](#selectrows)
 * [visitRow](#visitrow)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `element` is an `GridElement`.                                                                     |
| **Parameters**                              | <ul><li>element - An element to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 96](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L96) |

---


### [withColumnsOf](#withcolumnsof)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:withColumnsOf(columnInit) -> cp.ui.GridElement.Builder`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a new `Builder` for `GridElement`s with the specified `columnInit`.                                                                     |
| **Parameters**                              | <ul><li>columnInit - A `Column` initializer.</li></ul> |
| **Returns**                                 | <ul><li>A new `Builder` for `GridElement`s.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 86](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L86) |

---


### [withHeaderOf](#withheaderof)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:withHeaderOf(headerInit) -> cp.ui.GridElement.Builder`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a new `Builder` for `GridElement`s with the specified `headerInit`.                                                                     |
| **Parameters**                              | <ul><li>headerInit - A `Header` initializer.</li></ul> |
| **Returns**                                 | <ul><li>A new `Builder` for `GridElement`s.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 66](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L66) |

---


### [withRowsOf](#withrowsof)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:withRowsOf(...) -> function(parent, uiFinder) -> GridElement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that returns a function expecting a `parent` and `uiFinder` and returns a `GridElement` instance, with the arguments defining the [Cell](cp.ui.Cell.md.html) instances that make up the rows of the table.                                                                     |
| **Parameters**                              | <ul><li>... - One or more arguments to pass to the constructor.</li></ul> |
| **Returns**                                 | <ul><li>A function that will return a new `GridElement` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 115](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L115) |

---

#### Constructors


### [GridElement](#gridelement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement(parent, uiFinder, headerInit, rowInit, columnInit) -> cp.ui.GridElement`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `GridElement` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent `Element` instance.</li><li>uiFinder - A `hs.uielement` or `axuielementObject` that will be used to find this element.</li><li>headerInit - An initializer function that will be called to create the header `Element` instance.</li><li>rowInit - An initializer function that will be called to create each row element.</li><li>columnInit - An initializer function that will be called to create each column element.</li></ul> |
| **Returns**                                 | <ul><li>A new `GridElement` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The `headerType`, `rowType` arguments are optional.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 131](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L131) |

---

#### Fields


### [columns](#columns)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.columns <table of cp.ui.Column; live?; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `Column`s which are children of this `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 260](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L260) |

---


### [columnsUI](#columnsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.columnsUI <cp.prop: table of axuielement; live?; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `axuielement`s which are children of this `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 253](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L253) |

---


### [firstRow](#firstrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.firstRow <cp.ui.Element>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | An `Element` of the `rowInit` type that will always point at the first row (if available).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 181](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L181) |

---


### [header](#header)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.header <cp.ui.Element>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Element` representing the `AXHeader` of the `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 167](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L167) |

---


### [headerUI](#headerui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.headerUI <cp.prop: axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the header UI element.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The header UI element.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 154](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L154) |

---


### [lastRow](#lastrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.lastRow <cp.ui.Element>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | An `Element` of the `rowInit` type that will always point at the last row (if available).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 193](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L193) |

---


### [rowsUI](#rowsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.rowsUI <cp.prop: table of axuielement; live?; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `Row`s which are children of this `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 174](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L174) |

---


### [selectedColumns](#selectedcolumns)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.selectedColumns <table of cp.ui.Column; live?; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `Column`s which are selected in this `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 274](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L274) |

---


### [selectedColumnsUI](#selectedcolumnsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.selectedColumnsUI <cp.prop: table of axuielement; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `axuielement` `AXColumn`s which are selected in this `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 267](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L267) |

---


### [selectedRows](#selectedrows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.selectedRows <table of cp.ui.Row; live?; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `Row`s which are selected in this `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 232](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L232) |

---


### [selectedRowsUI](#selectedrowsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.selectedRowsUI <cp.prop: table of cp.ui.Row; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `Row`s which are selected in this `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 223](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L223) |

---


### [visibleColumns](#visiblecolumns)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.visibleColumns <table of cp.ui.Column; live?; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `Column`s which are visible in this `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 288](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L288) |

---


### [visibleColumnsUI](#visiblecolumnsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.visibleColumnsUI <cp.prop: table of axuielement; live?; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `Column`s which are visible in this `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 281](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L281) |

---


### [visibleRows](#visiblerows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.visibleRows <table of cp.ui.Row; live?; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `Row`s which are visible in this `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 246](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L246) |

---


### [visibleRowsUI](#visiblerowsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.visibleRowsUI <cp.prop: table of cp.ui.Row; live?; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `Row`s which are visible in this `GridElement`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 239](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L239) |

---

#### Methods


### [doSelectRow](#doselectrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:doSelectRow(path) -> [Statement](cp.rx.go.Statement.md)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects the row at the sub-level named in the `path` table.                                                                     |
| **Parameters**                              | <ul><li>path - A `table` of names to navigate through to find the [Row](cp.ui.Row.md) to select.</li></ul> |
| **Returns**                                 | <ul><li>The selected [Row](cp.ui.Row.md), or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 452](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L452) |

---


### [fetchColumn](#fetchcolumn)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:fetchColumn(columnsUI) -> table of cp.ui.Columns`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` of the same length as `columnsUI`. If provided items in the table are not valid columns in this table, then `nil` will be put in the matching index. Note that this will break the standard `#`/looping behaviour for tables at that point.                                                                     |
| **Parameters**                              | <ul><li>columnsUI - The list of `AXColumn` `axuielement`s to find.</li></ul> |
| **Returns**                                 | <ul><li>A `table` with the same number of elements, containing the matching [Column](cp.ui.Column.md) instances.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 308](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L308) |

---


### [findCell](#findcell)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:findCell(rowNumber, columnId) -> `hs.axuielement` | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds a specific [Cell](cp.ui.Cell.md).                                                                     |
| **Parameters**                              | <ul><li>rowNumber - The row number.</li><li>columnId - The Column ID.</li></ul> |
| **Returns**                                 | <ul><li>A `hs.axuielement` object for the cell, or `nil` if the cell cannot be found.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 376](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L376) |

---


### [findColumnIndex](#findcolumnindex)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:findColumnIndex(id) -> number | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the Column Index based on an `AXIdentifier` ID.                                                                     |
| **Parameters**                              | <ul><li>id - The `AXIdentifier` of the column index you want to find.</li></ul> |
| **Returns**                                 | <ul><li>A column index as a number, or `nil` if no index can be found.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 355](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L355) |

---


### [row](#row)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:row(index) -> cp.ui.Element | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Element` at the specified `index`.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the `Element` to return.</li></ul> |
| **Returns**                                 | <ul><li>The `Element` at the specified `index`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 205](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L205) |

---


### [selectRow](#selectrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:selectRow(row) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to select the provided `cp.ui.Row`.                                                                     |
| **Parameters**                              | <ul><li>row - The `cp.ui.Row` to select.</li></ul> |
| **Returns**                                 | <ul><li>`nil`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 421](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L421) |

---


### [selectRowAt](#selectrowat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:selectRowAt(path) -> cp.ui.Row`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects the row at the sub-level named in the `path` table.                                                                     |
| **Parameters**                              | <ul><li>path - A `table` of names to navigate through to find the [Row](cp.ui.Row.md) to select.</li></ul> |
| **Returns**                                 | <ul><li>The selected [Row](cp.ui.Row.md), or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 439](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L439) |

---


### [selectRows](#selectrows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:selectRows(rows) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to select the provided list of `cp.ui.Row`s.                                                                     |
| **Parameters**                              | <ul><li>rows - The list of `cp.ui.Row`s to select.</li></ul> |
| **Returns**                                 | <ul><li>`nil`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 395](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L395) |

---


### [visitRow](#visitrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement:visitRow(path, actionFn) -> cp.ui.Row`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Visits the row at the sub-level named in the `names` table, and executes the `actionFn`.                                                                     |
| **Parameters**                              | <ul><li>`names`		- The array of names to navigate down</li><li>`actionFn`	- A function to execute when the target row is found.</li></ul> |
| **Returns**                                 | <ul><li>The row that was visited, or `nil` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/GridElement.lua line 341](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/GridElement.lua#L341) |

---

