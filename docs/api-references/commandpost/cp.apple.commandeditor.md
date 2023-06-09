# cp.apple.commandeditor

Functions to control and manage Apple's Command Editor - used in Final Cut Pro,
Motion and Compressor.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [padKeys](#padkeys)
 * [supportedModifiers](#supportedmodifiers)

**Functions** - _API calls offered directly by the extension_
 * [characterStringToKeyCode](#characterstringtokeycode)
 * [keypadCharacterToKeyCode](#keypadcharactertokeycode)
 * [modifierMaskToModifiers](#modifiermasktomodifiers)
 * [modifierMatch](#modifiermatch)
 * [shortcutsFromCommandSet](#shortcutsfromcommandset)
 * [translateModifiers](#translatemodifiers)


---

## API Documentation

#### Constants


### [padKeys](#padkeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.padKeys -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | List of number keys on the number pad. Also mapped with the key name set to `true` for lookup purposes.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/commandeditor/init.lua line 25](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/commandeditor/init.lua#L25){target="_blank"} |

---


### [supportedModifiers](#supportedmodifiers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.supportedModifiers -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The list of supported modifiers                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/commandeditor/init.lua line 35](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/commandeditor/init.lua#L35){target="_blank"} |

---

#### Functions


### [characterStringToKeyCode](#characterstringtokeycode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.characterStringToKeyCode() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Translate Keyboard Character Strings from Command Set Format into Hammerspoon Format.                                                                     |
| **Parameters**                              | <ul><li>input - Character String</li></ul> |
| **Returns**                                 | <ul><li>Keycode as String or ""</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/commandeditor/init.lua line 79](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/commandeditor/init.lua#L79){target="_blank"} |

---


### [keypadCharacterToKeyCode](#keypadcharactertokeycode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.keypadCharacterToKeyCode() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Translate Keyboard Keypad Character Strings from Command Set Format into Hammerspoon Format.                                                                     |
| **Parameters**                              | <ul><li>input - Character String</li></ul> |
| **Returns**                                 | <ul><li>string or nil</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/commandeditor/init.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/commandeditor/init.lua#L93){target="_blank"} |

---


### [modifierMaskToModifiers](#modifiermasktomodifiers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.modifierMaskToModifiers() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Translate Keyboard Modifiers from Apple's Property List Format into Hammerspoon Format.                                                                     |
| **Parameters**                              | <ul><li>value - Modifiers String</li></ul> |
| **Returns**                                 | <ul><li>A table of modifier strings.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/commandeditor/init.lua line 155](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/commandeditor/init.lua#L155){target="_blank"} |

---


### [modifierMatch](#modifiermatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.modifierMatch(inputA, inputB) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Compares two modifier tables.                                                                     |
| **Parameters**                              | <ul><li>inputA - table of modifiers</li><li>inputB - table of modifiers</li></ul> |
| **Returns**                                 | <ul><li>`true` if there's a match otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>This function only takes into account 'ctrl', 'alt', 'cmd', 'shift'.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/commandeditor/init.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/commandeditor/init.lua#L128){target="_blank"} |

---


### [shortcutsFromCommandSet](#shortcutsfromcommandset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.shortcutsFromCommandSet(id, commandSet) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a specific command from a specified Command Set and returns a table of Shortcuts.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the command you want to get.</li><li>commandSet - A table containing an entire Command Set.</li></ul> |
| **Returns**                                 | <ul><li>A table of shortcuts for a specific command.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/commandeditor/init.lua line 187](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/commandeditor/init.lua#L187){target="_blank"} |

---


### [translateModifiers](#translatemodifiers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.commandeditor.translateModifiers() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Translate Keyboard Modifiers from Command Set Format into Hammerspoon Format.                                                                     |
| **Parameters**                              | <ul><li>input - Modifiers String</li></ul> |
| **Returns**                                 | <ul><li>table</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/commandeditor/init.lua line 110](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/commandeditor/init.lua#L110){target="_blank"} |

---

