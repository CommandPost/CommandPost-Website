# plugins.core.streamdeck.manager

Elgato Stream Deck Manager Plugin.

## API Overview
* Variables - Configurable values
 * [defaultLayout](#defaultLayout)
 * [imageCache](#imageCache)
 * [repeatTimers](#repeatTimers)
* Functions - API calls offered directly by the extension
 * [buttonCallback](#buttonCallback)
 * [discoveryCallback](#discoveryCallback)
 * [encoderCallback](#encoderCallback)
 * [getDeviceType](#getDeviceType)
 * [getSnippetImage](#getSnippetImage)
 * [screenCallback](#screenCallback)
 * [start](#start)
 * [update](#update)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [activeBanks](#activeBanks)
 * [automaticallySwitchApplications](#automaticallySwitchApplications)
 * [enabled](#enabled)
 * [lastApplication](#lastApplication)
 * [lastBundleID](#lastBundleID)

## API Documentation

### Variables

| [defaultLayout](#defaultLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Stream Deck Layout                                                                     |

| [imageCache](#imageCache)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.imageCache() -> none`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A cache of images used on the Stream Deck.                                                                     |

| [repeatTimers](#repeatTimers)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.repeatTimers -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table containing `hs.timer` objects.                                                                     |

### Functions

| [buttonCallback](#buttonCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.buttonCallback(object, buttonID, pressed) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stream Deck Button Callback                                                                     |
| **Parameters**                              | <ul><li>object - The `hs.streamdeck` userdata object</li><li>buttonID - A number containing the button that was pressed/released</li><li>pressed - A boolean indicating whether the button was pressed (`true`) or released (`false`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [discoveryCallback](#discoveryCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.discoveryCallback(connected, object) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stream Deck Discovery Callback                                                                     |
| **Parameters**                              | <ul><li>connected - A boolean, `true` if a device was connected, `false` if a device was disconnected</li><li>object - An `hs.streamdeck` object, being the device that was connected/disconnected</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [encoderCallback](#encoderCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.encoderCallback(object, buttonID, pressed, turningLeft, turningRight) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stream Deck Screen Callback                                                                     |
| **Parameters**                              | <ul><li>object - The `hs.streamdeck` userdata object</li><li>buttonID - The button ID</li><li>pressed - Was the encoder pressed?</li><li>turnedLeft - Did the encoder turn left?</li><li>turnedRight - Did the encoder turn right?</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getDeviceType](#getDeviceType)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.getDeviceType(object) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Translates a Stream Deck button layout into a device type string.                                                                     |
| **Parameters**                              | <ul><li>object - A `hs.streamdeck` object</li></ul> |
| **Returns**                                 | <ul><li>"Mini", "Original" or "XL"</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getSnippetImage](#getSnippetImage)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.getSnippetImage(device, buttonData, isEncoder) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates the Preference Panel HTML Content.                                                                     |
| **Parameters**                              | <ul><li>device - The device name as a string.</li><li>buttonData - A table of button data.</li><li>isEncoder - Are we dealing with an encoder?</li></ul> |
| **Returns**                                 | <ul><li>An encoded image as a string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [screenCallback](#screenCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.screenCallback(object, eventType, startX, startY, endX, endY) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stream Deck Screen Callback                                                                     |
| **Parameters**                              | <ul><li>object - The `hs.streamdeck` userdata object</li><li>eventType - The event type as a string</li><li>startX - The X position when first pressed</li><li>startY - The Y position when first pressed</li><li>endX - The X position when released</li><li>endY - The Y position when released</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.start() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the Stream Deck Plugin                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [update](#update)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the screens of all Stream Deck devices.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [activeBanks](#activeBanks)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |

| [automaticallySwitchApplications](#automaticallySwitchApplications)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.automaticallySwitchApplications <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the automatic switching of applications.                                                                     |

| [enabled](#enabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Stream Deck Support.                                                                     |

| [lastApplication](#lastApplication)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.lastApplication <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Bank used in the Preferences Panel.                                                                     |

| [lastBundleID](#lastBundleID)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.streamdeck.manager.lastBundleID <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last Bundle ID.                                                                     |

