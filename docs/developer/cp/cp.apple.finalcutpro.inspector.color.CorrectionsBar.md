# [docs](index.md) » cp.apple.finalcutpro.inspector.color.CorrectionsBar
---

The Correction selection/management bar at the top of the ColorInspector

Requires Final Cut Pro 10.4 or later.

## API Overview
* Functions - API calls offered directly by the extension
 * [CorrectionsBar](#CorrectionsBar)
 * [matches](#matches)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [correction](#correction)
 * [menuButton](#menuButton)
* Methods - API calls which can only be made on an object returned by a constructor
 * [activate](#activate)
 * [add](#add)
 * [doActivate](#doActivate)
 * [doShow](#doShow)
 * [findCorrectionLabel](#findCorrectionLabel)
 * [show](#show)

## API Documentation

### Functions

| [CorrectionsBar](#CorrectionsBar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar(parent) -> CorrectionsBar`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Media Import object.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new CorrectionsBar object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [correction](#correction)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar.correction <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `MenuButton` that lists the current correction.                                                                     |

| [menuButton](#menuButton)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar.menuButton <MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The menu button.                                                                     |

### Methods

| [activate](#activate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:activate(correctionType, number) -> cp.apple.finalcutpro.inspector.color.CorrectionsBar`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Activates a correction type.                                                                     |
| **Parameters**                              | <ul><li>`correctionType` - The correction type as string.</li><li>`number` - The number of the correction.</li></ul> |
| **Returns**                                 | <ul><li> `cp.apple.finalcutpro.inspector.color.CorrectionsBar` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [add](#add)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:add(correctionType) -> cp.apple.finalcutpro.inspector.color.CorrectionsBar`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the specific correction type.                                                                     |
| **Parameters**                              | <ul><li>`correctionType` - The correction type as string.</li></ul> |
| **Returns**                                 | <ul><li> `cp.apple.finalcutpro.inspector.color.CorrectionsBar` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doActivate](#doActivate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:doActivate(correctionType, number) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A Statement that activates a correction type.                                                                     |
| **Parameters**                              | <ul><li>`correctionType` - The correction type as string.</li><li>`number` - The number of the correction.</li></ul> |
| **Returns**                                 | <ul><li> The `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A Statement that will attempt to show the bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will resolve to `true` if successful, or send an `error` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [findCorrectionLabel](#findCorrectionLabel)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:findCorrectionLabel(correctionType) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns Correction Label.                                                                     |
| **Parameters**                              | <ul><li>correctionType - The correction type as string.</li></ul> |
| **Returns**                                 | <ul><li>The correction label as string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.CorrectionsBar:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to show the bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `CorrectionsBar` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

