# hs.eventtap

Tap into input events (mouse, keyboard, trackpad) for observation and possibly overriding them
It also provides convenience wrappers for sending mouse and keyboard events. If you need to construct finely controlled mouse/keyboard events, see hs.eventtap.event

This module is based primarily on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).

---

## Submodules
 * [hs.eventtap.event](hs.eventtap.event.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [checkKeyboardModifiers](#checkkeyboardmodifiers)
 * [checkMouseButtons](#checkmousebuttons)
 * [doubleClickInterval](#doubleclickinterval)
 * [isSecureInputEnabled](#issecureinputenabled)
 * [keyRepeatDelay](#keyrepeatdelay)
 * [keyRepeatInterval](#keyrepeatinterval)
 * [keyStroke](#keystroke)
 * [keyStrokes](#keystrokes)
 * [leftClick](#leftclick)
 * [middleClick](#middleclick)
 * [otherClick](#otherclick)
 * [rightClick](#rightclick)
 * [scrollWheel](#scrollwheel)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [isEnabled](#isenabled)
 * [start](#start)
 * [stop](#stop)


---

## API Documentation

#### Functions


### [checkKeyboardModifiers](#checkkeyboardmodifiers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.checkKeyboardModifiers([raw]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing the current key modifiers being pressed or in effect *at this instant* for the keyboard most recently used.                                                                     |
| **Parameters**                              | <ul><li>raw - an optional boolean value which, if true, includes the _raw key containing the numeric representation of all of the keyboard/modifier flags.</li></ul> |
| **Returns**                                 | <ul><li>Returns a table containing boolean values indicating which keyboard modifiers were held down when the function was invoked; The possible keys are:</li><li>   cmd (or ⌘)</li><li>   alt (or ⌥)</li><li>   shift (or ⇧)</li><li>   ctrl (or ⌃)</li><li>   capslock</li><li>   fn</li><li>  and optionally</li><li>   _raw - a numeric representation of the numeric representation of all of the keyboard/modifier flags.</li></ul>          |
| **Notes**                                   | <ul><li>This is an instantaneous poll of the current keyboard modifiers for the most recently used keyboard, not a callback.  This is useful primarily in conjunction with other modules, such as `hs.menubar`, when a callback is already in progress or waiting for an event callback is not practical or possible.</li><li>the numeric value returned is useful if you need to detect device dependent flags or flags which we normally ignore because they are not present (or are accessible another way) on most keyboards.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap.m line 276](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap.m#L276) |

---


### [checkMouseButtons](#checkmousebuttons)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.checkMouseButtons() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing the current mouse buttons being pressed *at this instant*.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns an array containing indices starting from 1 up to the highest numbered button currently being pressed where the index is `true` if the button is currently pressed or `false` if it is not.</li><li>Special hash tag synonyms for `left` (button 1), `right` (button 2), and `middle` (button 3) are also set to true if these buttons are currently being pressed.</li></ul>          |
| **Notes**                                   | <ul><li>This is an instantaneous poll of the current mouse buttons, not a callback.  This is useful primarily in conjunction with other modules, such as `hs.menubar`, when a callback is already in progress or waiting for an event callback is not practical or possible.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap.m line 353](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap.m#L353) |

---


### [doubleClickInterval](#doubleclickinterval)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.doubleClickInterval() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the system-wide setting for the delay between two clicks, to register a double click event                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the maximum number of seconds between two mouse click events, for a double click event to be registered</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap.m line 422](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap.m#L422) |

---


### [isSecureInputEnabled](#issecureinputenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.isSecureInputEnabled() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if macOS is preventing keyboard events from being sent to event taps                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if secure input is enabled, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>If secure input is enabled, Hammerspoon is not able to intercept keyboard events</li><li>Secure input is enabled generally only in situations where an password field is focused in a web browser, system dialog or terminal</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap.m line 330](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap.m#L330) |

---


### [keyRepeatDelay](#keyrepeatdelay)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.keyRepeatDelay() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the system-wide setting for the delay before keyboard repeat events begin                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the number of seconds before repeat events begin, after a key is held down</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap.m line 408](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap.m#L408) |

---


### [keyRepeatInterval](#keyrepeatinterval)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.keyRepeatInterval() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the system-wide setting for the interval between repeated keyboard events                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the number of seconds between keyboard events, if a key is held down</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap.m line 394](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap.m#L394) |

---


### [keyStroke](#keystroke)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.keyStroke(modifiers, character[, delay, application])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates and emits a single keystroke event pair for the supplied keyboard modifiers and character                                                                     |
| **Parameters**                              | <ul><li>modifiers - A table containing the keyboard modifiers to apply ("fn", "ctrl", "alt", "cmd", "shift", or their Unicode equivalents)</li><li>character - A string containing a character to be emitted</li><li>delay - An optional delay (in microseconds) between key down and up event. Defaults to 200000 (i.e. 200ms)</li><li>application - An optional hs.application object to send the keystroke to</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function is ideal for sending single keystrokes with a modifier applied (e.g. sending ⌘-v to paste, with `hs.eventtap.keyStroke({"cmd"}, "v")`). If you want to emit multiple keystrokes for typing strings of text, see `hs.eventtap.keyStrokes()`</li><li>Note that invoking this function with a table (empty or otherwise) for the `modifiers` argument will force the release of any modifier keys which have been explicitly created by [hs.eventtap.event.newKeyEvent](#newKeyEvent) and posted that are still in the "down" state. An explicit `nil` for this argument will not (i.e. the keystroke will inherit any currently "down" modifiers)</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/eventtap.lua line 242](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/eventtap.lua#L242) |

---


### [keyStrokes](#keystrokes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.keyStrokes(text[, application])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates and emits keystroke events for the supplied text                                                                     |
| **Parameters**                              | <ul><li>text - A string containing the text to be typed</li><li>application - An optional hs.application object to send the keystrokes to</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If you want to send a single keystroke with keyboard modifiers (e.g. sending ⌘-v to paste), see `hs.eventtap.keyStroke()`</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap.m line 81](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap.m#L81) |

---


### [leftClick](#leftclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.leftClick(point[, delay])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a left mouse click event at the specified point                                                                     |
| **Parameters**                              | <ul><li>point - A table with keys `{x, y}` indicating the location where the mouse event should occur</li><li>delay - An optional delay (in microseconds) between mouse down and up event. Defaults to 200000 (i.e. 200ms)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This is a wrapper around `hs.eventtap.event.newMouseEvent` that sends `leftmousedown` and `leftmouseup` events)</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/eventtap.lua line 147](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/eventtap.lua#L147) |

---


### [middleClick](#middleclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.middleClick(point[, delay])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a middle mouse click event at the specified point                                                                     |
| **Parameters**                              | <ul><li>point  - A table with keys `{x, y}` indicating the location where the mouse event should occur</li><li>delay  - An optional delay (in microseconds) between mouse down and up event. Defaults to 200000 (i.e. 200ms)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function is just a wrapper which calls `hs.eventtap.otherClick(point, delay, 2)` and is included solely for backwards compatibility.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/eventtap.lua line 225](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/eventtap.lua#L225) |

---


### [otherClick](#otherclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.otherClick(point[, delay][, button])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates an "other" mouse click event at the specified point                                                                     |
| **Parameters**                              | <ul><li>point  - A table with keys `{x, y}` indicating the location where the mouse event should occur</li><li>delay  - An optional delay (in microseconds) between mouse down and up event. Defaults to 200000 (i.e. 200ms)</li><li>button - An optional integer, default 2, between 2 and 31 specifying the button number to be pressed.  If this parameter is specified then `delay` must also be specified, though you may specify it as `nil` to use the default.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This is a wrapper around `hs.eventtap.event.newMouseEvent` that sends `otherMouseDown` and `otherMouseUp` events)</li><li>macOS recognizes up to 32 distinct mouse buttons, though few mouse devices have more than 3.  The left mouse button corresponds to button number 0 and the right mouse button corresponds to 1;  distinct events are used for these mouse buttons, so you should use `hs.eventtap.leftClick` and `hs.eventtap.rightClick` respectively.  All other mouse buttons are coalesced into the `otherMouse` events and are distinguished by specifying the specific button with the `mouseEventButtonNumber` property, which this function does for you.</li><li>The specific purpose of mouse buttons greater than 2 varies by hardware and application (typically they are not present on a mouse and have no effect in an application)</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/eventtap.lua line 193](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/eventtap.lua#L193) |

---


### [rightClick](#rightclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.rightClick(point[, delay])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a right mouse click event at the specified point                                                                     |
| **Parameters**                              | <ul><li>point - A table with keys `{x, y}` indicating the location where the mouse event should occur</li><li>delay - An optional delay (in microseconds) between mouse down and up event. Defaults to 200000 (i.e. 200ms)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This is a wrapper around `hs.eventtap.event.newMouseEvent` that sends `rightmousedown` and `rightmouseup` events)</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/eventtap.lua line 170](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/eventtap.lua#L170) |

---


### [scrollWheel](#scrollwheel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.scrollWheel(offsets, modifiers, unit) -> event`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates and emits a scroll wheel event                                                                     |
| **Parameters**                              | <ul><li>offsets - A table containing the {horizontal, vertical} amount to scroll. Positive values scroll up or left, negative values scroll down or right.</li><li>mods - A table containing zero or more of the following:
  cmd
  alt
  shift
  ctrl
  fn</li><li>unit - An optional string containing the name of the unit for scrolling. Either "line" (the default) or "pixel"</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/eventtap.lua line 281](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/eventtap.lua#L281) |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.new(types, fn) -> eventtap`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Create a new event tap object                                                                     |
| **Parameters**                              | <ul><li>types - A table that should contain values from `hs.eventtap.event.types`</li><li>fn - A function that will be called when the specified event types occur. The function should take a single parameter, which will be an event object. It can optionally return two values. Firstly, a boolean, true if the event should be deleted, false if it should propagate to any other applications watching for that event. Secondly, a table of events to post.</li></ul> |
| **Returns**                                 | <ul><li>An event tap object</li></ul>          |
| **Notes**                                   | <ul><li>If you specify the argument `types` as the special table {"all"[, events to ignore]}, then *all* events (except those you optionally list *after* the "all" string) will trigger a callback, even events which are not defined in the [Quartz Event Reference](https://developer.apple.com/library/mac/documentation/Carbon/Reference/QuartzEventServicesRef/Reference/reference.html).</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap.m line 146](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap.m#L146) |

---

#### Methods


### [isEnabled](#isenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap:isEnabled() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Determine whether or not an event tap object is enabled.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the event tap is enabled or false if it is not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap.m line 261](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap.m#L261) |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap:start()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts an event tap                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The event tap object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap.m line 196](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap.m#L196) |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap:stop()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops an event tap                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The event tap object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap.m line 236](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap.m#L236) |

---

