# plugins.finalcutpro.fullscreen.shortcuts

Fullscreen Shortcuts

## API Overview
* Variables - Configurable values
 * [enabled](#enabled)
* Functions - API calls offered directly by the extension
 * [checkCommand](#checkCommand)
 * [ninjaKeyStroke](#ninjaKeyStroke)
 * [performCommand](#performCommand)
 * [update](#update)

## API Documentation

### Variables

| [enabled](#enabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.shortcuts.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is the module enabled?                                                                     |

### Functions

| [checkCommand](#checkCommand)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.shortcuts.checkCommand(whichModifier, whichKey) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a shortcut has been pressed, then processes.                                                                     |
| **Parameters**                              | <ul><li>whichModifier - Which modifier key to check.</li><li>whichKey - Which key to check.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [ninjaKeyStroke](#ninjaKeyStroke)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.shortcuts.ninjaKeyStroke(whichModifier, whichKey) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a Ninja Key Stoke.                                                                     |
| **Parameters**                              | <ul><li>whichModifier - Modifier Key</li><li>whichKey - Key</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [performCommand](#performCommand)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.shortcuts.performCommand(cmd, whichModifier, whichKey) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a command.                                                                     |
| **Parameters**                              | <ul><li>cmd - The Command.</li><li>whichModifier - Which modifier key to check.</li><li>whichKey - Which key to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [update](#update)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.shortcuts.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggles the watches for monitoring fullscreen playback.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

