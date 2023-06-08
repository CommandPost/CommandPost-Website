# [docs](index.md) » cp.apple.commandeditor
---

Functions to control and manage Apple's Command Editor - used in Final Cut Pro,
Motion and Compressor.

## API Overview
* Constants - Useful values which cannot be changed
 * [padKeys](#padKeys)
 * [supportedModifiers](#supportedModifiers)
* Functions - API calls offered directly by the extension
 * [characterStringToKeyCode](#characterStringToKeyCode)
 * [keypadCharacterToKeyCode](#keypadCharacterToKeyCode)
 * [modifierMaskToModifiers](#modifierMaskToModifiers)
 * [modifierMatch](#modifierMatch)
 * [shortcutsFromCommandSet](#shortcutsFromCommandSet)
 * [translateModifiers](#translateModifiers)

## API Documentation

### Constants

| [padKeys](#padKeys)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.padKeys -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | List of number keys on the number pad. Also mapped with the key name set to `true` for lookup purposes.                                                                     |

| [supportedModifiers](#supportedModifiers)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.supportedModifiers -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The list of supported modifiers                                                                     |

### Functions

| [characterStringToKeyCode](#characterStringToKeyCode)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.characterStringToKeyCode() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Translate Keyboard Character Strings from Command Set Format into Hammerspoon Format.                                                                     |
| **Parameters**                              | <ul><li>input - Character String</li></ul> |
| **Returns**                                 | <ul><li>Keycode as String or ""</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [keypadCharacterToKeyCode](#keypadCharacterToKeyCode)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.keypadCharacterToKeyCode() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Translate Keyboard Keypad Character Strings from Command Set Format into Hammerspoon Format.                                                                     |
| **Parameters**                              | <ul><li>input - Character String</li></ul> |
| **Returns**                                 | <ul><li>string or nil</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [modifierMaskToModifiers](#modifierMaskToModifiers)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.modifierMaskToModifiers() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Translate Keyboard Modifiers from Apple's Property List Format into Hammerspoon Format.                                                                     |
| **Parameters**                              | <ul><li>value - Modifiers String</li></ul> |
| **Returns**                                 | <ul><li>A table of modifier strings.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [modifierMatch](#modifierMatch)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.modifierMatch(inputA, inputB) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Compares two modifier tables.                                                                     |
| **Parameters**                              | <ul><li>inputA - table of modifiers</li><li>inputB - table of modifiers</li></ul> |
| **Returns**                                 | <ul><li>`true` if there's a match otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>This function only takes into account 'ctrl', 'alt', 'cmd', 'shift'.</li></ul>                |

| [shortcutsFromCommandSet](#shortcutsFromCommandSet)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.shortcutsFromCommandSet(id, commandSet) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a specific command from a specified Command Set and returns a table of Shortcuts.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the command you want to get.</li><li>commandSet - A table containing an entire Command Set.</li></ul> |
| **Returns**                                 | <ul><li>A table of shortcuts for a specific command.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [translateModifiers](#translateModifiers)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.translateModifiers() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Translate Keyboard Modifiers from Command Set Format into Hammerspoon Format.                                                                     |
| **Parameters**                              | <ul><li>input - Modifiers String</li></ul> |
| **Returns**                                 | <ul><li>table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

