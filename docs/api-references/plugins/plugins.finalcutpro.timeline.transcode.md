# plugins.finalcutpro.timeline.transcode

Adds actions that allows you to transcode clips from the timeline.

## API Overview
* Constants - Useful values which cannot be changed
 * [transcodeType](#transcodeType)
* Functions - API calls offered directly by the extension
 * [doTranscodeSelectedBrowserClips](#doTranscodeSelectedBrowserClips)
 * [doTranscodeSelectedClips](#doTranscodeSelectedClips)
 * [doTranscodeSelectedTimelineClips](#doTranscodeSelectedTimelineClips)
 * [optimizeSelectedClips](#optimizeSelectedClips)
 * [proxySelectedClips](#proxySelectedClips)
 * [transcodeSelectedClips](#transcodeSelectedClips)

## API Documentation

### Constants

| [transcodeType](#transcodeType)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.transcodeType -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Transcode type.                                                                     |

### Functions

| [doTranscodeSelectedBrowserClips](#doTranscodeSelectedBrowserClips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.doTranscodeSelectedBrowserClips() -> Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a [Statement](cp.rx.go.Statement.md) to transcode selected browser clips.                                                                     |
| **Parameters**                              | <ul><li>transcodeType - Either "optimized" or "proxy"</li></ul> |
| **Returns**                                 | <ul><li>[Statement](cp.rx.go.Statement.md) to execute</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doTranscodeSelectedClips](#doTranscodeSelectedClips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.doTranscodeSelectedClips() -> Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a [Statement](cp.rx.go.Statement.md) to transcode selected clips.                                                                     |
| **Parameters**                              | <ul><li>transcodeType - Either "optimized" or "proxy"</li></ul> |
| **Returns**                                 | <ul><li>[Statement](cp.rx.go.Statement.md) to execute</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doTranscodeSelectedTimelineClips](#doTranscodeSelectedTimelineClips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.doTranscodeSelectedTimelineClips() -> Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a [Statement](cp.rx.go.Statement.md) to transcode selected timeline clips.                                                                     |
| **Parameters**                              | <ul><li>transcodeType - Either "optimized" or "proxy"</li></ul> |
| **Returns**                                 | <ul><li>[Statement](cp.rx.go.Statement.md) to execute</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [optimizeSelectedClips](#optimizeSelectedClips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.optimizeSelectedClips() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Create optimised media for selected clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [proxySelectedClips](#proxySelectedClips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.proxySelectedClips() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Create Proxies for selected clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [transcodeSelectedClips](#transcodeSelectedClips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.transcode.transcodeSelectedClips(transcodeType) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Transcode selected clips.                                                                     |
| **Parameters**                              | <ul><li>transcodeType - Either "optimized" or "proxy"</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

