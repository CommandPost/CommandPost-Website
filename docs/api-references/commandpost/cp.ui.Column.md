# cp.ui.Column

Represents a Column in a Table.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [index](#index)
 * [selected](#selected)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [rows](#rows)
 * [visibleRows](#visiblerows)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Column.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `axuielement` is a `Column`.                                                                     |
| **Parameters**                              | <ul><li>element - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is a Column.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldColumn.lua line 10](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldColumn.lua#L10){target="_blank"} |

---

#### Fields


### [index](#index)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Column.index <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The numeric index of this column in the overall container, with `0` being the first item.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldColumn.lua line 23](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldColumn.lua#L23){target="_blank"} |

---


### [selected](#selected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Column.selected <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the column is currently selected. May be set.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldColumn.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldColumn.lua#L30){target="_blank"} |

---

#### Methods


### [rows](#rows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Column:rows() -> table of cp.ui.OldRow or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` of [Row](cp.ui.OldRow.md)s contained in the Column.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `table`, or `nil` if the column's UI is not available.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldColumn.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldColumn.lua#L37){target="_blank"} |

---


### [visibleRows](#visiblerows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Column:visibleRows() -> table of cp.ui.OldRows or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` of [Row](cp.ui.OldRow.md)s which are currently visible on screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `table`, or `nil` if the column's UI is not available.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/OldColumn.lua line 54](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/OldColumn.lua#L54){target="_blank"} |

---

