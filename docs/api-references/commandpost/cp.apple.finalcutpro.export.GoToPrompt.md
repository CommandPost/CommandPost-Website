# cp.apple.finalcutpro.export.GoToPrompt

Go To Prompt.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
 * [new](#new)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [cancel](#cancel)
 * [go](#go)
 * [valueCombo](#valueCombo)
 * [valueText](#valueText)
* Methods - API calls which can only be made on an object returned by a constructor
 * [hide](#hide)
 * [setValue](#setValue)
 * [show](#show)
 * [value](#value)
 * [valueField](#valueField)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.new(app) -> GoToPrompt`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Go To Prompt object.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new GoToPrompt object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [cancel](#cancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.cancel <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Cancel" `Button`.                                                                     |

---

### [go](#go)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.go <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Go" `Button`.                                                                     |

---

### [valueCombo](#valueCombo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.valueCombo <cp.ui.ComboBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `ComboBox` containing the folder value, if available.                                                                     |

---

### [valueText](#valueText)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt.valueText <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `TextField` containing the folder value, if available.                                                                     |

---
### Methods


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt:hide() -> cp.apple.finalcutpro.export.GoToPrompt`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Go To Prompt                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.GoToPrompt` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setValue](#setValue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt:setValue(value) -> cp.apple.finalcutpro.export.GoToPrompt`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the value of the text box within the Go To Prompt.                                                                     |
| **Parameters**                              | <ul><li>value - The value of the text box as a string.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.GoToPrompt` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt:show() -> cp.apple.finalcutpro.export.GoToPrompt`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Go To Prompt                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.GoToPrompt` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt:value([newValue]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current path value, or `nil`.                                                                     |
| **Parameters**                              | <ul><li>newValue - (optional) The new value for the path.</li></ul> |
| **Returns**                                 | <ul><li>The current value of the path.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [valueField](#valueField)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.GoToPrompt:valueField() -> TextField | ComboField`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns either the `valueText` or `valueCombo`, depending what is available on-screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `TextField` or `ComboField` containing the value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
