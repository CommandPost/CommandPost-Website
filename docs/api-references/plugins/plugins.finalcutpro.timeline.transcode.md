# plugins.finalcutpro.timeline.transcode

Adds actions that allows you to transcode clips from the timeline.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [transcodeType](#transcodetype)

**Functions** - _API calls offered directly by the extension_
 * [doTranscodeSelectedBrowserClips](#dotranscodeselectedbrowserclips)
 * [doTranscodeSelectedClips](#dotranscodeselectedclips)
 * [doTranscodeSelectedTimelineClips](#dotranscodeselectedtimelineclips)
 * [optimizeSelectedClips](#optimizeselectedclips)
 * [proxySelectedClips](#proxyselectedclips)
 * [transcodeSelectedClips](#transcodeselectedclips)


---

## API Documentation

#### Constants


### [transcodeType](#transcodetype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.transcodeType -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Transcode type.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/transcode.lua line 34](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/transcode.lua#L34){target="_blank"} |

---

#### Functions


### [doTranscodeSelectedBrowserClips](#dotranscodeselectedbrowserclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.doTranscodeSelectedBrowserClips() -> Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a [Statement](cp.rx.go.Statement.md) to transcode selected browser clips.                                                                     |
| **Parameters**                              | <ul><li>transcodeType - Either "optimized" or "proxy"</li></ul> |
| **Returns**                                 | <ul><li>[Statement](cp.rx.go.Statement.md) to execute</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/transcode.lua line 208](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/transcode.lua#L208){target="_blank"} |

---


### [doTranscodeSelectedClips](#dotranscodeselectedclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.doTranscodeSelectedClips() -> Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a [Statement](cp.rx.go.Statement.md) to transcode selected clips.                                                                     |
| **Parameters**                              | <ul><li>transcodeType - Either "optimized" or "proxy"</li></ul> |
| **Returns**                                 | <ul><li>[Statement](cp.rx.go.Statement.md) to execute</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/transcode.lua line 263](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/transcode.lua#L263){target="_blank"} |

---


### [doTranscodeSelectedTimelineClips](#dotranscodeselectedtimelineclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.doTranscodeSelectedTimelineClips() -> Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a [Statement](cp.rx.go.Statement.md) to transcode selected timeline clips.                                                                     |
| **Parameters**                              | <ul><li>transcodeType - Either "optimized" or "proxy"</li></ul> |
| **Returns**                                 | <ul><li>[Statement](cp.rx.go.Statement.md) to execute</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/transcode.lua line 232](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/transcode.lua#L232){target="_blank"} |

---


### [optimizeSelectedClips](#optimizeselectedclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.optimizeSelectedClips() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Create optimised media for selected clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/transcode.lua line 182](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/transcode.lua#L182){target="_blank"} |

---


### [proxySelectedClips](#proxyselectedclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.proxySelectedClips() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Create Proxies for selected clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/transcode.lua line 195](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/transcode.lua#L195){target="_blank"} |

---


### [transcodeSelectedClips](#transcodeselectedclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.transcodeSelectedClips(transcodeType) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Transcode selected clips.                                                                     |
| **Parameters**                              | <ul><li>transcodeType - Either "optimized" or "proxy"</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/transcode.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/transcode.lua#L42){target="_blank"} |

---

