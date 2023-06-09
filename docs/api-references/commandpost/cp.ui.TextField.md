# cp.ui.TextField

Text Field Module.

---

## Submodules
 * [cp.ui.TextField.Builder](cp.ui.TextField.Builder.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [convertingGet](#convertingget)
 * [convertingSet](#convertingset)
 * [value](#value)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [clear](#clear)
 * [doConfirm](#doconfirm)
 * [doFocus](#dofocus)
 * [forceFocus](#forcefocus)
 * [getValue](#getvalue)
 * [loadLayout](#loadlayout)
 * [saveLayout](#savelayout)
 * [setValue](#setvalue)
 * [TextField](#textfield)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField.matches(element[, subrole]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li><li>subrole - (optional) If provided, the field must have the specified subrole.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 85](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L85){target="_blank"} |

---

#### Fields


### [convertingGet](#convertingget)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:convertingGet(getter) -> cp.ui.TextField.Builder`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Creates a `Builder` that will convert the result of the `TextField:value()` getter to a different type.                                                                     |
| **Parameters**                              | <ul><li>getter - A `function` that will be called to get the value from the `TextField`.</li></ul> |
| **Returns**                                 | <ul><li>The `TextField.Builder`</li></ul>          |
| **Notes**                                   | <ul><li>The `getter` will be called with the `string` value from the `TextField` as its only parameter.</li><li>For example, `TextField:convertGet(tonumber)` will use the standard `tonumber` function to convert the value to a number.</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 52](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L52){target="_blank"} |

---


### [convertingSet](#convertingset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:convertingSet(setter) -> cp.ui.TextField.Builder`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Creates a `Builder` that will convert the value before setting it in the `TextField`.                                                                     |
| **Parameters**                              | <ul><li>setter - A `function` that will be called to set the value in the `TextField`.</li></ul> |
| **Returns**                                 | <ul><li>The `TextField.Builder`</li></ul>          |
| **Notes**                                   | <ul><li>The `setter` will be called with the input value from a `TextField:value(...)` call as its only parameter.</li><li>   It should return a `string` to be saved into the `TextField`.</li><li>For example, `TextField:convertSet(tostring)` will use the standard `tostring` function to convert the value to a string.</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 66](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L66){target="_blank"} |

---


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField.value <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current value of the text field.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 131](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L131){target="_blank"} |

---

#### Methods


### [clear](#clear)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:clear() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears the value of a Text Field.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 204](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L204){target="_blank"} |

---


### [doConfirm](#doconfirm)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:doConfirm() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will confirm the current text value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 218](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L218){target="_blank"} |

---


### [doFocus](#dofocus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:doFocus() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will attempt to focus on the current `TextField`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 237](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L237){target="_blank"} |

---


### [forceFocus](#forcefocus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:forceFocus()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Configures the TextField to force a focus on the field before editing. Some fields seem to require this to actually update the text value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 163](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L163){target="_blank"} |

---


### [getValue](#getvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:getValue() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the value of the Text Field.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The value of the Text Field as a string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 177](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L177){target="_blank"} |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Text Field layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Text Field layout settings - created using `cp.ui.TextField:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 271](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L271){target="_blank"} |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Text Field layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Text Field Layout.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 256](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L256){target="_blank"} |

---


### [setValue](#setvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField:setValue(value) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the value of the Text Field.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set the Text Field to as a string.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 190](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L190){target="_blank"} |

---


### [TextField](#textfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField(parent, uiFinder, getConvertFn, setConvertFn) -> TextField`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new TextField. They have a parent and a finder function.                                                                     |
| **Parameters**                              | <ul><li>parent   - The parent object.</li><li>uiFinder - The function will return the `axuielement` for the TextField.</li><li>getConvertFn    - (optional) If provided, will be passed the `string` value when returning.</li><li>setConvertFn    - (optional) If provided, will be passed the `number` value when setting.</li></ul> |
| **Returns**                                 | <ul><li>The new `TextField`.</li></ul>          |
| **Notes**                                   | <ul><li>Additionally, an optional `convert` function can be provided, with the following signature:</li><li></li><li>`function(textValue) -> anything`</li><li></li><li>The `value` will be passed to the function before being returned, if present. All values passed into `value(x)` will be converted to a `string` first via `tostring`.</li><li></li><li> For example, to have the value be converted into a `number`, simply use `tonumber` like this:</li><li></li><li>```lua</li><li>local numberField = TextField(parent, function() return ... end, tonumber, tostring)</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 100](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L100){target="_blank"} |

---

