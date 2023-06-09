# hs.razer

Razer device support.

This extension supports the following Razer keypad devices:

 * Razer Nostromo
 * Razer Orbweaver
 * Razer Orbweaver Chroma
 * Razer Tartarus
 * Razer Tartarus Chroma
 * Razer Tartarus Pro
 * Razer Tartarus V2

It allows you to trigger callbacks when you press buttons and use the
scroll wheel, as well as allowing you to change the LED backlights
on the buttons and scroll wheel, and control the three status lights.

By default, the Razer keypads triggers regular keyboard commands
(i.e. pressing the "01" key will type "1"). However, you can use the
`:defaultKeyboardLayout(false)` method to prevent this. This works by
remapping the default shortcut keys to "dummy" keys, so that they
don't trigger regular keypresses in macOS.

Like the [`hs.streamdeck`](http://www.hammerspoon.org/docs/hs.streamdeck.html) extension, this extension has been
designed to be modular, so it's possible for others to develop support
for additional Razer devices later down the line, if there's interest.

This extension was thrown together by [Chris Hocking](https://github.com/latenitefilms) for [CommandPost](https://commandpost.io).

This extension is based off the [`hs.streamdeck`](http://www.hammerspoon.org/docs/hs.streamdeck.html) extension by [Chris Jones](https://github.com/cmsj).

Special thanks to the authors of these awesome documents & resources:

 - [Information on USB Packets](https://www.beyondlogic.org/usbnutshell/usb6.shtml)
 - [AppleUSBDefinitions.h](https://lab.qaq.wiki/Lakr233/IOKit-deploy/-/blob/master/IOKit/usb/AppleUSBDefinitions.h)
 - [hidutil key remapping generator for macOS](https://hidutil-generator.netlify.app)
 - [macOS function key remapping with hidutil](https://www.nanoant.com/mac/macos-function-key-remapping-with-hidutil)
 - [HID Device Property Keys](https://developer.apple.com/documentation/iokit/iohidkeys_h_user-space/hid_device_property_keys)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [discoveryCallback](#discoverycallback)
 * [getDevice](#getdevice)
 * [init](#init)
 * [numDevices](#numdevices)
 * [unitTests](#unittests)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [backlightsBreathing](#backlightsbreathing)
 * [backlightsCustom](#backlightscustom)
 * [backlightsMode](#backlightsmode)
 * [backlightsOff](#backlightsoff)
 * [backlightsReactive](#backlightsreactive)
 * [backlightsSpectrum](#backlightsspectrum)
 * [backlightsStarlight](#backlightsstarlight)
 * [backlightsStatic](#backlightsstatic)
 * [backlightsWave](#backlightswave)
 * [blueStatusLight](#bluestatuslight)
 * [brightness](#brightness)
 * [callback](#callback)
 * [defaultKeyboardLayout](#defaultkeyboardlayout)
 * [greenStatusLight](#greenstatuslight)
 * [name](#name)
 * [orangeStatusLight](#orangestatuslight)
 * [redStatusLight](#redstatuslight)
 * [yellowStatusLight](#yellowstatuslight)


---

## API Documentation

### Functions


### [discoveryCallback](#discoverycallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer.discoveryCallback(fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets/clears a callback for reacting to device discovery events                                                                     |
| **Parameters**                              | <ul><li>fn - A function that will be called when a Razer device is connected or disconnected. It should take the following arguments:
  A boolean, true if a device was connected, false if a device was disconnected
  An hs.razer object, being the device that was connected/disconnected</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getDevice](#getdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer.getDevice(num) -> razerObject | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets an hs.razer object for the specified device                                                                     |
| **Parameters**                              | <ul><li>num - A number that should be within the bounds of the number of connected devices</li></ul> |
| **Returns**                                 | <ul><li>An hs.razer object or `nil` if something goes wrong</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer.init(fn)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the Razer driver and sets a discovery callback.                                                                     |
| **Parameters**                              | <ul><li>fn - A function that will be called when a Razer device is connected or disconnected. It should take the following arguments:
  A boolean, true if a device was connected, false if a device was disconnected
  An hs.razer object, being the device that was connected/disconnected</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function must be called before any other parts of this module are used</li></ul>                |

---

### [numDevices](#numdevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer.numDevices() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the number of Razer devices connected                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the number of Razer devices attached to the system</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [unitTests](#unittests)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer.unitTests() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Runs some basic unit tests when a Razer Tartarus V2 is connected.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>Because `hs.razer` relies on a physical device to</li><li>   be connected for testing, this method exists so that</li><li>   Hammerspoon developers can test the extension outside</li><li>   of the usual GitHub tests. It can also be used for</li><li>   user troubleshooting.</li><li>This feature currently only works on the Razer Tartarus V2.</li></ul>                |

---
### Methods


### [backlightsBreathing](#backlightsbreathing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:backlightsBreathing([color], [secondaryColor]) -> razerObject, boolean, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Changes the keyboard backlights to the breath mode.                                                                     |
| **Parameters**                              | <ul><li>[color] - An optional `hs.drawing.color` value</li><li>[secondaryColor] - An optional secondary `hs.drawing.color`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` if successful otherwise `false`</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul><li>If neither `color` nor `secondaryColor` is provided, then random colors will be used.</li></ul>                |

---

### [backlightsCustom](#backlightscustom)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:backlightsCustom(colors) -> razerObject, boolean, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Changes the keyboard backlights to custom colours.                                                                     |
| **Parameters**                              | <ul><li>colors - A table of `hs.drawing.color` objects for each individual button on your device (i.e. if there's 20 buttons, you should have twenty colors in the table).</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` if successful otherwise `false`</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul><li>The order is top to bottom, left to right. You can use `nil` for any buttons you don't want to light up.</li><li>Example usage: ```lua</li><li>  hs.razer.new(0):backlightsCustom({hs.drawing.color.red, nil, hs.drawing.color.green, hs.drawing.color.blue})</li><li>  ```</li></ul>                |

---

### [backlightsMode](#backlightsmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:backlightsMode(mode) -> razerObject, boolean, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Changes the keyboard backlights mode.                                                                     |
| **Parameters**                              | <ul><li>mode - "static", "flashing", "fading"</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` if successful otherwise `false`.</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [backlightsOff](#backlightsoff)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:backlightsOff() -> razerObject, boolean, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Turns all the keyboard backlights off.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` if successful otherwise `false`.</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [backlightsReactive](#backlightsreactive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:backlightsReactive(speed, color) -> razerObject, boolean, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Changes the keyboard backlights to the reactive mode.                                                                     |
| **Parameters**                              | <ul><li>speed - A number between 1 (fast) and 4 (slow)</li><li>color - A `hs.drawing.color` object</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` if successful otherwise `false`</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [backlightsSpectrum](#backlightsspectrum)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:backlightsSpectrum() -> razerObject, boolean, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Changes the keyboard backlights to the spectrum mode.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` if successful otherwise `false`</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [backlightsStarlight](#backlightsstarlight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:backlightsStarlight(speed, [color], [secondaryColor]) -> razerObject, boolean, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Changes the keyboard backlights to the Starlight mode.                                                                     |
| **Parameters**                              | <ul><li>speed - A number between 1 (fast) and 3 (slow)</li><li>[color] - An optional `hs.drawing.color` value</li><li>[secondaryColor] - An optional secondary `hs.drawing.color`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` if successful otherwise `false`</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul><li>If neither `color` nor `secondaryColor` is provided, then random colors will be used.</li></ul>                |

---

### [backlightsStatic](#backlightsstatic)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:backlightsStatic(color) -> razerObject, boolean, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Changes the keyboard backlights to a single static color.                                                                     |
| **Parameters**                              | <ul><li>color - A `hs.drawing.color` object.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` if successful otherwise `false`.</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [backlightsWave](#backlightswave)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:backlightsWave(speed, direction) -> razerObject, boolean, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Changes the keyboard backlights to the wave mode.                                                                     |
| **Parameters**                              | <ul><li>speed - A number between 1 (fast) and 255 (slow)</li><li>direction - "left" or "right" as a string</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` if successful otherwise `false`</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [blueStatusLight](#bluestatuslight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:blueStatusLight(value) -> razerObject, boolean | nil, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the blue status light.                                                                     |
| **Parameters**                              | <ul><li>value - `true` for on, `false` for off`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` for on, `false` for off`, or `nil` if something has gone wrong</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [brightness](#brightness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:brightness(value) -> razerObject, number | nil, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the brightness of a Razer keyboard.                                                                     |
| **Parameters**                              | <ul><li>value - The brightness value - a number between 0 (off) and 100 (brightest).</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>The brightness as a number or `nil` if something goes wrong.</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [callback](#callback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:callback(callbackFn) -> razerObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets or removes a callback function for the `hs.razer` object.                                                                     |
| **Parameters**                              | <ul><li>`callbackFn` - a function to set as the callback for this `hs.razer` object.  If the value provided is `nil`, any currently existing callback function is removed.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object</li></ul>          |
| **Notes**                                   | <ul><li>The callback function should expect 4 arguments and should not return anything:</li><li>  `razerObject` - The serial port object that triggered the callback.</li><li>  `buttonName` - The name of the button as a string.</li><li>  `buttonAction` - A string containing "pressed", "released", "up" or "down".</li></ul>                |

---

### [defaultKeyboardLayout](#defaultkeyboardlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:defaultKeyboardLayout(enabled) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Allows you to remap the default Keyboard Layout on a Razer device so that the buttons no longer trigger their factory default actions, or restore the default keyboard layout.                                                                     |
| **Parameters**                              | <ul><li>enabled - If `true` the Razer default will use its default keyboard layout.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [greenStatusLight](#greenstatuslight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:greenStatusLight(value) -> razerObject, boolean | nil, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the green status light.                                                                     |
| **Parameters**                              | <ul><li>value - `true` for on, `false` for off`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` for on, `false` for off`, or `nil` if something has gone wrong</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:name() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the human readable device name of the Razer device.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The device name as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [orangeStatusLight](#orangestatuslight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:orangeStatusLight(value) -> razerObject, boolean | nil, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the orange status light.                                                                     |
| **Parameters**                              | <ul><li>value - `true` for on, `false` for off`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` for on, `false` for off`, or `nil` if something has gone wrong</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [redStatusLight](#redstatuslight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:redStatusLight(value) -> razerObject, boolean | nil, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the red status light.                                                                     |
| **Parameters**                              | <ul><li>value - `true` for on, `false` for off`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` for on, `false` for off`, or `nil` if something has gone wrong</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [yellowStatusLight](#yellowstatuslight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.razer:yellowStatusLight(value) -> razerObject, boolean | nil, string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the orange status light.                                                                     |
| **Parameters**                              | <ul><li>value - `true` for on, `false` for off`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.razer` object.</li><li>`true` for on, `false` for off`, or `nil` if something has gone wrong</li><li>A plain text error message if not successful.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
