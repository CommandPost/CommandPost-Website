# cp.ui.PopUpButton

Pop Up Button Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [PopUpButton](#popupbutton)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [menuUI](#menuui)
 * [value](#value)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doPress](#dopress)
 * [doSelectItem](#doselectitem)
 * [doSelectValue](#doselectvalue)
 * [getValue](#getvalue)
 * [loadLayout](#loadlayout)
 * [press](#press)
 * [saveLayout](#savelayout)
 * [selectItem](#selectitem)
 * [setValue](#setvalue)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 24](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L24) |

---

#### Constructors


### [PopUpButton](#popupbutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton(parent, uiFinder) -> cp.ui.PopUpButton`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new PopUpButton.                                                                     |
| **Parameters**                              | <ul><li>parent       - The parent table. Should have a `isShowing` property.</li><li>uiFinder      - The `function` or `cp.prop` that provides the current `hs.axuielement`.</li></ul> |
| **Returns**                                 | <ul><li>The new `PopUpButton` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L37) |

---

#### Fields


### [menuUI](#menuui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton.menuUI <cp.prop: hs.axuielement; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `AXMenu` for the PopUpMenu if it is currently visible.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 81](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L81) |

---


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton.value <cp.prop: anything; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns or sets the current `PopUpButton` value.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 48](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L48) |

---

#### Methods


### [doPress](#dopress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton:doPress() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that presses the `PopUpButton`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 235](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L235) |

---


### [doSelectItem](#doselectitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton:doSelectItem(index) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will select an item on the `PopUpButton` by index.                                                                     |
| **Parameters**                              | <ul><li>index - The index number of the item you want to select.</li></ul> |
| **Returns**                                 | <ul><li>the `Statement`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 124](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L124) |

---


### [doSelectValue](#doselectvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton:doSelectValue(value, [overrideValue]) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will select an item on the `PopUpButton` by value.                                                                     |
| **Parameters**                              | <ul><li>value - The value of the item to match.</li><li>overrideValue - This optional value overides the above value for the initial compare as a workaround for PopUp that have titles that don't update correctly.</li></ul> |
| **Returns**                                 | <ul><li>the `Statement`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 152](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L152) |

---


### [getValue](#getvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton:getValue() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the `PopUpButton` value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `PopUpButton` value as string, or `nil` if the value cannot be determined.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 191](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L191) |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a `PopUpButton` layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the `PopUpButton` layout settings - created using [saveLayout](#saveLayout).</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 283](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L283) |

---


### [press](#press)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton:press() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Presses the `PopUpButton`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 218](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L218) |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current `PopUpButton` layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current `PopUpButton` Layout.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 268](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L268) |

---


### [selectItem](#selectitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton:selectItem(index) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select an item on the `PopUpButton` by index.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the item you want to select.</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 97](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L97) |

---


### [setValue](#setvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PopUpButton:setValue(value) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the `PopUpButton` value.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set the `PopUpButton` to.</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/PopUpButton.lua line 204](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PopUpButton.lua#L204) |

---

