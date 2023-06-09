# plugins.finalcutpro.browser.keywords

Browser Keywords Presets.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [NUMBER_OF_PRESETS](#number_of_presets)
 * [NUMBER_OF_SHORTCUTS](#number_of_shortcuts)

**Functions** - _API calls offered directly by the extension_
 * [restore](#restore)
 * [save](#save)


---

## API Documentation

#### Constants


### [NUMBER_OF_PRESETS](#number_of_presets)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.keywords.NUMBER_OF_PRESETS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of presets available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/browser/keywords.lua line 22](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/browser/keywords.lua#L22){target="_blank"} |

---


### [NUMBER_OF_SHORTCUTS](#number_of_shortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.keywords.NUMBER_OF_SHORTCUTS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of Keyword Keyboard shortcuts available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/browser/keywords.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/browser/keywords.lua#L27){target="_blank"} |

---

#### Functions


### [restore](#restore)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.keywords.restore(preset) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Restores a Keyword preset.                                                                     |
| **Parameters**                              | <ul><li>preset - A preset number between 1 and the value of `plugins.finalcutpro.browser.keywords.NUMBER_OF_PRESETS`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/browser/keywords.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/browser/keywords.lua#L64){target="_blank"} |

---


### [save](#save)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.keywords.save(preset) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves a Keyword preset.                                                                     |
| **Parameters**                              | <ul><li>preset - A preset number between 1 and the value of `plugins.finalcutpro.browser.keywords.NUMBER_OF_PRESETS`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/browser/keywords.lua line 32](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/browser/keywords.lua#L32){target="_blank"} |

---

