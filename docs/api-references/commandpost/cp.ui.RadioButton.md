# cp.ui.RadioButton

Radio Button Module.

This represents an `hs.axuielement` with a `AXRadioButton` role.
It allows checking and modifying the `checked` status like so:

```lua
myButton:checked() == true			-- happens to be checked already
myButton:checked(false) == false	-- update to unchecked.
myButton.checked:toggle() == true	-- toggled back to being checked.
```

You can also call instances of `RadioButton` as a function, which will return
the `checked` status:

```lua
myButton() == true			-- still true
myButton(false) == false	-- now false
```

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [checked](#checked)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doCheck](#docheck)
 * [doLayout](#dolayout)
 * [doPress](#dopress)
 * [doToggle](#dotoggle)
 * [doUncheck](#douncheck)
 * [loadLayout](#loadlayout)
 * [press](#press)
 * [RadioButton](#radiobutton)
 * [saveLayout](#savelayout)
 * [toggle](#toggle)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided `hs.axuielement` is a RadioButton.                                                                     |
| **Parameters**                              | <ul><li>element		- The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it's a match, or `false` if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 32](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L32){target="_blank"} |

---

#### Fields


### [checked](#checked)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton.checked <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the checkbox is currently checked. May be set by calling as a function with `true` or `false` to the function.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 59](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L59){target="_blank"} |

---

#### Methods


### [doCheck](#docheck)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton:doCheck() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will check the button value when executed, if available at the time. If not an `error` is sent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will toggle the button when executed.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 110](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L110){target="_blank"} |

---


### [doLayout](#dolayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton:doLayout(layout) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will apply the layout provided, if possible.                                                                     |
| **Parameters**                              | <ul><li>layout - the `table` containing the layout configuration. Usually created via the [#saveLayout] method.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md).</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 202](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L202){target="_blank"} |

---


### [doPress](#dopress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton:doPress() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will press the button when executed, if available at the time. If not an `error` is sent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will press the button when executed.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 157](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L157){target="_blank"} |

---


### [doToggle](#dotoggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton:doToggle() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will toggle the button value when executed, if available at the time. If not an `error` is sent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will toggle the button when executed.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 91](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L91){target="_blank"} |

---


### [doUncheck](#douncheck)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton:doUncheck() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will uncheck the button value when executed, if available at the time. If not an `error` is sent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will toggle the button when executed.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 125](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L125){target="_blank"} |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton:loadLayout(layout) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Processes the `layout` table to restore this to match the provided `layout`.                                                                     |
| **Parameters**                              | <ul><li>layout - the table of state values to restore to.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 186](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L186){target="_blank"} |

---


### [press](#press)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton:press() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to press the button. May fail if the `UI` is not available.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `RadioButton` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 140](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L140){target="_blank"} |

---


### [RadioButton](#radiobutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton(axuielement, function) -> RadioButton`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new RadioButton.                                                                     |
| **Parameters**                              | <ul><li>parent		- The parent object.</li><li>finderFn		- A function which will return the `hs.axuielement` when available.</li></ul> |
| **Returns**                                 | <ul><li>The new `RadioButton`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 45](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L45){target="_blank"} |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` with the button's current state. This can be passed to [#loadLayout] later to restore the original state.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The table of the layout state.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 171](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L171){target="_blank"} |

---


### [toggle](#toggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioButton:toggle() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Toggles the `checked` status of the button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `RadioButton` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioButton.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioButton.lua#L77){target="_blank"} |

---

