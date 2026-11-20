# plugins.finalcutpro.timeline.multicam

Multicam Tools.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [doCutAndSwitchMulticam](#docutandswitchmulticam)

---

## API Documentation

#### Functions

### [doCutAndSwitchMulticam](#docutandswitchmulticam)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.multicam.doCutAndSwitchMulticam(whichMode, whichAngle) -> Statement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a [Statement](../commandpost/cp.rx.go.Statement.md) to Cut & Switch Multicam.                                                                     |
| **Parameters**                              | <ul><li>whichMode - "Audio", "Video" or "Both" as string</li><li>whichAngle - Number of Angle</li></ul> |
| **Returns**                                 | <ul><li>[Statement](../commandpost/cp.rx.go.Statement.md) to execute</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/multicam.lua line 25](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/multicam.lua#L25) |

---

---

<script src="https://giscus.app/client.js"
        data-repo="CommandPost/CommandPost"
        data-repo-id="MDEwOlJlcG9zaXRvcnk3NDY0NTk2NQ=="
        data-category="Website Discussion"
        data-category-id="DIC_kwDOBHMBzc4CXFFA"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
