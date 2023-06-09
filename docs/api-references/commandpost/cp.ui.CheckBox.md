# cp.ui.CheckBox

Check Box UI Module.

This represents an `hs.axuielement` with a `AXCheckBox` role.
It allows checking and modifying the `checked` status like so:

```lua
myButton:checked() == true			-- happens to be checked already
myButton:checked(false) == false	-- update to unchecked.
myButton.checked:toggle() == true	-- toggled back to being checked.
```

You can also call instances of `CheckBox` as a function, which will return
the `checked` status:

```lua
myButton() == true			-- still true
myButton(false) == false	-- now false
```

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [CheckBox](#checkbox)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [checked](#checked)
 * [title](#title)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [click](#click)
 * [doCheck](#docheck)
 * [doPress](#dopress)
 * [doUncheck](#douncheck)
 * [loadLayout](#loadlayout)
 * [press](#press)
 * [saveLayout](#savelayout)
 * [toggle](#toggle)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided `hs.axuielement` is a CheckBox.                                                                     |
| **Parameters**                              | <ul><li>element		- The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it's a match, or `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 36](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L36) |

---

#### Constructors


### [CheckBox](#checkbox)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox(parent, uiFinder) -> cp.ui.CheckBox`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new CheckBox.                                                                     |
| **Parameters**                              | <ul><li>parent		- The parent object.</li><li>uiFinder		- A function which will return the `hs.axuielement` when available.</li></ul> |
| **Returns**                                 | <ul><li>The new `CheckBox`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 49](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L49) |

---

#### Fields


### [checked](#checked)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox.checked <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the checkbox is currently checked.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 70](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L70) |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox.title <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The button title, if available.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L63) |

---

#### Methods


### [click](#click)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:click() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Performs a single mouse click on the checkbox.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `CheckBox` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 89](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L89) |

---


### [doCheck](#docheck)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:doCheck() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the `CheckBox` is checked.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 161](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L161) |

---


### [doPress](#dopress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:doPress() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will press the button when executed, if available at the time. If not an `error` is sent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will press the button when executed.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 140](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L140) |

---


### [doUncheck](#douncheck)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:doUncheck() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the `CheckBox` is unchecked.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 180](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L180) |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:loadLayout(layout) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Applies the settings in the provided layout table.                                                                     |
| **Parameters**                              | <ul><li>layout - The table containing layout settings. Usually created by the `saveLayout` method.</li></ul> |
| **Returns**                                 | <ul><li>nil</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 214](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L214) |

---


### [press](#press)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:press() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to press the button. May fail if the `UI` is not available.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `CheckBox` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 123](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L123) |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table containing the layout settings for the checkbox. This table may be passed to the `loadLayout` method to restore the saved layout.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A settings table.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 199](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L199) |

---


### [toggle](#toggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:toggle() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Toggles the `checked` status of the button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `CheckBox` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/CheckBox.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/CheckBox.lua#L109) |

---

