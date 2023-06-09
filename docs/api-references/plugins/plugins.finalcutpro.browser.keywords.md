# plugins.finalcutpro.browser.keywords

Browser Keywords Presets.

## API Overview
* Constants - Useful values which cannot be changed
 * [NUMBER_OF_PRESETS](#NUMBER_OF_PRESETS)
 * [NUMBER_OF_SHORTCUTS](#NUMBER_OF_SHORTCUTS)
* Functions - API calls offered directly by the extension
 * [restore](#restore)
 * [save](#save)

## API Documentation

### Constants


### [NUMBER_OF_PRESETS](#NUMBER_OF_PRESETS)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.keywords.NUMBER_OF_PRESETS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of presets available.                                                                     |

---

### [NUMBER_OF_SHORTCUTS](#NUMBER_OF_SHORTCUTS)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.keywords.NUMBER_OF_SHORTCUTS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of Keyword Keyboard shortcuts available.                                                                     |

---
### Functions


### [restore](#restore)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.keywords.restore(preset) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Restores a Keyword preset.                                                                     |
| **Parameters**                              | <ul><li>preset - A preset number between 1 and the value of `plugins.finalcutpro.browser.keywords.NUMBER_OF_PRESETS`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [save](#save)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.keywords.save(preset) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves a Keyword preset.                                                                     |
| **Parameters**                              | <ul><li>preset - A preset number between 1 and the value of `plugins.finalcutpro.browser.keywords.NUMBER_OF_PRESETS`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
