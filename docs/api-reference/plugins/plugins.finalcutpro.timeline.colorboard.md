# [docs](index.md) » plugins.finalcutpro.timeline.colorboard
---

Color Board Plugins.

## API Overview
* Functions - API calls offered directly by the extension
 * [colorBoardMousePuckRelease](#colorBoardMousePuckRelease)
 * [nextAspect](#nextAspect)
 * [startMousePuck](#startMousePuck)
 * [startShiftingPuck](#startShiftingPuck)
 * [stopShiftingPuck](#stopShiftingPuck)

## API Documentation

### Functions

| [colorBoardMousePuckRelease](#colorBoardMousePuckRelease)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.colorboard.colorBoardMousePuckRelease() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Color Board Mouse Puck Release                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [nextAspect](#nextAspect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.colorboard.nextAspect() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Goes to the next Color Board aspect.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [startMousePuck](#startMousePuck)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.colorboard.startMousePuck(aspect, property) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Color Board - Puck Control Via Mouse                                                                     |
| **Parameters**                              | <ul><li>aspect - "global", "shadows", "midtones" or "highlights"</li><li>property - "Color", "Saturation" or "Exposure"</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [startShiftingPuck](#startShiftingPuck)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.colorboard.startShiftingPuck(puck, percentShift, angleShift) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts shifting the puck, repeating at the keyboard repeat rate. Runs until `stopShiftingPuck()` is called.                                                                     |
| **Parameters**                              | <ul><li>puck         - The puck to shift</li><li>property     - The property to shift (typically the `percent` or `angle` value for the puck)</li><li>amount       - The amount to shift the property.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stopShiftingPuck](#stopShiftingPuck)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.colorboard.stopShiftingPuck() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the puck from shifting with the keyboard.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

