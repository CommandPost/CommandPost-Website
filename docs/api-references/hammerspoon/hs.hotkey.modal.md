# hs.hotkey.modal

Create/manage modal keyboard shortcut environments

Usage:
```lua
k = hs.hotkey.modal.new('cmd-shift', 'd')
function k:entered() hs.alert'Entered mode' end
function k:exited()  hs.alert'Exited mode'  end
k:bind('', 'escape', function() k:exit() end)
k:bind('', 'J', 'Pressed J',function() print'let the record show that J was pressed' end)```

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [bind](#bind)
 * [delete](#delete)
 * [enter](#enter)
 * [entered](#entered)
 * [exit](#exit)
 * [exited](#exited)


---

## API Documentation

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.modal.new(mods, key, message) -> hs.hotkey.modal object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new modal state, optionally with a global keyboard combination to trigger it                                                                     |
| **Parameters**                              | <ul><li>mods - A table or a string containing (as elements, or as substrings with any separator) the keyboard modifiers required, which should be zero or more of the following:
  "cmd", "command" or "⌘"
  "ctrl", "control" or "⌃"
  "alt", "option" or "⌥"
  "shift" or "⇧"</li><li>key - A string containing the name of a keyboard key (as found in [hs.keycodes.map](hs.keycodes.html#map) ), or a raw keycode number</li><li>message - A string containing a message to be displayed via `hs.alert()` when the hotkey has been triggered, or nil for no alert</li></ul> |
| **Returns**                                 | <ul><li>A new `hs.hotkey.modal` object</li></ul>          |
| **Notes**                                   | <ul><li>If `key` is nil, no global hotkey will be registered (all other parameters will be ignored)</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/hotkey/hotkey.lua line 552](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hotkey/hotkey.lua#L552) |

---

#### Methods


### [bind](#bind)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.modal:bind(mods, key, message, pressedfn, releasedfn, repeatfn) -> hs.hotkey.modal object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a hotkey that is enabled/disabled as the modal is entered/exited                                                                     |
| **Parameters**                              | <ul><li>mods - A table or a string containing (as elements, or as substrings with any separator) the keyboard modifiers required, which should be zero or more of the following:
  "cmd", "command" or "⌘"
  "ctrl", "control" or "⌃"
  "alt", "option" or "⌥"
  "shift" or "⇧"</li><li>key - A string containing the name of a keyboard key (as found in [hs.keycodes.map](hs.keycodes.html#map) ), or a raw keycode number</li><li>message - A string containing a message to be displayed via `hs.alert()` when the hotkey has been triggered, or nil for no alert</li><li>pressedfn - A function that will be called when the hotkey has been pressed, or nil</li><li>releasedfn - A function that will be called when the hotkey has been released, or nil</li><li>repeatfn - A function that will be called when a pressed hotkey is repeating, or nil</li></ul> |
| **Returns**                                 | <ul><li>The `hs.hotkey.modal` object for method chaining</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/hotkey/hotkey.lua line 482](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hotkey/hotkey.lua#L482) |

---


### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.modal:delete()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deletes a modal hotkey object without calling :exited()                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/hotkey/hotkey.lua line 580](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hotkey/hotkey.lua#L580) |

---


### [enter](#enter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.modal:enter() -> hs.hotkey.modal object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enters a modal state                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.hotkey.modal` object for method chaining</li></ul>          |
| **Notes**                                   | <ul><li>This method will enable all of the hotkeys defined in the modal state via `hs.hotkey.modal:bind()`,</li><li>   and disable the hotkey that entered the modal state (if one was defined)</li><li>If the modal state was created with a keyboard combination, this method will be called automatically</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/hotkey/hotkey.lua line 506](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hotkey/hotkey.lua#L506) |

---


### [entered](#entered)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.modal:entered()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Optional callback for when a modal is entered                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This is a preexisting function that you should override if you need to use it; the default implementation does nothing.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/hotkey/hotkey.lua line 452](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hotkey/hotkey.lua#L452) |

---


### [exit](#exit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.modal:exit() -> hs.hotkey.modal object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Exits a modal state                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.hotkey.modal` object for method chaining</li></ul>          |
| **Notes**                                   | <ul><li>This method will disable all of the hotkeys defined in the modal state, and enable the hotkey for entering the modal state (if one was defined)</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/hotkey/hotkey.lua line 530](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hotkey/hotkey.lua#L530) |

---


### [exited](#exited)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hotkey.modal:exited()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Optional callback for when a modal is exited                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This is a preexisting function that you should override if you need to use it; the default implementation does nothing.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/hotkey/hotkey.lua line 467](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hotkey/hotkey.lua#L467) |

---

