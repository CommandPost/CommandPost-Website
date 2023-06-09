# plugins.core.streamdeck.manager

Elgato Stream Deck Manager Plugin.

---

## API Overview
**Variables** - _Configurable values_
 * [defaultLayout](#defaultlayout)
 * [imageCache](#imagecache)
 * [repeatTimers](#repeattimers)

**Functions** - _API calls offered directly by the extension_
 * [buttonCallback](#buttoncallback)
 * [discoveryCallback](#discoverycallback)
 * [encoderCallback](#encodercallback)
 * [getDeviceType](#getdevicetype)
 * [getSnippetImage](#getsnippetimage)
 * [screenCallback](#screencallback)
 * [start](#start)
 * [update](#update)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [activeBanks](#activebanks)
 * [automaticallySwitchApplications](#automaticallyswitchapplications)
 * [enabled](#enabled)
 * [lastApplication](#lastapplication)
 * [lastBundleID](#lastbundleid)


---

## API Documentation

#### Variables


### [defaultLayout](#defaultlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Stream Deck Layout                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 76](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L76) |

---


### [imageCache](#imagecache)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.imageCache() -> none`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A cache of images used on the Stream Deck.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 536](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L536) |

---


### [repeatTimers](#repeattimers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.repeatTimers -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table containing `hs.timer` objects.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L46) |

---

#### Functions


### [buttonCallback](#buttoncallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.buttonCallback(object, buttonID, pressed) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stream Deck Button Callback                                                                     |
| **Parameters**                              | <ul><li>object - The `hs.streamdeck` userdata object</li><li>buttonID - A number containing the button that was pressed/released</li><li>pressed - A boolean indicating whether the button was pressed (`true`) or released (`false`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 276](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L276) |

---


### [discoveryCallback](#discoverycallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.discoveryCallback(connected, object) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stream Deck Discovery Callback                                                                     |
| **Parameters**                              | <ul><li>connected - A boolean, `true` if a device was connected, `false` if a device was disconnected</li><li>object - An `hs.streamdeck` object, being the device that was connected/disconnected</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 809](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L809) |

---


### [encoderCallback](#encodercallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.encoderCallback(object, buttonID, pressed, turningLeft, turningRight) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stream Deck Screen Callback                                                                     |
| **Parameters**                              | <ul><li>object - The `hs.streamdeck` userdata object</li><li>buttonID - The button ID</li><li>pressed - Was the encoder pressed?</li><li>turnedLeft - Did the encoder turn left?</li><li>turnedRight - Did the encoder turn right?</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 484](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L484) |

---


### [getDeviceType](#getdevicetype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.getDeviceType(object) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Translates a Stream Deck button layout into a device type string.                                                                     |
| **Parameters**                              | <ul><li>object - A `hs.streamdeck` object</li></ul> |
| **Returns**                                 | <ul><li>"Mini", "Original" or "XL"</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 249](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L249) |

---


### [getSnippetImage](#getsnippetimage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.getSnippetImage(device, buttonData, isEncoder) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates the Preference Panel HTML Content.                                                                     |
| **Parameters**                              | <ul><li>device - The device name as a string.</li><li>buttonData - A table of button data.</li><li>isEncoder - Are we dealing with an encoder?</li></ul> |
| **Returns**                                 | <ul><li>An encoded image as a string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 163](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L163) |

---


### [screenCallback](#screencallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.screenCallback(object, eventType, startX, startY, endX, endY) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stream Deck Screen Callback                                                                     |
| **Parameters**                              | <ul><li>object - The `hs.streamdeck` userdata object</li><li>eventType - The event type as a string</li><li>startX - The X position when first pressed</li><li>startY - The Y position when first pressed</li><li>endX - The X position when released</li><li>endY - The Y position when released</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 501](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L501) |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.start() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the Stream Deck Plugin                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 883](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L883) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the screens of all Stream Deck devices.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 541](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L541) |

---

#### Fields


### [activeBanks](#activebanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 81](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L81) |

---


### [automaticallySwitchApplications](#automaticallyswitchapplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.automaticallySwitchApplications <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the automatic switching of applications.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L61) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Stream Deck Support.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 942](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L942) |

---


### [lastApplication](#lastapplication)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.lastApplication <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Bank used in the Preferences Panel.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L41) |

---


### [lastBundleID](#lastbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.lastBundleID <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last Bundle ID.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/streamdeck/manager/init.lua line 66](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/streamdeck/manager/init.lua#L66) |

---

