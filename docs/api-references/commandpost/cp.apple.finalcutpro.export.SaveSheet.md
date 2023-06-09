# cp.apple.finalcutpro.export.SaveSheet

Save Sheet

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)
 * [SaveSheet](#savesheet)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [cancel](#cancel)
 * [filename](#filename)
 * [goToPrompt](#gotoprompt)
 * [replaceAlert](#replacealert)
 * [save](#save)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [setPath](#setpath)


---

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [SaveSheet](#savesheet)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet(app) -> SaveSheet`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new SaveSheet object.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new SaveSheet object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [cancel](#cancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.cancel <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Cancel" `Button`.                                                                     |

---

### [filename](#filename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.filename <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Save Sheet Filename Text Field.                                                                     |

---

### [goToPrompt](#gotoprompt)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.goToPrompt <GoToPrompt>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Go To Prompt object.                                                                     |

---

### [replaceAlert](#replacealert)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.replaceAlert <ReplaceAlert>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Replace Alert object.                                                                     |

---

### [save](#save)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.save <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Save" `Button`.                                                                     |

---
### Methods


### [setPath](#setpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet:setPath(path) -> cp.apple.finalcutpro.export.SaveSheet`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the path.                                                                     |
| **Parameters**                              | <ul><li>path - The path as a string.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.SaveSheet` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---