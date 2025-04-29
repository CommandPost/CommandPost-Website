# plugins.finalcutpro.timeline.height

Shortcut for changing Final Cut Pro's Timeline Height

---

## API Overview
**Variables** - _Configurable values_
 * [changeTimelineClipHeightAlreadyInProgress](#changetimelineclipheightalreadyinprogress)

**Functions** - _API calls offered directly by the extension_
 * [changeTimelineClipHeight](#changetimelineclipheight)
 * [changeTimelineClipHeightRelease](#changetimelineclipheightrelease)
 * [shiftClipHeight](#shiftclipheight)


---

## API Documentation

#### Variables


### [changeTimelineClipHeightAlreadyInProgress](#changetimelineclipheightalreadyinprogress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.height.changeTimelineClipHeightAlreadyInProgress -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Change timeline clip height already in progress.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/height.lua line 18](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/height.lua#L18) |

---

#### Functions


### [changeTimelineClipHeight](#changetimelineclipheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.height.changeTimelineClipHeight(direction) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Change the Timeline Clip Height                                                                     |
| **Parameters**                              | <ul><li>direction - "up" or "down"</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/height.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/height.lua#L64) |

---


### [changeTimelineClipHeightRelease](#changetimelineclipheightrelease)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.height.changeTimelineClipHeightRelease() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Change Timeline Clip Height Release.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/height.lua line 50](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/height.lua#L50) |

---


### [shiftClipHeight](#shiftclipheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.height.shiftClipHeight(direction) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shift Clip Height                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/height.lua line 23](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/height.lua#L23) |

---

