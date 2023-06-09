# cp.ui.OldTable

Represents an AXTable in the Apple Accessibility UX API.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [cellTextValue](#celltextvalue)
 * [cellTextValueIs](#celltextvalueis)
 * [discloseRow](#discloserow)
 * [findRow](#findrow)
 * [is](#is)
 * [matches](#matches)
 * [matchesContent](#matchescontent)
 * [visitRow](#visitrow)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [OldTable](#oldtable)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [contentUI](#contentui)
 * [horizontalScrollBarUI](#horizontalscrollbarui)
 * [isFocused](#isfocused)
 * [verticalScrollBarUI](#verticalscrollbarui)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [columnsUI](#columnsui)
 * [deselectAll](#deselectall)
 * [deselectRow](#deselectrow)
 * [deselectRowAt](#deselectrowat)
 * [findCellUI](#findcellui)
 * [findColumnIndex](#findcolumnindex)
 * [loadLayout](#loadlayout)
 * [rowsUI](#rowsui)
 * [saveLayout](#savelayout)
 * [selectAll](#selectall)
 * [selectedRowsUI](#selectedrowsui)
 * [selectRow](#selectrow)
 * [selectRowAt](#selectrowat)
 * [showRow](#showrow)
 * [showRowAt](#showrowat)
 * [toCSV](#tocsv)
 * [topRowsUI](#toprowsui)
 * [viewFrame](#viewframe)


---

## API Documentation

#### Functions


### [cellTextValue](#celltextvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.cellTextValue(cell) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the cell's text value.                                                                     |
| **Parameters**                              | <ul><li>`cell`   - The cell to check</li></ul> |
| **Returns**                                 | <ul><li>The combined text value of the cell.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 40](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L40) |

---


### [cellTextValueIs](#celltextvalueis)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.cellTextValueIs(cell, value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the cell's text value equals `value`.                                                                     |
| **Parameters**                              | <ul><li>`cell`   - The cell to check</li><li>`value`  - The text value to compare.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the cell text value equals the provided `value`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 69](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L69) |

---


### [discloseRow](#discloserow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.discloseRow(row) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Discloses the row, if possible.                                                                     |
| **Parameters**                              | <ul><li>`row`        - The row to disclose</li></ul> |
| **Returns**                                 | <ul><li>`true` if the row is disclosable and is now expanded.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 83](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L83) |

---


### [findRow](#findrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.findRow(rows, names) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds the row at the sub-level named in the `names` table and returns it.                                                                     |
| **Parameters**                              | <ul><li>`rows`       - The array of rows to process.</li><li>`names`      - The array of names to navigate down</li></ul> |
| **Returns**                                 | <ul><li>The row that was visited, or `nil` if not.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L102) |

---


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `Table`.                                                                     |
| **Parameters**                              | <ul><li>`thing`      - The thing to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the thing is a `Table` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L27) |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a valid table.                                                                     |
| **Parameters**                              | <ul><li>`element`    - The element to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 161](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L161) |

---


### [matchesContent](#matchescontent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.matchesContent(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `element` is a valid table content element.                                                                     |
| **Parameters**                              | <ul><li>`element`    - The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is a valid content element.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 220](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L220) |

---


### [visitRow](#visitrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.visitRow(rows, names) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Selects the row at the sub-level named in the `names` table.                                                                     |
| **Parameters**                              | <ul><li>`rows`       - The array of rows to process.</li><li>`names`      - The array of names to navigate down</li></ul> |
| **Returns**                                 | <ul><li>The row that was visited, or `nil` if not.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 147](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L147) |

---

#### Constructors


### [OldTable](#oldtable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable(parent, uiFinder) -> self`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Table.                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent object.</li><li>`uiFinder`   - A `function` or `cp.prop` which will return the `axuielement` that this table represents.</li></ul> |
| **Returns**                                 | <ul><li>A new `Table` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 172](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L172) |

---

#### Fields


### [contentUI](#contentui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.contentUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `axuielement` that contains the actual rows.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 183](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L183) |

---


### [horizontalScrollBarUI](#horizontalscrollbarui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.horizontalScrollBarUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The horizontal scroll bar UI element, if present.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 203](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L203) |

---


### [isFocused](#isfocused)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.isFocused <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the table is focused by the user.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 210](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L210) |

---


### [verticalScrollBarUI](#verticalscrollbarui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable.verticalScrollBarUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The vertical scroll bar UI element, if present.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 196](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L196) |

---

#### Methods


### [columnsUI](#columnsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:columnsUI() -> table of axuielements | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Return a list of column headers, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Table of column headers. If the table is visible but no column headers are defined, an empty table is returned. If it's not visible, `nil` is returned.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 278](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L278) |

---


### [deselectAll](#deselectall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:deselectAll(rowUI) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deselects the specified rows. If `rowsUI` is `nil`, then all rows will be deselected.                                                                     |
| **Parameters**                              | <ul><li>rowUI - A table of `hs.axuielement` objects for the rows you want to deselect.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 545](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L545) |

---


### [deselectRow](#deselectrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:deselectRow(rowUI) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deselect a specific row.                                                                     |
| **Parameters**                              | <ul><li>rowUI - The `hs.axuielement` object of the row you want to deselect.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 491](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L491) |

---


### [deselectRowAt](#deselectrowat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:deselectRowAt(index) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deselects a row at a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the row you wish to deselect.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 509](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L509) |

---


### [findCellUI](#findcellui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:findCellUI(rowNumber, columnId) -> `hs.axuielement` | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds a specific Cell UI.                                                                     |
| **Parameters**                              | <ul><li>rowNumber - The row number.</li><li>columnId - The Column ID.</li></ul> |
| **Returns**                                 | <ul><li>A `hs.axuielement` object for the cell, or `nil` if the cell cannot be found.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 322](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L322) |

---


### [findColumnIndex](#findcolumnindex)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:findColumnIndex(id) -> number | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the Column Index based on an `AXIdentifier` ID.                                                                     |
| **Parameters**                              | <ul><li>id - The `AXIdentifier` of the column index you want to find.</li></ul> |
| **Returns**                                 | <ul><li>A column index as a number, or `nil` if no index can be found.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 301](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L301) |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Table layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Table layout settings - created using `cp.ui.OldTable:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 654](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L654) |

---


### [rowsUI](#rowsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:rowsUI([filterFn]) -> table of axuielements | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the list of rows in the table. An optional filter function may be provided. It will be passed a single `AXRow` element and should return `true` if the row should be included.                                                                     |
| **Parameters**                              | <ul><li>`filterFn`   - An optional function that will be called to check if individual rows should be included. If not provided, all rows are returned.</li></ul> |
| **Returns**                                 | <ul><li>Table of rows. If the table is visible but no rows match, it will be an empty table, otherwise it will be `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 237](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L237) |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Table layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Table Layout.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 630](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L630) |

---


### [selectAll](#selectall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:selectAll(rowUI) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects the specified rows. If `rowsUI` is `nil`, then all rows will be selected.                                                                     |
| **Parameters**                              | <ul><li>rowUI - A table of `hs.axuielement` objects for the rows you want to select.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 526](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L526) |

---


### [selectedRowsUI](#selectedrowsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:selectedRowsUI() -> table of axuielements | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Return a table of selected row UIs.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Table of `hs.axuielement` objects, or `nil` if none could be found.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 341](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L341) |

---


### [selectRow](#selectrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:selectRow(rowUI) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select a specific row.                                                                     |
| **Parameters**                              | <ul><li>rowUI - The `hs.axuielement` object of the row you want to select.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 456](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L456) |

---


### [selectRowAt](#selectrowat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:selectRowAt(index) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select a row at a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the row you wish to select.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 474](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L474) |

---


### [showRow](#showrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:showRow(rowUI) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows a specific row.                                                                     |
| **Parameters**                              | <ul><li>rowUI - The `hs.axuielement` object of the row you want to show.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 395](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L395) |

---


### [showRowAt](#showrowat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:showRowAt(index) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows a row at a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the row you wish to show.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 437](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L437) |

---


### [toCSV](#tocsv)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:toCSV() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the contents of the table and formats it as a CSV string.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 565](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L565) |

---


### [topRowsUI](#toprowsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:topRowsUI(filterFn) -> table of axuielements | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a list of top-level rows in the table. An optional filter function may be provided. It will be passed a single `AXRow` element and should return `true` if the row should be included.                                                                     |
| **Parameters**                              | <ul><li>`filterFn`   - An optional function that will be called to check if individual rows should be included. If not provided, all rows are returned.</li></ul> |
| **Returns**                                 | <ul><li>Table of rows. If the table is visible but no rows match, it will be an empty table, otherwise it will be `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 262](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L262) |

---


### [viewFrame](#viewframe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.OldTable:viewFrame() -> hs.geometry rect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the Table frame.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The frame in the form of a `hs.geometry` rect object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldTable.lua line 364](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldTable.lua#L364) |

---

