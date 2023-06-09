# plugins.finalcutpro.timeline.matchframe

Match Frame Tools for Final Cut Pro.

## API Overview
* Variables - Configurable values
 * [hiddenKeywords](#hiddenKeywords)
* Functions - API calls offered directly by the extension
 * [getMulticamAngleFromSelectedClip](#getMulticamAngleFromSelectedClip)
 * [matchFrame](#matchFrame)
 * [multicamMatchFrame](#multicamMatchFrame)

## API Documentation

### Variables


### [hiddenKeywords](#hiddenKeywords)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.matchframe.hiddenKeywords <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Favourite Keywords                                                                     |

---
### Functions


### [getMulticamAngleFromSelectedClip](#getMulticamAngleFromSelectedClip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.matchframe.getMulticamAngleFromSelectedClip() -> angle | boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Multicam Angle From Selected Clip                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Angle or `false` on error</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [matchFrame](#matchFrame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.matchframe.matchFrame() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a Single Match Frame.                                                                     |
| **Parameters**                              | <ul><li>`focus`  - If set to `true`, the library will search for the matched clip title</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [multicamMatchFrame](#multicamMatchFrame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.matchframe.multicamMatchFrame(goBackToTimeline) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Multicam Match Frame                                                                     |
| **Parameters**                              | <ul><li>goBackToTimeline - `true` if you want to go back to the timeline after opening the clip in the Multicam Editor</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
