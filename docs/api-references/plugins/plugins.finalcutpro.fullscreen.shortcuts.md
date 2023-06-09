# plugins.finalcutpro.fullscreen.shortcuts

Fullscreen Shortcuts

---

## API Overview
**Variables** - _Configurable values_
 * [enabled](#enabled)

**Functions** - _API calls offered directly by the extension_
 * [checkCommand](#checkcommand)
 * [ninjaKeyStroke](#ninjakeystroke)
 * [performCommand](#performcommand)
 * [update](#update)


---

## API Documentation

#### Variables


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.shortcuts.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is the module enabled?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/fullscreen/shortcuts.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/fullscreen/shortcuts.lua#L61) |

---

#### Functions


### [checkCommand](#checkcommand)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.shortcuts.checkCommand(whichModifier, whichKey) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a shortcut has been pressed, then processes.                                                                     |
| **Parameters**                              | <ul><li>whichModifier - Which modifier key to check.</li><li>whichKey - Which key to check.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/fullscreen/shortcuts.lua line 156](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/fullscreen/shortcuts.lua#L156) |

---


### [ninjaKeyStroke](#ninjakeystroke)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.shortcuts.ninjaKeyStroke(whichModifier, whichKey) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a Ninja Key Stoke.                                                                     |
| **Parameters**                              | <ul><li>whichModifier - Modifier Key</li><li>whichKey - Key</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/fullscreen/shortcuts.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/fullscreen/shortcuts.lua#L105) |

---


### [performCommand](#performcommand)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.shortcuts.performCommand(cmd, whichModifier, whichKey) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a command.                                                                     |
| **Parameters**                              | <ul><li>cmd - The Command.</li><li>whichModifier - Which modifier key to check.</li><li>whichKey - Which key to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/fullscreen/shortcuts.lua line 132](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/fullscreen/shortcuts.lua#L132) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.shortcuts.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggles the watches for monitoring fullscreen playback.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/fullscreen/shortcuts.lua line 34](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/fullscreen/shortcuts.lua#L34) |

---

