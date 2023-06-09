# hs.milight

Simple controls for the MiLight LED WiFi bridge (also known as LimitlessLED and EasyBulb)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [maxBrightness](#maxbrightness)
 * [minBrightness](#minbrightness)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [delete](#delete)
 * [disco](#disco)
 * [send](#send)
 * [zoneBrightness](#zonebrightness)
 * [zoneColor](#zonecolor)
 * [zoneOff](#zoneoff)
 * [zoneOn](#zoneon)
 * [zoneWhite](#zonewhite)


---

## API Documentation

### Constants


### [maxBrightness](#maxbrightness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.milight.maxBrightness`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Specifies the maximum brightness value that can be used. Defaults to 25                                                                     |

---

### [minBrightness](#minbrightness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.milight.minBrightness`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Specifies the minimum brightness value that can be used. Defaults to 0                                                                     |

---
### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.milight.new(ip[, port]) -> bridge`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new bridge object, which will be connected to the supplied IP address and port                                                                     |
| **Parameters**                              | <ul><li>ip - A string containing the IP address of the MiLight WiFi bridge device. For convenience this can be the broadcast address of your network (e.g. 192.168.0.255)</li><li>port - An optional number containing the UDP port to talk to the bridge on. Defaults to 8899</li></ul> |
| **Returns**                                 | <ul><li>An `hs.milight` object</li></ul>          |
| **Notes**                                   | <ul><li>You can not use 255.255.255.255 as the IP address, to do so requires elevated privileges for the Hammerspoon process</li></ul>                |

---
### Methods


### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.milight:delete()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deletes an `hs.milight` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [disco](#disco)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.milight:disco() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Cycles through the disco modes                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the command was sent correctly, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [send](#send)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.milight:send(cmd[, value]) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends a command to the bridge                                                                     |
| **Parameters**                              | <ul><li>cmd - A command from the `hs.milight.cmd` table</li><li>value - An optional value, if appropriate for the command (defaults to 0x00)</li></ul> |
| **Returns**                                 | <ul><li>True if the command was sent, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>This is a low level command, you typically should use a specific method for the operation you want to perform</li></ul>                |

---

### [zoneBrightness](#zonebrightness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.milight:zoneBrightness(zone, value) -> integer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets brightness for the specified zone                                                                     |
| **Parameters**                              | <ul><li>zone - A number specifying which zone to operate on. 0 for all zones, 1-4 for zones one through four</li><li>value - A number containing the brightness level to set, between `hs.milight.minBrightness` and `hs.milight.maxBrightness`</li></ul> |
| **Returns**                                 | <ul><li>A number containing the value that was sent to the WiFi bridge, or -1 if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [zoneColor](#zonecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.milight:zoneColor(zone, value) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets RGB color for the specified zone                                                                     |
| **Parameters**                              | <ul><li>zone - A number specifying which zone to operate on. 0 for all zones, 1-4 for zones one through four</li><li>value - A number between 0 and 255 that represents a color</li></ul> |
| **Returns**                                 | <ul><li>True if the command was sent correctly, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>The color value is not a normal RGB colour, but rather a lookup in an internal table in the light hardware. While any number between 0 and 255 is valid, there are some useful values worth knowing:</li><li> 00 - Violet</li><li> 16 - Royal Blue</li><li> 32 - Baby Blue</li><li> 48 - Aqua</li><li> 64 - Mint Green</li><li> 80 - Seafoam Green</li><li> 96 - Green</li><li> 112 - Lime Green</li><li> 128 - Yellow</li><li> 144 - Yellowy Orange</li><li> 160 - Orange</li><li> 176 - Red</li><li> 194 - Pink</li><li> 210 - Fuchsia</li><li> 226 - Lilac</li><li> 240 - Lavender</li></ul>                |

---

### [zoneOff](#zoneoff)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.milight:zoneOff(zone) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Turns off the specified zone                                                                     |
| **Parameters**                              | <ul><li>zone - A number specifying which zone to operate on. 0 for all zones, 1-4 for zones one through four</li></ul> |
| **Returns**                                 | <ul><li>True if the command was sent correctly, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [zoneOn](#zoneon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.milight:zoneOn(zone) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Turns on the specified zone                                                                     |
| **Parameters**                              | <ul><li>zone - A number specifying which zone to operate on. 0 for all zones, 1-4 for zones one through four</li></ul> |
| **Returns**                                 | <ul><li>True if the command was sent correctly, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [zoneWhite](#zonewhite)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.milight:zoneWhite(zone) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the specified zone to white                                                                     |
| **Parameters**                              | <ul><li>zone - A number specifying which zone to operate on. 0 for all zones, 1-4 for zones one through four</li></ul> |
| **Returns**                                 | <ul><li>True if the command was sent correctly, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
