# plugins.core.controlsurfaces.resolve.manager

Blackmagic DaVinci Resolve Control Surface Support.

## API Overview
* Constants - Useful values which cannot be changed
 * [DEFAULT_JOG_MODE](#DEFAULT_JOG_MODE)
 * [DEFAULT_SENSITIVITY](#DEFAULT_SENSITIVITY)
 * [LONG_PRESS_DURATION](#LONG_PRESS_DURATION)
* Variables - Configurable values
 * [defaultLayout](#defaultLayout)
 * [repeatTimers](#repeatTimers)
* Functions - API calls offered directly by the extension
 * [batteryStatus](#batteryStatus)
 * [buttonCallback](#buttonCallback)
 * [discoveryCallback](#discoveryCallback)
 * [start](#start)
 * [update](#update)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [activeBanks](#activeBanks)
 * [automaticallySwitchApplications](#automaticallySwitchApplications)
 * [enabled](#enabled)
 * [items](#items)
 * [lastApplication](#lastApplication)
 * [lastBundleID](#lastBundleID)

## API Documentation

### Constants

| [DEFAULT_JOG_MODE](#DEFAULT_JOG_MODE)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.DEFAULT_JOG_MODE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default Jog Wheel Mode.                                                                     |

| [DEFAULT_SENSITIVITY](#DEFAULT_SENSITIVITY)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.DEFAULT_SENSITIVITY -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default sensitivity used for Blackmagic Resolve Control Surfaces.                                                                     |

| [LONG_PRESS_DURATION](#LONG_PRESS_DURATION)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.LONG_PRESS_DURATION -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | How long a button needs to be pressed before it's considered a long press (in seconds).                                                                     |

### Variables

| [defaultLayout](#defaultLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.defaultLayout -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Layout                                                                     |

| [repeatTimers](#repeatTimers)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.repeatTimers -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table containing `hs.timer` objects.                                                                     |

### Functions

| [batteryStatus](#batteryStatus)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.batteryStatus(deviceType, deviceID) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Battery Status for a specific device                                                                     |
| **Parameters**                              | <ul><li>deviceType - A string, either "Speed Editor" or "Editor Keyboard"</li><li>deviceID - A string with the device ID</li></ul> |
| **Returns**                                 | <ul><li>charging - A boolean</li><li>level - The battery level as a number</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [buttonCallback](#buttonCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.buttonCallback(object, buttonID, pressed) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Control Surface Button Callback                                                                     |
| **Parameters**                              | <ul><li>object - The `hs.resolve` userdata object</li><li>buttonID - A number containing the button that was pressed/released</li><li>pressed - A boolean indicating whether the button was pressed (`true`) or released (`false`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [discoveryCallback](#discoveryCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.discoveryCallback(connected, object) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Control Surface Discovery Callback                                                                     |
| **Parameters**                              | <ul><li>connected - A boolean, `true` if a device was connected, `false` if a device was disconnected</li><li>object - An `hs.speededitor` object, being the device that was connected/disconnected</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.start() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops DaVinci Resolve Control Surface Support.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [update](#update)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates all the control surface LEDs.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [activeBanks](#activeBanks)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.activeBanks <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Table of active banks for each application.                                                                     |

| [automaticallySwitchApplications](#automaticallySwitchApplications)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.automaticallySwitchApplications <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable the automatic switching of applications.                                                                     |

| [enabled](#enabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable DaVinci Resolve Control Surface support                                                                     |

| [items](#items)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.items <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A table containing the control surface layout.                                                                     |

| [lastApplication](#lastApplication)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.lastApplication <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Bank used in the Preferences Panel.                                                                     |

| [lastBundleID](#lastBundleID)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.manager.lastBundleID <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last Bundle ID.                                                                     |

