# cp.apple.finalcutpro.export.SaveSheet

Save Sheet

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
 * [SaveSheet](#SaveSheet)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [cancel](#cancel)
 * [filename](#filename)
 * [goToPrompt](#goToPrompt)
 * [replaceAlert](#replaceAlert)
 * [save](#save)
* Methods - API calls which can only be made on an object returned by a constructor
 * [setPath](#setPath)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [SaveSheet](#SaveSheet)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet(app) -> SaveSheet`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new SaveSheet object.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new SaveSheet object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [cancel](#cancel)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.cancel <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Cancel" `Button`.                                                                     |

| [filename](#filename)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.filename <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Save Sheet Filename Text Field.                                                                     |

| [goToPrompt](#goToPrompt)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.goToPrompt <GoToPrompt>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Go To Prompt object.                                                                     |

| [replaceAlert](#replaceAlert)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.replaceAlert <ReplaceAlert>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Replace Alert object.                                                                     |

| [save](#save)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet.save <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Save" `Button`.                                                                     |

### Methods

| [setPath](#setPath)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.SaveSheet:setPath(path) -> cp.apple.finalcutpro.export.SaveSheet`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the path.                                                                     |
| **Parameters**                              | <ul><li>path - The path as a string.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.SaveSheet` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

