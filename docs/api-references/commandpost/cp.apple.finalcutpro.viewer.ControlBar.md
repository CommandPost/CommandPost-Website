# cp.apple.finalcutpro.viewer.ControlBar

Represents the bottom "control" bar on a [Viewer](cp.apple.finalcutpro.viewer.Viewer.md)
which contains the play/pause button, timecode, audio meters, etc.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [ControlBar](#controlbar)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [timecode](#timecode)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.ControlBar.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a `ControlBar` instance.                                                                     |
| **Parameters**                              | <ul><li>element       - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches the pattern for a `Viewer` `ControlBar`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [ControlBar](#controlbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.ControlBar(viewer)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ControlBar` instance.                                                                     |
| **Parameters**                              | <ul><li>viewer       - The [Viewer](cp.apple.finalcutpro.viewer.Viewer.md) instance.</li></ul> |
| **Returns**                                 | <ul><li>The new `ControlBar`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [timecode](#timecode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.ControlBar.timecode <cp.prop: string; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current timecode value, with the format "hh:mm:ss:ff". Setting also supports "hh:mm:ss;ff".                                                                     |

---
