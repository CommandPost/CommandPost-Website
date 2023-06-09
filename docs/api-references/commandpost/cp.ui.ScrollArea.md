# cp.ui.ScrollArea

A `ScrollArea` represents an `AXScrollArea`. They primarily function as a "portal"
to view a larger area of the contained `axuielement` within (accessed via the `AXContents` attribute),
and also provide access to the vertical and horizontal scroll bars (accessed via the
`verticalScrollBar` and `horizontalScrollBar` properties).

The class that wraps the `AXContents` attribute can be provided via the `contentsInit` parameter in the
constructor. If not provided it defaults to [Element](cp.ui.Element.md).

The `ScrollArea` also delegates to the `contents` property, so you can access
any properties of the contained [Element](cp.ui.Element.md) directly.

For example, if you have a `ScrollArea` with a `contents` of a [TextField](cp.ui.TextField.md),
you can normally access the text value via the [TextField.value](cp.ui.TextField.md#value) property.
However, if you want to access the text value via the `ScrollArea` itself, you can do so
via the `ScrollArea.value` property, like so:

```lua
local scrollArea = ScrollArea(parent, ui, TextArea)
-- via `contents`:
local value = scrollArea.contents:value()
--- via delegation:
local value = scrollArea:value()
```

It also has a [Builder](cp.ui.ScrollArea.Builder.md) that supports customising an `Element` [Builder](cp.ui.Builder.md)
to create a `ScrollArea` with a specified `contents` `Element` type. For example, another way to
define our `ScrollArea` that contains a `TextField` is:

```lua
local scrollAreaWithTextField = ScrollArea:containing(TextField)
local scrollArea = scrollAreaWithTextField(parent, ui)
```

The main advantage of this style is that you can pass the `Builder` in to other `Element` types
that require an "`Element` init" that will only be provided a parent and UI finder.

This is a subclass of [Element](cp.ui.Element.md).

## Submodules
 * [cp.ui.ScrollArea.Builder](cp.ui.ScrollArea.Builder.md)

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [containing](#containing)
 * [matches](#matches)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ScrollArea](#scrollarea)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [contents](#contents)
 * [contentsUI](#contentsui)
 * [horizontalScrollBar](#horizontalscrollbar)
 * [selectedChildrenUI](#selectedchildrenui)
 * [verticalScrollBar](#verticalscrollbar)
 * [viewFrame](#viewframe)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [childrenUI](#childrenui)
 * [deselectAll](#deselectall)
 * [loadLayout](#loadlayout)
 * [saveLayout](#savelayout)
 * [selectAll](#selectall)
 * [selectChild](#selectchild)
 * [selectChildAt](#selectchildat)
 * [shiftHorizontalBy](#shifthorizontalby)
 * [shiftHorizontalTo](#shifthorizontalto)
 * [shiftVerticalBy](#shiftverticalby)
 * [shiftVerticalTo](#shiftverticalto)
 * [showChild](#showchild)
 * [showChildAt](#showchildat)


## API Documentation

### Functions


### [containing](#containing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:containing(elementInit) -> cp.ui.ScrollArea.Builder`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A static method that returns a new `ScrollArea.Builder`.                                                                     |
| **Parameters**                              | <ul><li>elementInit - An `Element` initializer.</li></ul> |
| **Returns**                                 | <ul><li>A new `ScrollArea.Builder` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [ScrollArea](#scrollarea)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea(parent, uiFinder[, contentsInit]) -> cp.ui.ScrollArea`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ScrollArea`.                                                                     |
| **Parameters**                              | <ul><li>parent       - The parent object.</li><li>uiFinder     - A `function` or `cp.prop` which will return the `hs.axuielement` when available.</li><li>contentsInit - An optional function to initialise the `contentsUI`. Uses `cp.ui.Element` by default.</li></ul> |
| **Returns**                                 | <ul><li>The new `ScrollArea`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [contents](#contents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea.contents <cp.ui.Element>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `Element` representing the `ScrollArea` Contents.                                                                     |

---

### [contentsUI](#contentsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea.contentsUI <cp.prop: hs.axuielement; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `axuielement` representing the Scroll Area Contents, or `nil` if not available.                                                                     |

---

### [horizontalScrollBar](#horizontalscrollbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea.horizontalScrollBar <cp.ui.ScrollBar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The horizontal [ScrollBar](cp.ui.ScrollBar.md).                                                                     |

---

### [selectedChildrenUI](#selectedchildrenui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea.selectedChildrenUI <cp.prop: hs.axuielement; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `axuielement` representing the Scroll Area Selected Children, or `nil` if not available.                                                                     |

---

### [verticalScrollBar](#verticalscrollbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea.verticalScrollBar <cp.ui.ScrollBar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The vertical [ScrollBar](cp.ui.ScrollBar.md).                                                                     |

---

### [viewFrame](#viewframe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea.viewFrame <cp.prop:table; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` reporting the Scroll Area frame as a table containing `{x, y, w, h}`.                                                                     |

---
### Methods


### [childrenUI](#childrenui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:childrenUI(filterFn) -> hs.axuielement | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the list of `axuielement`s representing the Scroll Area Contents, sorted top-down, or `nil` if not available.                                                                     |
| **Parameters**                              | <ul><li>filterFn - The function which checks if the child matches the requirements.</li></ul> |
| **Returns**                                 | <ul><li>The `axuielement` or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [deselectAll](#deselectall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:deselectAll() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deselect all children in a scroll area.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Scroll Area layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the ScrollArea layout settings, typically created using [saveLayout](#saveLayout).</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Scroll Area layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Scroll Area Layout.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectAll](#selectall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:selectAll(childrenUI) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select all children in a scroll area.                                                                     |
| **Parameters**                              | <ul><li>childrenUI - A table of `hs.axuielement` objects.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectChild](#selectchild)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:selectChild(childUI) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select a specific child within a Scroll Area.                                                                     |
| **Parameters**                              | <ul><li>childUI - The `hs.axuielement` object of the child you want to select.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectChildAt](#selectchildat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:selectChildAt(index) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select a child element in a Scroll Area given a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the child you want to select.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [shiftHorizontalBy](#shifthorizontalby)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:shiftHorizontalBy(amount) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to shift the horizontal scroll bar by the specified amount.                                                                     |
| **Parameters**                              | <ul><li>amount - The amount to shift</li></ul> |
| **Returns**                                 | <ul><li>The actual value of the horizontal scroll bar.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [shiftHorizontalTo](#shifthorizontalto)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:shiftHorizontalTo(value) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to shift the horizontal scroll bar to the specified value.                                                                     |
| **Parameters**                              | <ul><li>value - The new value (typically between `0` and `1`).</li></ul> |
| **Returns**                                 | <ul><li>The actual value of the horizontal scroll bar.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [shiftVerticalBy](#shiftverticalby)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:shiftVerticalBy(amount) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to shift the vertical scroll bar by the specified amount.                                                                     |
| **Parameters**                              | <ul><li>amount - The amount to shift</li></ul> |
| **Returns**                                 | <ul><li>The actual value of the vertical scroll bar.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [shiftVerticalTo](#shiftverticalto)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:shiftVerticalTo(value) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to shift the vertical scroll bar to the specified value.                                                                     |
| **Parameters**                              | <ul><li>value - The new value (typically between `0` and `1`).</li></ul> |
| **Returns**                                 | <ul><li>The actual value of the vertical scroll bar.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showChild](#showchild)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:showChild(childUI) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's a child element in a Scroll Area.                                                                     |
| **Parameters**                              | <ul><li>childUI - The `hs.axuielement` object of the child you want to show.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showChildAt](#showchildat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollArea:showChildAt(index) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's a child element in a Scroll Area given a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the child you want to show.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
