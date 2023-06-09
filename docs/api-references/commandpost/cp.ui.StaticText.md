# cp.ui.StaticText

Static Text Module.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [value](#value)
* Methods - API calls which can only be made on an object returned by a constructor
 * [clear](#clear)
 * [loadLayout](#loadLayout)
 * [saveLayout](#saveLayout)
 * [StaticText](#StaticText)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a Static Text element.                                                                     |
| **Parameters**                              | <ul><li>element      - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>If `true`, the element is a Static Text element.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [value](#value)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText.value <cp.prop: anything>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current value of the text field.                                                                     |

### Methods

| [clear](#clear)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText:clear() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears the value of a Static Text box.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [loadLayout](#loadLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Static Text layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Static Text layout settings - created using `cp.ui.StaticText:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [saveLayout](#saveLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Static Text layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Static Text Layout.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [StaticText](#StaticText)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText(parent, uiFinder[, convertFn]) -> StaticText`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new StaticText. They have a parent and a finder function.                                                                     |
| **Parameters**                              | <ul><li>parent   - The parent object.</li><li>uiFinder - The function will return the `axuielement` for the StaticText.</li><li>convertFn    - (optional) If provided, will be passed the `string` value when returning.</li></ul> |
| **Returns**                                 | <ul><li>The new `StaticText`.</li></ul>          |
| **Notes**                                   | <ul><li>Additionally, an optional `convert` function can be provided, with the following signature:</li><li></li><li>`function(textValue) -> anything`</li><li></li><li>The `value` will be passed to the function before being returned, if present. All values passed into `value(x)` will be converted to a `string` first via `tostring`.</li><li>For example, to have the value be converted into a `number`, simply use `tonumber` like this:</li><li></li><li>```lua</li><li>local numberField = StaticText(parent, function() return ... end, tonumber)</li><li>```</li></ul>                |

