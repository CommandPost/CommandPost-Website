# hs.blackmagic

Support for the Blackmagic DaVinci Resolve Speed Editor Keyboard and Editor Keyboard.

Example Usage:
```lua
blackmagic = nil

local callback = function(obj, buttonID, pressed, mode, value)
    if buttonID == "JOG WHEEL" then
        print("Jog Wheel Mode " .. mode .. ", value: " .. value)
    else
        -- If Jog Wheel button pressed, change jog wheel mode
        -- and activate the LED for that job wheel mode:
        if buttonID == "SHTL" or buttonID == "JOG" or buttonID == "SCRL" then
            local jogMode
            if buttonID == "SHTL" then jogMode = "RELATIVE" end
            if buttonID == "JOG" then jogMode = "ABSOLUTE" end
            if buttonID == "SCRL" then jogMode = "ABSOLUTE ZERO" end
            blackmagic:jogMode(jogMode)

            blackmagic:led({
                ["SHTL"] = buttonID == "SHTL",
                ["JOG"] = buttonID == "JOG",
                ["SCRL"] = buttonID == "SCRL"
            })
            return
        end

        -- If a normal button is pressed:
        if pressed then
            print(buttonID .. " pressed")
            blackmagic:led({[buttonID] = true})
        else
            print(buttonID .. " released")
            hs.timer.doAfter(5, function()
                blackmagic:led({[buttonID] = false})
            end)
        end
    end
end

local discoveryCallback = function(connected, device)
    if connected then
        print(string.format("Device Connected: %s - %s", device:deviceType(), device:serialNumber()))
        blackmagic = device
        blackmagic:led({["SHTL"] = true}) -- Defaults to SHTL jog mode
        blackmagic:jogMode("RELATIVE")
        blackmagic:callback(callback)
    else
        print(string.format("Device Disconnected: %s - %s", device:deviceType(), device:serialNumber()))
    end
end

hs.blackmagic.init(discoveryCallback)
```

This extension was thrown together by [Chris Hocking](https://github.com/latenitefilms) for [CommandPost](http://commandpost.io).

This extension would not be possible without Sylvain Munaut's [genius work](https://github.com/smunaut/blackmagic-misc)
figuring out the authentication protocol.

This extension is based off [Chris Jones'](https://github.com/cmsj) [hs.streamdeck](http://www.hammerspoon.org/docs/hs.streamdeck.html) extension.

Special thanks to [David Peterson](https://github.com/randomeizer), Morten Bentsen, Håvard Njåstad and Sondre Tungesvik Njåstad.

This extension uses code based off Sylvain Munaut's [Python Scripts](https://github.com/smunaut/blackmagic-misc) under the following license:

Copyright 2021 Sylvain Munaut <tnt@246tNt.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [buttonNames](#buttonnames)
 * [deviceTypes](#devicetypes)
 * [jogModeNames](#jogmodenames)
 * [ledNames](#lednames)

**Functions** - _API calls offered directly by the extension_
 * [discoveryCallback](#discoverycallback)
 * [getDevice](#getdevice)
 * [init](#init)
 * [numDevices](#numdevices)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [battery](#battery)
 * [callback](#callback)
 * [deviceType](#devicetype)
 * [jogMode](#jogmode)
 * [led](#led)
 * [serialNumber](#serialnumber)


---

## API Documentation

#### Constants


### [buttonNames](#buttonnames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic.buttonNames`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table of the button names used.                                                                     |
| **Notes**                                   | - None |

---


### [deviceTypes](#devicetypes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic.deviceTypes`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table of the supported device types.                                                                     |
| **Notes**                                   | - None |

---


### [jogModeNames](#jogmodenames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic.jogModeNames`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table of the jog mode names used by each device type.                                                                     |
| **Notes**                                   | - None |

---


### [ledNames](#lednames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic.ledNames`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table of the LED names used by each device type.                                                                     |
| **Notes**                                   | - None |

---

#### Functions


### [discoveryCallback](#discoverycallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic.discoveryCallback(fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets/clears a callback for reacting to device discovery events.                                                                     |
| **Parameters**                              | <ul><li>fn - A function that will be called when a Blackmagic device is connected or disconnected. It should take the following arguments:
  A boolean, true if a device was connected, false if a device was disconnected.
  An `hs.blackmagic` object, being the device that was connected/disconnected.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getDevice](#getdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic.getDevice(num) -> `hs.blackmagic``                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets an `hs.blackmagic` object for the specified device.                                                                     |
| **Parameters**                              | <ul><li>num - A number that should be within the bounds of the number of connected devices.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.blackmagic` object or `nil` if something goes wrong.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic.init(fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the Blackmagic driver and sets a discovery callback.                                                                     |
| **Parameters**                              | <ul><li>fn - A function that will be called when a Blackmagic device is connected or disconnected. It should take the following arguments:
  A boolean, `true` if a device was connected, `false` if a device was disconnected.
  An `hs.blackmagic` object, being the device that was connected/disconnected.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function must be called before any other parts of this module are used.</li></ul> |

---


### [numDevices](#numdevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic.numDevices() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the number of Blackmagic devices connected.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the number of Blackmagic devices attached to the system.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Methods


### [battery](#battery)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic:battery() -> boolean, number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the battery status for the Blackmagic device.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if charging, otherwise `false`</li><li>The battery level between 0 and 100.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [callback](#callback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic:callback(fn) -> `hs.blackmagic``                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/clears the button and jog wheel callback function for a Blackmagic device.                                                                     |
| **Parameters**                              | <ul><li>fn - A function to be called when a button is pressed/released, or the jog wheel is rotated on the Blackmagic device.</li></ul> |
| **Returns**                                 | <ul><li>The hs.blackmagic device</li><li>The callback function should receive three arguments:</li><li> The `hs.blackmagic` userdata object</li><li> A string containing the name of the button or "JOG WHEEL"</li><li> A boolean indicating whether the button was pressed (true) or released (false). Not relevant if a Jog Wheel action.</li><li> The Jog Wheel Mode (if not a button press)</li><li> The Jog Wheel value (if not a button press)</li><li>You can use `hs.blackmagic.buttonNames[deviceType]` to get a table of possible values.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [deviceType](#devicetype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic:deviceType() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the device type for the Blackmagic device.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The device type as a string - either "Speed Editor" or "Editor Keyboard".</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [jogMode](#jogmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic:jogMode([value]) -> `hs.blackmagic`, string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or Sets the Jog Mode for the Blackmagic device.                                                                     |
| **Parameters**                              | <ul><li>value - an optional string of "RELATIVE", "ABSOLUTE" and "ABSOLUTE ZERO" if setting.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.blackmagic` device</li><li>"RELATIVE", "ABSOLUTE" and "ABSOLUTE ZERO" as a string, or `nil` if something has gone wrong.</li></ul>          |
| **Notes**                                   | <ul><li>You can use `hs.blackmagic.jogModeNames[deviceType]` to get a table of possible values.</li><li>"RELATIVE" - Returns a “relative” position - a positive number if turning right, and a negative number if turning left. The faster you turn, the higher the number. One step is 360.</li><li>"ABSOLUTE" - Returns an “absolute” position, based on when the mode was set. It has a range of -4096 (left of 0) to 4096 (right of 0). On the Editor Keyboard it has mechanical hard stops at -4096 and 4096, meaning you only use one half of the wheel.</li><li>"ABSOLUTE ZERO" - The same as "ABSOLUTE", but has a small dead zone around 0 - which mechincally "snaps" to zero on a Editor Keyboard.</li></ul> |

---


### [led](#led)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic:led(options) -> `hs.blackmagic``                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the status for the LED lights.                                                                     |
| **Parameters**                              | <ul><li>options - A table where the key is the button ID, and the value is a boolean to turn the LED on or off.</li></ul> |
| **Returns**                                 | <ul><li>The hs.blackmagic device.</li></ul>          |
| **Notes**                                   | <ul><li>You can also use `hs.blackmagic.ledNames[deviceType]` to get a table of possible values.</li></ul> |

---


### [serialNumber](#serialnumber)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.blackmagic:serialNumber() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the serial number for the Blackmagic device.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The serial number as a string.</li></ul>          |
| **Notes**                                   | <ul><li>The serial number is the unique identifier from the USB Device, and not the product serial number that's on the sticker on the back of the Blackmagic device.</li></ul> |

---

