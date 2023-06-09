# hs.hotkey

Create and manage global keyboard shortcuts

## Submodules
 * [hs.hotkey.modal](hs.hotkey.modal.md)

## API Overview
### **Variables** - _Configurable values_
 * [alertDuration](#alertduration)

### **Functions** - _API calls offered directly by the extension_
 * [assignable](#assignable)
 * [deleteAll](#deleteall)
 * [disableAll](#disableall)
 * [getHotkeys](#gethotkeys)
 * [showHotkeys](#showhotkeys)
 * [systemAssigned](#systemassigned)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [bind](#bind)
 * [bindSpec](#bindspec)
 * [new](#new)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [delete](#delete)
 * [disable](#disable)
 * [enable](#enable)


## API Documentation

### Variables


### [alertDuration](#alertduration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.alertDuration`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Duration of the alert shown when a hotkey created with a `message` parameter is triggered, in seconds. Default is 1.                                                                     |

---
### Functions


### [assignable](#assignable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.assignable(mods, key) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Determines whether the hotkey combination can be assigned a callback through Hammerspoon.                                                                     |
| **Parameters**                              | <ul><li>mods - A table or a string containing (as elements, or as substrings with any separator) the keyboard modifiers required, which should be zero or more of the following:
  "cmd", "command" or "⌘"
  "ctrl", "control" or "⌃"
  "alt", "option" or "⌥"
  "shift" or "⇧"</li><li>key - A string containing the name of a keyboard key (as found in [hs.keycodes.map](hs.keycodes.html#map) ), or a raw keycode number</li></ul> |
| **Returns**                                 | <ul><li>a boolean value, true if the hotkey combination can be given an assignment by Hammerspoon or false if it cannot.</li></ul>          |
| **Notes**                                   | <ul><li>The most common reason a hotkey combination cannot be given an assignment by Hammerspoon is because it is in use by the Mac operating system -- see the Shortcuts tab of Keyboard in the System Preferences application or [hs.hotkey.systemAssigned](#systemAssigned).</li></ul>                |

---

### [deleteAll](#deleteall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.deleteAll(mods, key)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deletes all previously set callbacks for a given keyboard combination                                                                     |
| **Parameters**                              | <ul><li>mods - A table or a string containing (as elements, or as substrings with any separator) the keyboard modifiers required, which should be zero or more of the following:
  "cmd", "command" or "⌘"
  "ctrl", "control" or "⌃"
  "alt", "option" or "⌥"
  "shift" or "⇧"</li><li>key - A string containing the name of a keyboard key (as found in [hs.keycodes.map](hs.keycodes.html#map) ), or a raw keycode number</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [disableAll](#disableall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.disableAll(mods, key)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Disables all previously set callbacks for a given keyboard combination                                                                     |
| **Parameters**                              | <ul><li>mods - A table or a string containing (as elements, or as substrings with any separator) the keyboard modifiers required, which should be zero or more of the following:
  "cmd", "command" or "⌘"
  "ctrl", "control" or "⌃"
  "alt", "option" or "⌥"
  "shift" or "⇧"</li><li>key - A string containing the name of a keyboard key (as found in [hs.keycodes.map](hs.keycodes.html#map) ), or a raw keycode number</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getHotkeys](#gethotkeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.getHotkeys() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a list of all currently active hotkeys                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the hotkeys that are active, i.e. enabled and not "shadowed", in the current context</li><li>   (usually, the global hotkey context, but it could be a modal hotkey context). Every element in the list</li><li>   is a table with two fields:</li><li>  idx - a string describing the keyboard combination for the hotkey</li><li>  msg - the hotkey message, if provided when the hotkey was created (prefixed with the keyboard combination)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showHotkeys](#showhotkeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.showHotkeys(mods, key) -> hs.hotkey object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates (and enables) a hotkey that shows all currently active hotkeys (i.e. enabled and not "shadowed" in the current context) while pressed                                                                     |
| **Parameters**                              | <ul><li>mods - A table or a string containing (as elements, or as substrings with any separator) the keyboard modifiers required, which should be zero or more of the following:
  "cmd", "command" or "⌘"
  "ctrl", "control" or "⌃"
  "alt", "option" or "⌥"
  "shift" or "⇧"</li><li>key - A string containing the name of a keyboard key (as found in [hs.keycodes.map](hs.keycodes.html#map) ), or a raw keycode number</li></ul> |
| **Returns**                                 | <ul><li>The new `hs.hotkey` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [systemAssigned](#systemassigned)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.systemAssigned(mods, key) -> table | false`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Examine whether a potential hotkey is in use by the macOS system such as the Screen Capture, Universal Access, and Keyboard Navigation keys.                                                                     |
| **Parameters**                              | <ul><li>mods - A table or a string containing (as elements, or as substrings with any separator) the keyboard modifiers required, which should be zero or more of the following:
  "cmd", "command" or "⌘"
  "ctrl", "control" or "⌃"
  "alt", "option" or "⌥"
  "shift" or "⇧"</li><li>key - A string containing the name of a keyboard key (as found in [hs.keycodes.map](hs.keycodes.html#map) ), or a raw keycode number</li></ul> |
| **Returns**                                 | <ul><li>if the hotkey combination is in use by a system function, returns a table containing the following keys:</li><li>  keycode - the numeric keycode for the hotkey</li><li>  mods    - a numeric representation of the modifier flags for the hotkey</li><li>  enabled - a boolean indicating whether or not the key is currently enabled</li><li>if the hotkey combination is not in use by the operating system, returns the boolean value `false`</li></ul>          |
| **Notes**                                   | <ul><li>this is provided for informational purposes and does not provide a reliable test as to whether or not Hammerspoon can use the combination to create a custom hotkey -- some combinations which return a table can be over-ridden by Hammerspoon while others cannot.  See also [hs.hotkey.assignable](#assignable).</li></ul>                |

---
### Constructors


### [bind](#bind)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.bind(mods, key, [message,] pressedfn, releasedfn, repeatfn) -> hs.hotkey object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new hotkey and enables it immediately                                                                     |
| **Parameters**                              | <ul><li>mods - A table or a string containing (as elements, or as substrings with any separator) the keyboard modifiers required, which should be zero or more of the following:
  "cmd", "command" or "⌘"
  "ctrl", "control" or "⌃"
  "alt", "option" or "⌥"
  "shift" or "⇧"</li><li>key - A string containing the name of a keyboard key (as found in [hs.keycodes.map](hs.keycodes.html#map) ), or a raw keycode number</li><li>message - (optional) A string containing a message to be displayed via `hs.alert()` when the hotkey has been triggered; if omitted, no alert will be shown</li><li>pressedfn - A function that will be called when the hotkey has been pressed, or nil</li><li>releasedfn - A function that will be called when the hotkey has been released, or nil</li><li>repeatfn - A function that will be called when a pressed hotkey is repeating, or nil</li></ul> |
| **Returns**                                 | <ul><li>A new `hs.hotkey` object or nil if the hotkey could not be enabled</li></ul>          |
| **Notes**                                   | <ul><li>This function is just a wrapper that performs `hs.hotkey.new(...):enable()`</li><li>You can create multiple `hs.hotkey` objects for the same keyboard combination, but only one can be active</li><li>   at any given time - see `hs.hotkey:enable()`</li><li>If `message` is the empty string `""`, the alert will just show the triggered keyboard combination</li><li>If you don't want any alert, you must *actually* omit the `message` parameter; a `nil` in 3rd position</li><li>   will be interpreted as a missing `pressedfn`</li><li>You must pass at least one of `pressedfn`, `releasedfn` or `repeatfn`; to delete a hotkey, use `hs.hotkey:delete()`</li></ul>                |

---

### [bindSpec](#bindspec)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.bindSpec(keyspec, ...) -> hs.hotkey object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a hotkey and enables it immediately                                                                     |
| **Parameters**                              | <ul><li>keyspec - A table containing two items:
  first, a table containing keyboard modifiers, as specified in `hs.hotkey.bind()`
  second, a string containing the name of a keyboard key, as specified in `hs.hotkey.bind()`</li><li>... - All remaining arguments are as specified in `hs.hotkey.bind()`</li></ul> |
| **Returns**                                 | <ul><li>A new `hs.hotkey` object for method chaining</li></ul>          |
| **Notes**                                   | <ul><li>This function is just a wrapper that performs `hs.hotkey.bind(keyspec[1], keyspec[2], ...)`</li></ul>                |

---

### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.new(mods, key, [message,] pressedfn, releasedfn, repeatfn) -> hs.hotkey object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new hotkey                                                                     |
| **Parameters**                              | <ul><li>mods - A table or a string containing (as elements, or as substrings with any separator) the keyboard modifiers required, which should be zero or more of the following:
  "cmd", "command" or "⌘"
  "ctrl", "control" or "⌃"
  "alt", "option" or "⌥"
  "shift" or "⇧"</li><li>key - A string containing the name of a keyboard key (as found in [hs.keycodes.map](hs.keycodes.html#map) ), or a raw keycode number</li><li>message - (optional) A string containing a message to be displayed via `hs.alert()` when the hotkey has been triggered; if omitted, no alert will be shown</li><li>pressedfn - A function that will be called when the hotkey has been pressed, or nil</li><li>releasedfn - A function that will be called when the hotkey has been released, or nil</li><li>repeatfn - A function that will be called when a pressed hotkey is repeating, or nil</li></ul> |
| **Returns**                                 | <ul><li>A new `hs.hotkey` object or nil if the hotkey could not be enabled</li></ul>          |
| **Notes**                                   | <ul><li>You can create multiple `hs.hotkey` objects for the same keyboard combination, but only one can be active</li><li>   at any given time - see `hs.hotkey:enable()`</li><li>If `message` is the empty string `""`, the alert will just show the triggered keyboard combination</li><li>If you don't want any alert, you must *actually* omit the `message` parameter; a `nil` in 3rd position</li><li>   will be interpreted as a missing `pressedfn`</li><li>You must pass at least one of `pressedfn`, `releasedfn` or `repeatfn`; to delete a hotkey, use `hs.hotkey:delete()`</li></ul>                |

---
### Methods


### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey:delete()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Disables and deletes a hotkey object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [disable](#disable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey:disable() -> hs.hotkey object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Disables a hotkey object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.hotkey` object for method chaining</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [enable](#enable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey:enable() -> hs.hotkey object | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables a hotkey object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.hotkey` object for method chaining or nil if the hotkey could not be enabled for some reason.</li></ul>          |
| **Notes**                                   | <ul><li>When you enable a hotkey that uses the same keyboard combination as another previously-enabled hotkey, the old</li><li>   one will stop working as it's being "shadowed" by the new one. As soon as the new hotkey is disabled or deleted</li><li>   the old one will trigger again.</li></ul>                |

---
