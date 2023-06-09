# cp.ui.StaticText

Static Text Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [value](#value)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [clear](#clear)
 * [loadLayout](#loadlayout)
 * [saveLayout](#savelayout)
 * [StaticText](#statictext)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a Static Text element.                                                                     |
| **Parameters**                              | <ul><li>element      - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>If `true`, the element is a Static Text element.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/StaticText.lua line 17](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/StaticText.lua#L17){target="_blank"} |

---

#### Fields


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText.value <cp.prop: anything>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current value of the text field.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/StaticText.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/StaticText.lua#L67){target="_blank"} |

---

#### Methods


### [clear](#clear)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText:clear() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears the value of a Static Text box.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/StaticText.lua line 122](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/StaticText.lua#L122){target="_blank"} |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Static Text layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Static Text layout settings - created using `cp.ui.StaticText:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/StaticText.lua line 155](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/StaticText.lua#L155){target="_blank"} |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Static Text layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Static Text Layout.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/StaticText.lua line 140](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/StaticText.lua#L140){target="_blank"} |

---


### [StaticText](#statictext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.StaticText(parent, uiFinder[, convertFn]) -> StaticText`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new StaticText. They have a parent and a finder function.                                                                     |
| **Parameters**                              | <ul><li>parent   - The parent object.</li><li>uiFinder - The function will return the `axuielement` for the StaticText.</li><li>convertFn    - (optional) If provided, will be passed the `string` value when returning.</li></ul> |
| **Returns**                                 | <ul><li>The new `StaticText`.</li></ul>          |
| **Notes**                                   | <ul><li>Additionally, an optional `convert` function can be provided, with the following signature:</li><li></li><li>`function(textValue) -> anything`</li><li></li><li>The `value` will be passed to the function before being returned, if present. All values passed into `value(x)` will be converted to a `string` first via `tostring`.</li><li>For example, to have the value be converted into a `number`, simply use `tonumber` like this:</li><li></li><li>```lua</li><li>local numberField = StaticText(parent, function() return ... end, tonumber)</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/StaticText.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/StaticText.lua#L30){target="_blank"} |

---

