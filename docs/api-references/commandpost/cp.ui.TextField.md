# cp.ui.TextField

Text Field Module.

## Submodules
 * [cp.ui.TextField.Builder](cp.ui.TextField.Builder.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [convertingGet](#convertingGet)
 * [convertingSet](#convertingSet)
 * [value](#value)
* Methods - API calls which can only be made on an object returned by a constructor
 * [clear](#clear)
 * [doConfirm](#doConfirm)
 * [doFocus](#doFocus)
 * [forceFocus](#forceFocus)
 * [getValue](#getValue)
 * [loadLayout](#loadLayout)
 * [saveLayout](#saveLayout)
 * [setValue](#setValue)
 * [TextField](#TextField)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField.matches(element[, subrole]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li><li>subrole - (optional) If provided, the field must have the specified subrole.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [convertingGet](#convertingGet)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:convertingGet(getter) -> cp.ui.TextField.Builder`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Creates a `Builder` that will convert the result of the `TextField:value()` getter to a different type.                                                                     |
| **Parameters**                              | <ul><li>getter - A `function` that will be called to get the value from the `TextField`.</li></ul> |
| **Returns**                                 | <ul><li>The `TextField.Builder`</li></ul>          |
| **Notes**                                   | <ul><li>The `getter` will be called with the `string` value from the `TextField` as its only parameter.</li><li>For example, `TextField:convertGet(tonumber)` will use the standard `tonumber` function to convert the value to a number.</li></ul>                |

---

### [convertingSet](#convertingSet)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:convertingSet(setter) -> cp.ui.TextField.Builder`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Creates a `Builder` that will convert the value before setting it in the `TextField`.                                                                     |
| **Parameters**                              | <ul><li>setter - A `function` that will be called to set the value in the `TextField`.</li></ul> |
| **Returns**                                 | <ul><li>The `TextField.Builder`</li></ul>          |
| **Notes**                                   | <ul><li>The `setter` will be called with the input value from a `TextField:value(...)` call as its only parameter.</li><li>   It should return a `string` to be saved into the `TextField`.</li><li>For example, `TextField:convertSet(tostring)` will use the standard `tostring` function to convert the value to a string.</li></ul>                |

---

### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField.value <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current value of the text field.                                                                     |

---
### Methods


### [clear](#clear)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:clear() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears the value of a Text Field.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doConfirm](#doConfirm)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:doConfirm() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will confirm the current text value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doFocus](#doFocus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:doFocus() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will attempt to focus on the current `TextField`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [forceFocus](#forceFocus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:forceFocus()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Configures the TextField to force a focus on the field before editing. Some fields seem to require this to actually update the text value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getValue](#getValue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:getValue() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the value of the Text Field.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The value of the Text Field as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [loadLayout](#loadLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Text Field layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Text Field layout settings - created using `cp.ui.TextField:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveLayout](#saveLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Text Field layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Text Field Layout.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setValue](#setValue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:setValue(value) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the value of the Text Field.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set the Text Field to as a string.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [TextField](#TextField)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField(parent, uiFinder, getConvertFn, setConvertFn) -> TextField`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new TextField. They have a parent and a finder function.                                                                     |
| **Parameters**                              | <ul><li>parent   - The parent object.</li><li>uiFinder - The function will return the `axuielement` for the TextField.</li><li>getConvertFn    - (optional) If provided, will be passed the `string` value when returning.</li><li>setConvertFn    - (optional) If provided, will be passed the `number` value when setting.</li></ul> |
| **Returns**                                 | <ul><li>The new `TextField`.</li></ul>          |
| **Notes**                                   | <ul><li>Additionally, an optional `convert` function can be provided, with the following signature:</li><li></li><li>`function(textValue) -> anything`</li><li></li><li>The `value` will be passed to the function before being returned, if present. All values passed into `value(x)` will be converted to a `string` first via `tostring`.</li><li></li><li> For example, to have the value be converted into a `number`, simply use `tonumber` like this:</li><li></li><li>```lua</li><li>local numberField = TextField(parent, function() return ... end, tonumber, tostring)</li><li>```</li></ul>                |

---
