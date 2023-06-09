# hs.hid.led

HID LED interface for Hammerspoon, controls the state of keyboard LEDs

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [set](#set)


---

## API Documentation

#### Functions


### [set](#set)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hid.led.set(name, state) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Assigns HID LED to the desired state                                                                     |
| **Parameters**                              | <ul><li>name  - LED name: "caps", "scroll" or "num"</li><li>state - A boolean indicating desired state</li></ul> |
| **Returns**                                 | <ul><li>true if success, false if error</li></ul>          |
| **Notes**                                   | <ul><li>This function controls the LED state only, to modify capslock state, use hs.hid.capslock.set</li></ul> |

---

