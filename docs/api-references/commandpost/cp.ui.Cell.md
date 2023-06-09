# cp.ui.Cell

Represents an `AXCell` `axuielement`. This can be used directly, or can be subclassed to provide more specific access to the cell contents.
It is typically used in conjunction with a container type such as [Table](cp.ui.Table.md), something like this:

```lua
function MyPanel.lazy.value:tableOfStuff()
    return Table:withRowsOf(
        Row:containing(
            Cell:with(TextField), Cell:with(Button)
        )
    )(self, self.UI:mutate(chain // uielement >> attribute "AXContents"))
end
```

This is a subclass of [Element](cp.ui.Element.md).

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)
 * [with](#with)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Cell](#cell)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [children](#children)
 * [childrenUI](#childrenui)
 * [columnIndexRange](#columnindexrange)
 * [rowIndexRange](#rowindexrange)
 * [selected](#selected)
 * [value](#value)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [textValueIs](#textvalueis)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Cell.matches(element) ->  boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `element` is an `AXCell`.                                                                     |
| **Parameters**                              | <ul><li>element - An element to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [with](#with)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Cell:with(...) -> function(parent, uiFinder) -> cp.ui.Cell.Builder`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator function that returns a `Cell.Builder` that accepts the `parent` and `uiFinder` to construct a new `Cell`.                                                                     |
| **Parameters**                              | <ul><li>... - One or more arguments to pass to the constructor.</li></ul> |
| **Returns**                                 | <ul><li>A [Cell.Builder](cp.ui.Cell.Builder.md)</li></ul>          |
| **Notes**                                   | <ul><li>For example, if a cell contains a [Button](cp.ui.Button.md), you can use `cp.ui.Cell:with(Button)`, and it will return a `Cell`</li><li>   `Builder` that accepts the `parent` and `uiFinder` parameters, and whose contents is expected to be a `Button`.</li><li>   That `Button` instance can be accessed via the `children[1]` value.</li><li>   ```</li></ul> |

---

#### Constructors


### [Cell](#cell)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Cell(parent, uiFinder[, childInits]) -> Cell`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Cell` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent `Element`.</li><li>uiFinder - A `cp.prop` or `axuielement` that will be used to find this `Cell`'s `axuielement`.</li><li>... - The list of child `Element` builders to initialize.</li></ul> |
| **Returns**                                 | <ul><li>A new `Cell` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [children](#children)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Cell.children <table of cp.ui.Element; live?; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `Element`s which are children of this `Cell`, if the `childInits` were provided to the constructor.                                                                     |
| **Notes**                                   | - None |

---


### [childrenUI](#childrenui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Cell.childrenUI <cp.prop: table of axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `axuielement`s which are children of this `Cell`.                                                                     |
| **Notes**                                   | - None |

---


### [columnIndexRange](#columnindexrange)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Cell.columnIndexRange <cp.prop: table; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns a table of `{len,loc}`, which indicates if the cell covers multiple columns.                                                                     |
| **Notes**                                   | - None |

---


### [rowIndexRange](#rowindexrange)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Cell.rowIndexRange <cp.prop: table; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns a table of `{len,loc}`, which indicates if the cell covers multiple rows.                                                                     |
| **Notes**                                   | - None |

---


### [selected](#selected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Cell.selected <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the cell is currently selected.                                                                     |
| **Notes**                                   | - None |

---


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Cell.value <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The cell value, if it is a string.                                                                     |
| **Notes**                                   | - None |

---

#### Methods


### [textValueIs](#textvalueis)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Cell.textValueIs(value) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the cell's text value equals `value`.                                                                     |
| **Parameters**                              | <ul><li>`value`	- The text value to compare.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the cell text value equals the provided `value`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

