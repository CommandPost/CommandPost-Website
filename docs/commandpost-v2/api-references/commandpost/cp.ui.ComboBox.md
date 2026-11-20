# cp.ui.ComboBox

Combo Box Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [ComboBox](#combobox)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ComboBox.matches(element[, subrole]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li><li>subrole - (optional) If provided, the field must have the specified subrole.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/ComboBox.lua line 18](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ComboBox.lua#L18) |

---

#### Methods


### [ComboBox](#combobox)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ComboBox(parent, uiFinder, listAdaptorFn [, getConvertFn[, setConvertFn]]) -> ComboBox`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new ComboBox. They have a parent and a finder function.                                                                     |
| **Parameters**                              | <ul><li>parent   - The parent object.</li><li>uiFinder - The function will return the `axuielement` for the ComboBox.</li><li>listAdaptorFn    - A function that will recieve a `List` and `AXUIElement` value and return an `Element`</li><li>getConvertFn    - (optional) If provided, will be passed the `string` value when returning.</li><li>setConvertFn    - (optional) If provided, will be passed the `number` value when setting.</li></ul> |
| **Returns**                                 | <ul><li>The new `ComboBox`.</li></ul>          |
| **Notes**                                   | <ul><li>Additionally, an optional `convert` function can be provided, with the following signature:</li><li></li><li>`function(textValue) -> anything`</li><li></li><li>The `value` will be passed to the function before being returned, if present. All values passed into `value(x)` will be converted to a `string` first via `tostring`.</li><li>For example, to have the value be converted into a `number`, simply use `tonumber` like this:</li><li></li><li>```lua</li><li>local numberField = ComboBox(parent, function() return ... end, tonumber, tostring)</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/ComboBox.lua line 57](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ComboBox.lua#L57) |

---

