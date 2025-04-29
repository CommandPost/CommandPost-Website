# hs.hid

HID interface for Hammerspoon, controls and queries caps lock state

Portions sourced from (https://discussions.apple.com/thread/7094207).

---

## Submodules
 * [hs.hid.led](hs.hid.led.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [get](#get)
 * [set](#set)
 * [toggle](#toggle)


---

## API Documentation

#### Functions


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hid.capslock.get() -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks the state of the caps lock via HID                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>true if on, false if off</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/hid/hid.lua line 16](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hid/hid.lua#L16) |

---


### [set](#set)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hid.capslock.set(state) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Assigns capslock to the desired state                                                                     |
| **Parameters**                              | <ul><li>state - A boolean indicating desired state</li></ul> |
| **Returns**                                 | <ul><li>true if on, false if off</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/hid/hid.lua line 42](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hid/hid.lua#L42) |

---


### [toggle](#toggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hid.capslock.toggle() -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggles the state of caps lock via HID                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>true if on, false if off</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/hid/hid.lua line 29](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hid/hid.lua#L29) |

---

