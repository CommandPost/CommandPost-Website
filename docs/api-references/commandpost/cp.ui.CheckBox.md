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

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [CheckBox](#CheckBox)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [checked](#checked)
 * [title](#title)
* Methods - API calls which can only be made on an object returned by a constructor
 * [click](#click)
 * [doCheck](#doCheck)
 * [doPress](#doPress)
 * [doUncheck](#doUncheck)
 * [loadLayout](#loadLayout)
 * [press](#press)
 * [saveLayout](#saveLayout)
 * [toggle](#toggle)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided `hs.axuielement` is a CheckBox.                                                                     |
| **Parameters**                              | <ul><li>element		- The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it's a match, or `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [CheckBox](#CheckBox)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox(parent, uiFinder) -> cp.ui.CheckBox`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new CheckBox.                                                                     |
| **Parameters**                              | <ul><li>parent		- The parent object.</li><li>uiFinder		- A function which will return the `hs.axuielement` when available.</li></ul> |
| **Returns**                                 | <ul><li>The new `CheckBox`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [checked](#checked)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox.checked <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the checkbox is currently checked.                                                                     |

| [title](#title)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox.title <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The button title, if available.                                                                     |

### Methods

| [click](#click)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:click() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Performs a single mouse click on the checkbox.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `CheckBox` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doCheck](#doCheck)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:doCheck() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the `CheckBox` is checked.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doPress](#doPress)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:doPress() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will press the button when executed, if available at the time. If not an `error` is sent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will press the button when executed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doUncheck](#doUncheck)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:doUncheck() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the `CheckBox` is unchecked.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [loadLayout](#loadLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:loadLayout(layout) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Applies the settings in the provided layout table.                                                                     |
| **Parameters**                              | <ul><li>layout - The table containing layout settings. Usually created by the `saveLayout` method.</li></ul> |
| **Returns**                                 | <ul><li>nil</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [press](#press)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:press() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to press the button. May fail if the `UI` is not available.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `CheckBox` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [saveLayout](#saveLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table containing the layout settings for the checkbox. This table may be passed to the `loadLayout` method to restore the saved layout.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A settings table.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [toggle](#toggle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.CheckBox:toggle() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Toggles the `checked` status of the button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `CheckBox` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

