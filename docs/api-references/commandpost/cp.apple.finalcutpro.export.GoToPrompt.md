# cp.apple.finalcutpro.export.GoToPrompt

Go To Prompt.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)
 * [new](#new)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [cancel](#cancel)
 * [go](#go)
 * [valueCombo](#valuecombo)
 * [valueText](#valuetext)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [hide](#hide)
 * [setValue](#setvalue)
 * [show](#show)
 * [value](#value)
 * [valueField](#valuefield)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua line 26](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua#L26){target="_blank"} |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.new(app) -> GoToPrompt`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Go To Prompt object.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new GoToPrompt object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua#L43){target="_blank"} |

---

#### Fields


### [cancel](#cancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.cancel <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Cancel" `Button`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua line 96](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua#L96){target="_blank"} |

---


### [go](#go)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.go <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Go" `Button`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua#L105){target="_blank"} |

---


### [valueCombo](#valuecombo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.valueCombo <cp.ui.ComboBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `ComboBox` containing the folder value, if available.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua#L128){target="_blank"} |

---


### [valueText](#valuetext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.valueText <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `TextField` containing the folder value, if available.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua line 119](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua#L119){target="_blank"} |

---

#### Methods


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt:hide() -> cp.apple.finalcutpro.export.GoToPrompt`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Go To Prompt                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.GoToPrompt` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua line 83](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua#L83){target="_blank"} |

---


### [setValue](#setvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt:setValue(value) -> cp.apple.finalcutpro.export.GoToPrompt`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the value of the text box within the Go To Prompt.                                                                     |
| **Parameters**                              | <ul><li>value - The value of the text box as a string.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.GoToPrompt` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua line 172](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua#L172){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt:show() -> cp.apple.finalcutpro.export.GoToPrompt`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Go To Prompt                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.GoToPrompt` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua#L63){target="_blank"} |

---


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt:value([newValue]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current path value, or `nil`.                                                                     |
| **Parameters**                              | <ul><li>newValue - (optional) The new value for the path.</li></ul> |
| **Returns**                                 | <ul><li>The current value of the path.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua line 159](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua#L159){target="_blank"} |

---


### [valueField](#valuefield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt:valueField() -> TextField | ComboField`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns either the `valueText` or `valueCombo`, depending what is available on-screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `TextField` or `ComboField` containing the value.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua line 142](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/GoToPrompt.lua#L142){target="_blank"} |

---

