# hs.brightness

Inspect/manipulate display brightness

Home: https://github.com/asmagill/mjolnir_asm.sys

This module is based primarily on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [ambient](#ambient)
 * [get](#get)
 * [set](#set)


---

## API Documentation

#### Functions


### [ambient](#ambient)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.brightness.ambient() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the current ambient brightness                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the current ambient brightness, measured in lux. If an error occurred, the number will be -1</li></ul>          |
| **Notes**                                   | <ul><li>Even though external Apple displays include an ambient light sensor, their data is typically not available, so this function will likely only be useful to MacBook users</li><li></li><li>On Silicon based macs, this function uses a method similar to that used by `corebrightnessdiag` to retrieve the aggregate lux as reported to `sysdiagnose`.</li><li>On Intel based macs, the raw sensor data is converted to lux via an algorithm used by Mozilla Firefox and is not guaranteed to give an accurate lux value.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/brightness/libbrightness.m line 18](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/brightness/libbrightness.m#L18) |

---


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.brightness.get() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current brightness of the display                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the brightness of the display, between 0 and 100</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/brightness/libbrightness.m line 120](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/brightness/libbrightness.m#L120) |

---


### [set](#set)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.brightness.set(brightness) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the display brightness                                                                     |
| **Parameters**                              | <ul><li>brightness - A number between 0 and 100</li></ul> |
| **Returns**                                 | <ul><li>True if the brightness was set, false if not</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/brightness/libbrightness.m line 82](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/brightness/libbrightness.m#L82) |

---

