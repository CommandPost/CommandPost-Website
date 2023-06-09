# cp.commands.shortcut

Shortcut Commands

---

## Submodules
 * [cp.commands.shortcut.builder](cp.commands.shortcut.builder.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [build](#build)
 * [new](#new)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [isEnabled](#isenabled)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [bind](#bind)
 * [delete](#delete)
 * [disable](#disable)
 * [enable](#enable)
 * [getKeyCode](#getkeycode)
 * [getModifiers](#getmodifiers)
 * [trigger](#trigger)
 * [unbind](#unbind)


---

## API Documentation

#### Functions


### [build](#build)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut.build(receiverFn) -> cp.commands.shortcut.builder`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new shortcut builder.                                                                     |
| **Parameters**                              | <ul><li>`receiverFn`     - (optional) a function which will get passed the shortcut when the build is complete.</li></ul> |
| **Returns**                                 | <ul><li>`shortcut.builder` which can be used to create the shortcut.</li></ul>          |
| **Notes**                                   | <ul><li>If provided, the receiver function will be called when the shortcut has been configured, and passed the new</li><li>  shortcut. The result of that function will be returned to the next stage.</li><li>  If no `receiverFn` is provided, the shortcut will be returned directly.</li><li></li><li>  The builder is additive. You can create a complex keystroke combo by</li><li>  chaining the shortcut names together.</li><li></li><li>  For example:</li><li></li><li>    `local myShortcut = shortcut.build():cmd():alt("x")`</li><li></li><li>  Alternately, provide a `receiver` function and it will get passed the shortcut instead:</li><li></li><li>    `shortcut.build(function(shortcut) self._myShortcut = shortcut end):cmd():alt("x")`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/commands/shortcut.lua line 69](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/shortcut.lua#L69) |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut.new(modifiers, keyCode) -> shortcut`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new keyboard shortcut, attached to the specified `hs.commands.command`                                                                     |
| **Parameters**                              | <ul><li>`modifiers`  - The modifiers.</li><li>`keyCode`    - The key code.</li></ul> |
| **Returns**                                 | <ul><li>shortcut - The shortcut that was created.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/commands/shortcut.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/shortcut.lua#L51) |

---

#### Fields


### [isEnabled](#isenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut:isEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If `true`, the shortcut is enabled.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/commands/shortcut.lua line 124](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/shortcut.lua#L124) |

---

#### Methods


### [bind](#bind)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut:bind(pressedFn, releasedFn, repeatedFn) -> shortcut`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | This function binds the shortcut to a hotkey, with the specified callback functions for `pressedFn`, `releasedFn` and `repeatedFn`.                                                                     |
| **Parameters**                              | <ul><li>`pressedFn`  - (optional) If present, this is called when the shortcut combo is pressed.</li><li>`releasedFn` - (optional) If present, this is called when the shortcut combo is released.</li><li>`repeatedFn` - (optional) If present, this is called when the shortcut combo is repeated.</li></ul> |
| **Returns**                                 | <ul><li>`self`</li></ul>          |
| **Notes**                                   | <ul><li>If the shortcut is enabled, the hotkey will also be enabled at this point.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/commands/shortcut.lua line 169](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/shortcut.lua#L169) |

---


### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut:delete() -> shortcut`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deletes a shortcut.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`self`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/commands/shortcut.lua line 231](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/shortcut.lua#L231) |

---


### [disable](#disable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut:disable() -> shortcut`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | This disables the shortcut. If a hotkey has been bound, it will be disabled also.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`self`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/commands/shortcut.lua line 155](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/shortcut.lua#L155) |

---


### [enable](#enable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut:enable() -> shortcut`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | This enables the shortcut. If a hotkey has been bound, it will be enabled also.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`self`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/commands/shortcut.lua line 141](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/shortcut.lua#L141) |

---


### [getKeyCode](#getkeycode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut:getKeyCode() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a string containing the keycode of the shortcut.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`string` containing the keycode of the shortcut.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/commands/shortcut.lua line 111](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/shortcut.lua#L111) |

---


### [getModifiers](#getmodifiers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut:getModifiers() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table containing the modifiers for a shortcut.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`table` containing the modifiers of the shortcut.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/commands/shortcut.lua line 98](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/shortcut.lua#L98) |

---


### [trigger](#trigger)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut:trigger([app]) -> shortcut`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | This will trigger the keystroke specified in the shortcut.                                                                     |
| **Parameters**                              | <ul><li>app - An optional `hs.application` object.</li></ul> |
| **Returns**                                 | <ul><li>`self`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/commands/shortcut.lua line 244](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/shortcut.lua#L244) |

---


### [unbind](#unbind)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut:unbind() -> shortcut`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Unbinds a shortcut.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`self`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/commands/shortcut.lua line 212](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/shortcut.lua#L212) |

---

