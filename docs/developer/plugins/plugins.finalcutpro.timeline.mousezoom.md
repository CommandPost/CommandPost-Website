# [docs](index.md) » plugins.finalcutpro.timeline.mousezoom
---

Allows you to zoom in or out of a Final Cut Pro timeline using the mechanical scroll wheel on your mouse or the Touch Pad on the Magic Mouse when holding down the OPTION modifier key.

Special Thanks: Iain Anderson (@funwithstuff) for all his incredible testing!

## API Overview
* Variables - Configurable values
 * [customModifier](#customModifier)
 * [enabled](#enabled)
 * [numberOfTouchDevices](#numberOfTouchDevices)
 * [offset](#offset)
 * [sensitivity](#sensitivity)
 * [threshold](#threshold)
* Functions - API calls offered directly by the extension
 * [findMagicMouses](#findMagicMouses)
 * [start](#start)
 * [stop](#stop)
 * [update](#update)

## API Documentation

### Variables

| [customModifier](#customModifier)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.customModifier <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Should Mouse Zoom be inverted?                                                                     |

| [enabled](#enabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Toggles the Enable Proxy Menu Icon                                                                     |

| [numberOfTouchDevices](#numberOfTouchDevices)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.numberOfTouchDevices -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Number of Touch Devices Detected.                                                                     |

| [offset](#offset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.offset -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Offset Value used in difference calculations.                                                                     |

| [sensitivity](#sensitivity)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.sensitivity <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Sensitivity Level                                                                     |

| [threshold](#threshold)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.threshold -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Threshold Value used in difference calculations.                                                                     |

### Functions

| [findMagicMouses](#findMagicMouses)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.findMagicMouses() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Find Magic Mouse Devices and adds them to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.start() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables the ability to zoon a timeline using your mouse scroll wheel and the OPTION modifier key.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stop](#stop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.stop() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Disables the ability to zoom a timeline using your mouse scroll wheel and the OPTION modifier key.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [update](#update)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.mousezoom.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see whether or not we should enable the timeline zoom watchers.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

